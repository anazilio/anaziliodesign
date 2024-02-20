import { FormContactUs } from '../components/FormContact/FormContact';

import axios from 'axios';

export const sendMailService = {
  contact: (data: FormContactUs) => axios.post('/api/sendmail/contact', data),
  workwithus: (data: FormData) => axios.post('/api/sendmail/workwithus', data)
};
