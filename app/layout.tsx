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
  description: 'Transformando ideias em arte'
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
