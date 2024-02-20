import { EmailPayload } from '../types/EmailPayload';

import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import nodemailer from 'nodemailer';

const smtpOptions = {
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT!),
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD
  }
};

export const configTransporter = () => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
    connectionTimeout: 10000
  });

  transporter.verify(function (error) {
    if (error) {
      console.log('Erro na verificação do transporte:', error);
    } else {
      console.log('Transportador pronto para enviar emails');
    }
  });

  return transporter;
};

export default class SendMailer {
  private cc: string[] = [];
  private html: string = '';
  private subject: string = '';
  private attachDataUrls: boolean | undefined = false;
  private attachments: Mail.Attachment[] | undefined = [];
  private to: string[] | undefined = [];
  private transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo> =
    nodemailer.createTransport({
      ...smtpOptions,
      connectionTimeout: 10000
    });

  constructor({
    cc,
    html,
    subject,
    attachDataUrls,
    attachments,
    to
  }: EmailPayload) {
    this.attachDataUrls = attachDataUrls;
    this.attachments = attachments;
    this.cc = cc;
    this.html = html;
    this.subject = subject;
    this.to = to;
  }

  async sendMail() {
    return await this.transporter.sendMail({
      cc: this.cc,
      html: this.html,
      subject: this.subject,
      attachDataUrls: this.attachDataUrls,
      attachments: this.attachments,
      from: process.env.NEXT_PUBLIC_SMTP_FROM_EMAIL,
      to: [process.env.NEXT_PUBLIC_SMTP_FROM_EMAIL!, ...(this.to ?? [])],
      priority: 'high'
    });
  }
}
