import { FormContactUs } from '../components/FormContact/FormContact';

export const templateMailFormContact = ({
  cellphone,
  mail,
  message,
  name
}: FormContactUs) => `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <ul>
    <li>${name}</li>
    <li>${mail}</li>
    <li>${cellphone}</li>
    <li>${message}</li>
  </ul>
</body>
</html>`;

export const templateMailFormWorkWithUs = ({ cellphone, mail, name }) => `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <ul>
    <li>${name}</li>
    <li>${mail}</li>
    <li>${cellphone}</li>
  </ul>
</body>
</html>`;
