import { IContactForm } from '../components/Contact/Contact';

import axios from 'axios';

export const sendMailService = {
  contact: (data: IContactForm) => axios.post('/api/sendmail/contact', data)
};
