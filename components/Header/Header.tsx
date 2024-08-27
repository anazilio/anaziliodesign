import { ImageType } from '../../types/ImageType';

import { allLinks } from '../../mocks/allLinks';
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
  const dashHover = (link: string) => {
    if (link === allLinks.HOME) {
      return (
        <svg
          width="99"
          height="11"
          viewBox="0 0 99 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5.50005C2 5.50005 44.5 0.000103354 48.5 3.00005C52.5 6.00001 46 9.50005 46 9.50005C59 5.83339 87.4 -0.599945 97 3.00005"
            stroke="#B784CE"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styled.row_portfolio}
          ></path>
        </svg>
      );
    }
    if (link === allLinks.CONTACT) {
      return (
        <svg
          width="80"
          height="8"
          viewBox="0 0 80 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6C26.6667 3.83333 63.5 -0.49995 78.5 4.5001"
            stroke="#B784CE"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styled.row_contact}
          ></path>
        </svg>
      );
    }
  };

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
                    {dashHover(item.link)}
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
