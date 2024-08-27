import { ImageType } from '../../types/ImageType';

import { Container } from '../Container/Container';
import { Link } from '../Link/Link';
import { Logo } from '../Logo/Logo';
import { MenuMobile } from '../MenuMobile/MenuMobile';
import styled from './style.module.scss';

export type HeaderItems = {
  label: string;
  link: string;
  target?: string;
};

export type HeaderProps = {
  menuItems: HeaderItems[];

  logo: {
    desktop: ImageType;
    mobile: ImageType;
  };
};

export const Header = ({ logo, menuItems }: HeaderProps) => {
  return (
    <>
      <div className={styled.content}>
        <header className={styled.Header}>
          <Container>
            <MenuMobile menuItems={menuItems} />
            <Logo logo={logo} />

            <nav>
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      label={item.label}
                      target={item.target || undefined}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </header>
      </div>

      <span className={styled.fixedHeader} id="tp" />
    </>
  );
};
