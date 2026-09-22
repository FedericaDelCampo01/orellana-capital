import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const subject = `Nueva consulta en la web por parte de: ${name}`;

    const { data, error } = await resend.emails.send({
      from: 'Web Orellana Capital <contacto@orellanacapitaladvisors.com>',
      to: ['alejandro@orellanacapitaladvisors.com'],
      replyTo: email,
      subject,
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No provisto'}</p>
        <h3>Mensaje:</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Error al enviar email', details: error.message });
    }

    return res.status(200).json({ message: 'Email enviado con éxito', data });
  } catch (error: any) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Error al enviar email', details: error.message });
  }
}