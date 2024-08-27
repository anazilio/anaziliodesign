import Image from 'next/image';

import { allLinks } from '../../mocks/allLinks';
import { HeaderProps } from '../Header/Header';
import { Link } from '../Link/Link';
import styled from './style.module.scss';

export type LogoProps = Pick<HeaderProps, 'logo'>;

export const Logo = ({ logo }: LogoProps) => {
  return (
    <div className={styled.Logo}>
      <Link
        href={allLinks.HOME}
        label={
          <>
            <Image
              src={logo.desktop.url}
              alt={logo.desktop.alt}
              width={115}
              height={55}
              draggable={false}
              blurDataURL={logo.desktop.url}
              className={styled.logoDesktop}
              loading="lazy"
            />
            <Image
              src={logo.mobile.url}
              alt={logo.mobile.alt}
              width={40}
              height={40}
              draggable={false}
              blurDataURL={logo.mobile.url}
              className={styled.logoMobile}
              loading="lazy"
            />
          </>
        }
      />
    </div>
  );
};
