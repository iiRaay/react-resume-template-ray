// pages/api/sendEmail.ts

import sgMail from '@sendgrid/mail';
import type {NextApiRequest, NextApiResponse} from 'next';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface EmailRequestBody {
    to: string;
    from: string;
    subject: string;
    text: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {to, from, subject, text}: EmailRequestBody = req.body;

        const msg = {
            to,
            from,
            subject,
            text,
        };

        try {
            await sgMail.send(msg);
            res.status(200).json({message: 'Email sent successfully'});
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({error: 'Failed to send email'});
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
