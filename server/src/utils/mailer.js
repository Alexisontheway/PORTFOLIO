import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Escape a string for safe inclusion in HTML.
 * Prevents HTML injection in email notifications, since user-supplied
 * name/email/message values are interpolated into an HTML template.
 */
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


/**
 * Send email notification for new contact form submission
 */
export async function sendContactNotification({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  // Skip if SMTP is not configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('⚠️  SMTP not configured — skipping email notification');
    return null;
  }

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
    replyTo: email,
    subject: `🔔 New Portfolio Message from ${safeName}`,

    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background: #f8fafc; border-radius: 12px;">
        <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 20px 30px; border-radius: 8px; margin-bottom: 24px;">
          <h2 style="color: white; margin: 0; font-size: 20px;">New Contact Message</h2>
        </div>
        <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e2e8f0;">
          <p style="margin: 0 0 16px;"><strong style="color: #334155;">Name:</strong> <span style="color: #64748b;">${safeName}</span></p>
          <p style="margin: 0 0 16px;"><strong style="color: #334155;">Email:</strong> <a href="mailto:${safeEmail}" style="color: #3b82f6;">${safeEmail}</a></p>

          <p style="margin: 0 0 8px;"><strong style="color: #334155;">Message:</strong></p>
           <p style="color: #64748b; background: #f8fafc; padding: 16px; border-radius: 6px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
        </div>
        <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
          Sent from your portfolio contact form
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Notification email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Email send failed:', error.message);
    // Re-throw so the caller can log with request context.
    // Controller catches this to avoid failing the user's request.
    throw error;

  }
}
