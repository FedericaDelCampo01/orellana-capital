import { NextApiRequest, NextApiResponse } from 'next';
import * as postmark from 'postmark';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Request Body:', req.body);
  console.log('Postmark API Token:', process.env.REACT_APP_POSTMARK_API_TOKEN);
  console.log('Sender Email:', process.env.REACT_APP_SENDER_EMAIL);

  // Initialize the Postmark client with your server token
  const client = new postmark.ServerClient(process.env.REACT_APP_POSTMARK_API_TOKEN as string);
  const senderEmail = process.env.REACT_APP_SENDER_EMAIL as string;

  if (req.method === 'POST') {
    try {
      const { name, email, phone, type, message } = req.body;
      const subject = `New ${type} inquiry from ${name}`;

      // Send email
      const emailResponse = await client.sendEmail({
        From: senderEmail,
        To: senderEmail,
        Subject: subject,
        HtmlBody: `
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Type of Project:</strong> ${type}</p>
          <h3>Message:</h3>
          <p>${message}</p>
        `,
      });

      console.log('Email Sent:', emailResponse); // Log the response from Postmark
      return res.status(200).json({ message: 'Email sent successfully', emailResponse });
    } catch (error: any) {
      return res.status(500).json({ error: 'Error sending email', details: error.message });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
