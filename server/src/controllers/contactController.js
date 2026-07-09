import { createContact } from '../models/contactModel.js';
import { sendContactNotification } from '../utils/mailer.js';

/**
 * POST /api/contact
 * Submit a new contact message
 */
export async function submitContact(req, res) {
  try {
    const { name, email, message } = req.body;

    // Save to database
    const contact = await createContact({ name, email, message });

      // Send email notification (non-blocking, but log any failures)
    sendContactNotification({ name, email, message }).catch((err) => {
      console.error('Email notification failed for contact', contact.id, ':', err.message);
    });


    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: {
        id: contact.id,
        created_at: contact.created_at,
      },
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
}

