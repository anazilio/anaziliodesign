import { ImageType } from '../../types/ImageType';

import { Container } from '../Container/Container';
import { ILinkProps } from '../Link/Link';
import { FooterDesktop } from './Desktop/FooterDesktop';
import { FooterMobile } from './Mobile/FooterMobile';
import styled from './style.module.scss';

export type FooterItems = {
  title: string;
  items: {
    link?: Pick<ILinkProps, 'href' | 'label'>;
    description?: string;
  }[];
};

export type FooterProps = {
  footerItems: FooterItems[];
  image: ImageType;
  subFooterText: string;
};

export const Footer = ({ footerItems, subFooterText, image }: FooterProps) => {
  return (
    <footer className={styled.Footer}>
      <Container>
        <div className={styled.FooterDesktop}>
          <FooterDesktop footerItems={footerItems} image={image} />
        </div>
        <div className={styled.FooterMobile}>
          <FooterMobile footerItems={footerItems} />
        </div>
      </Container>
      <div className={styled.subFooter}>
        <span>{subFooterText}</span>
      </div>
    </footer>
  );
};
