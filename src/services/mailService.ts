// Dependencies
import emailjs from '@emailjs/browser';

export const sendEmail = async (
  email: string,
  name: string,
  message: string
) => {
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  const res = await emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    {
      subject: `Portfolio Contact Request from ${name} <${email}>`,
      name,
      email,
      message,
    }
  );

  if (res.status !== 200) {
    throw new Error('Failed to send the email.');
  }

  return res;
};
