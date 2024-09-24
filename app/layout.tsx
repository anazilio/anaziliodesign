import { Lexend } from 'next/font/google';

import { Footer, Header } from '../components';

import { changeHeader } from '../utils/changeHeader';

import { headerMock } from '../mocks/header';
import { Providers } from './providers';

import 'aos/dist/aos.css';
import '../styles/theme.scss';
import '../styles/globals.scss';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = changeHeader({
  title: 'Ana Zilio',
  description:
    'Ana Zilio é uma designer com mais de 10 anos de experiência, dedicada a transformar ideias em experiências visuais impactantes. Com um portfólio diversificado que abrange desde identidades visuais até interfaces intuitivas, Ana combina estética e funcionalidade em cada projeto. Seu olhar atento às necessidades dos usuários e sua habilidade em criar soluções criativas garantem resultados que não apenas encantam, mas também resolvem problemas reais. Acesse e descubra como Ana pode ajudar sua marca a se destacar!'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={lexend.className}>
        <Providers>
          <div>
            <Header {...headerMock} />
            {children}
          </div>
          <Footer year={new Date().getFullYear().toString()} />
        </Providers>
      </body>
    </html>
  );
}
