import { IContactForm } from '../components/Contact/Contact';

export const templateMailFormContact = ({
  email,
  subject,
  message,
  name
}: IContactForm) => `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <ul>
    <li>${subject}</li>
    <li>${name}</li>
    <li>${email}</li>
    <li>${message}</li>
  </ul>
</body>
</html>`;
