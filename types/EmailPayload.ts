export type EmailPayload = {
  subject: string;
  html: string;
  cc: string[];
  to?: string[];
  attachDataUrls?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attachments?: any[];
};
