import { NextApiRequest, NextApiResponse } from 'next';
import * as postmark from 'postmark';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Initialize the Postmark client with your server token
  const client = new postmark.ServerClient(process.env.REACT_APP_POSTMARK_API_TOKEN as string);
  const senderEmail = process.env.REACT_APP_SENDER_EMAIL as string;

  if (req.method === 'POST') {
    try {
      const { name, email, phone, type, message } = req.body;
      const subject = `Nueva consulta en la web por parte de: ${name}`;

      // Send email
      const emailResponse = await client.sendEmail({
        From: senderEmail,
        To: senderEmail,
        Subject: subject,
        HtmlBody: `
          <h2>Nuevo mensaje desde la web</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone || 'Not provided'}</p>
          <h3><Mensaje:</h3>
          <p>${message}</p>
        `,
      });

      console.log('Email enviado:', emailResponse); // Log the response from Postmark
      return res.status(200).json({ message: 'Email enviado con éxito', emailResponse });
    } catch (error: any) {
      return res.status(500).json({ error: 'Error al enviar email', details: error.message });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed..' });
  }
}
