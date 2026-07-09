import { Router } from 'express';
import { submitContact } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiter.js';
import { contactValidationRules, validate } from '../middleware/validator.js';

const router = Router();

// POST /api/contact — Submit contact form
router.post(
  '/',
  contactLimiter,
  contactValidationRules,
  validate,
  submitContact
);

// GET /api/contact — Removed for security.
// View submissions directly in the database (Neon SQL console).


export default router;
