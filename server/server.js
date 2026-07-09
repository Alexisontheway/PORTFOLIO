import dotenv from "dotenv";

dotenv.config();

console.log("PORT =", process.env.PORT);
console.log("DATABASE_URL configured =", Boolean(process.env.DATABASE_URL));

import app from './src/app.js';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════════╗
  ║   Portfolio API Server                    ║
  ║   Running on http://localhost:${PORT}        ║
  ║   Environment: ${(process.env.NODE_ENV || 'development').padEnd(22)}║
  ╚══════════════════════════════════════════╝
  `);
});
