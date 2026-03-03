import { IContactForm } from '../components/Contact/Contact';

export const templateMailFormContact = ({
  email,
  subject,
  message,
  name
}: IContactForm) => `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Novo contato</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding: 40px 0;">
    <tr>
      <td align="center">

        <!-- Card principal -->
        <table width="600" cellpadding="0" cellspacing="0"
          style="background:#ffffff; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.05); overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background-color:#1f2937; padding:20px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:20px;">
                📩 Novo formulário de contato
              </h1>
            </td>
          </tr>

          <!-- Conteúdo -->
          <tr>
            <td style="padding:30px;">

              <p style="margin:0 0 20px 0; font-size:16px; color:#333;">
                Você recebeu uma nova mensagem através do formulário do site.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px; color:#555;">

                <tr>
                  <td style="padding:10px 0; font-weight:bold; width:120px;">Assunto:</td>
                  <td style="padding:10px 0;">${subject}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0; font-weight:bold;">Nome:</td>
                  <td style="padding:10px 0;">${name}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0; font-weight:bold;">Email:</td>
                  <td style="padding:10px 0;">
                    <a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">
                      ${email}
                    </a>
                  </td>
                </tr>

              </table>

              <!-- Mensagem -->
              <div style="margin-top:20px;">
                <p style="font-weight:bold; margin-bottom:10px;">Mensagem:</p>
                <div style="
                  background:#f9fafb;
                  padding:15px;
                  border-radius:6px;
                  border:1px solid #e5e7eb;
                  white-space:pre-line;
                  line-height:1.5;
                ">
                  ${message}
                </div>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f3f4f6; padding:15px; text-align:center; font-size:12px; color:#777;">
              Este email foi enviado automaticamente pelo formulário do seu site.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
