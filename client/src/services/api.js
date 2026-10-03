import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
const DIRECT_EMAIL_RECIPIENT = 'bhatiagungun1111@gmail.com';

export const sendContactInquiry = async (formData) => {
  let backendSuccess = false;
  let emailDelivered = false;
  let responseData = null;

  // 1. Send to Backend Database API
  try {
    const response = await axios.post(`${API_BASE_URL}/contact`, formData, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000,
    });
    backendSuccess = true;
    responseData = response.data;
  } catch (error) {
    console.warn('Backend API submission skipped/sleeping, proceeding to direct email delivery:', error.message);
  }

  // 2. Direct Email Dispatch to Gungun's Inbox (bhatiagungun1111@gmail.com)
  try {
    const emailPayload = {
      _subject: `📩 New Project Inquiry from ${formData.name || 'Portfolio Client'}`,
      _template: 'table',
      _captcha: 'false',
      name: formData.name,
      email: formData.email,
      projectType: formData.projectType || 'Full-Stack Web Application',
      budget: formData.budget || 'Flexible',
      message: formData.message,
    };

    const emailRes = await axios.post(
      `https://formsubmit.co/ajax/${DIRECT_EMAIL_RECIPIENT}`,
      emailPayload,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        timeout: 10000,
      }
    );

    if (emailRes.data && (emailRes.data.success === 'true' || emailRes.data.success === true || emailRes.status === 200)) {
      emailDelivered = true;
    }
  } catch (emailErr) {
    console.warn('Direct email service notice:', emailErr.message);
  }

  // If at least one channel succeeded
  if (backendSuccess || emailDelivered) {
    return (
      responseData || {
        success: true,
        message: 'Thank you! Your project inquiry has been sent directly to Gungun at bhatiagungun1111@gmail.com.',
      }
    );
  }

  // Fallback if both networks failed
  throw new Error('Unable to send automatically. Please email directly to bhatiagungun1111@gmail.com');
};

