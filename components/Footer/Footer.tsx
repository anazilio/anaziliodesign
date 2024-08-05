import Image from 'next/image';
import Link from 'next/link';

import { Container } from '../Container/Container';
import styled from './style.module.scss';

export type FooterProps = {
  year: string;
};

export const Footer = ({ year }: FooterProps) => {
  return (
    <footer className={styled.Footer}>
      <Container>
        <span>Ana Zilio Design • Todos os direito reservados • {year}</span>
        <Link href={'https://portfolio-williams25.vercel.app/'} target="_blank">
          <Image
            src={'/assets/images/logo_william.svg'}
            alt="logo_william"
            width={20}
            height={20}
          />
        </Link>
      </Container>
    </footer>
  );
};
