import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { generalLimiter } from './middleware/rateLimiter.js';
import contactRoutes from './routes/contactRoutes.js';
import pool from './config/db.js';

const app = express();
const isProduction = process.env.NODE_ENV === 'production';

// ---------------------
// Trust Proxy (Required for Render / any reverse proxy)
// ---------------------
app.set('trust proxy', 1);

// ---------------------
// Security Middleware
// ---------------------
app.use(helmet());

// CORS
const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:3000')
  .split(',')
  .map((url) => url.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // In development, allow requests with no origin (curl, Postman, etc.)
      // In production, require a matching origin to prevent unauthorized clients.
      if (!origin) {
        if (!isProduction) return callback(null, true);
        return callback(new Error('Not allowed by CORS: origin required'));
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.warn('Blocked by CORS:', origin, '- Allowed:', allowedOrigins);
      return callback(new Error('Not allowed by CORS'));
    },

    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  })
);
// Body parsing
app.use(express.json({ limit: '10kb' }));

// General rate limiting for all API routes
app.use('/api/', generalLimiter);

// ---------------------
// Routes
// ---------------------

// Health check — verifies DB connectivity, not just process liveness
app.get('/api/health', async (req, res) => {
  const health = {


    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
   database: 'unknown',
  };

  try {
    await pool.query('SELECT 1');
    health.database = 'ok';
    res.json(health);
  } catch (err) {
    health.status = 'degraded';
    health.database = 'error';
    console.error('Health check DB error:', err.message);
    res.status(503).json(health);
  }
  });



// Contact API
app.use('/api/contact', contactRoutes);

// ---------------------
// Error Handling
// ---------------------

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.path} not found`,
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: isProduction ? 'Internal server error' : err.message,
  });
});

export default app;