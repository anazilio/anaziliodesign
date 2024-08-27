import { NextApiRequest, NextApiResponse } from 'next';

import { IContactForm } from '../../../components/Contact/Contact';

import { templateMailFormContact } from '../../../utils/htmlTemplateMail';
import SendMailer from '../../../utils/sendMail';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const contactData = req.body as IContactForm;

    try {
      const mailer = new SendMailer({
        cc: [contactData.email],
        subject: `Portfolio - ${contactData.subject} `,
        html: templateMailFormContact(contactData)
      });
      await mailer.sendMail();

      return res.status(201).json({ message: 'Email sent successfully' });
    } catch (error) {
      return res.status(200).json({ message: JSON.stringify(error) });
    }
  }
  return res.status(400).json({ message: 'Error' });
}
