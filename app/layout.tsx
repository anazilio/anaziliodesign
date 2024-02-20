import { Poppins } from 'next/font/google';

import '../styles/globals.scss';
import '../styles/theme.scss';
import { Footer, Header } from '../components';

import { changeHeader } from '../utils/changeHeader';

import { footerMock } from '../mocks/footer';
import { headerMock } from '../mocks/header';
import { Providers } from './providers';
import 'aos/dist/aos.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = changeHeader({
  title: 'G.Martins',
  description: 'GMartins descrição'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Providers>
          <div>
            <Header {...headerMock} />
            {/* <nav>
            <ul>
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <Link href="/users">usuarios</Link>
              </li>
              <li>
                <Link href="/login">login</Link>
              </li>
            </ul>
          </nav>
          <hr /> */}
            {children}
          </div>
          <Footer
            footerItems={footerMock.footerItems}
            image={footerMock.image}
            subFooterText={footerMock.subFooterText}
          />
        </Providers>
      </body>
    </html>
  );
}
