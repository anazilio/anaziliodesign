import { ImageType } from '../../types/ImageType';

import { Container } from '../Container/Container';
import { Link } from '../Link/Link';
import { Logo } from '../Logo/Logo';
import { MenuMobile } from '../MenuMobile/MenuMobile';
import styled from './style.module.scss';

export type HeaderItems = {
  label: string;
  link: string;
};

export type HeaderProps = {
  menuItems: HeaderItems[];
  subMenuItems: HeaderItems[];
  logo: {
    desktop: ImageType;
    mobile: ImageType;
  };
};

export const Header = ({ logo, menuItems, subMenuItems }: HeaderProps) => {
  return (
    <>
      <div className={styled.content}>
        <div className={styled.subHeader}>
          <Container>
            {subMenuItems.map((item, index) => (
              <div
                key={index}
                className={
                  index < subMenuItems.length - 1 ? styled.separator : ''
                }
              >
                <Link href={item.link} label={item.label} target="_blank" />
              </div>
            ))}
          </Container>
        </div>

        <header className={styled.Header}>
          <Container>
            <MenuMobile menuItems={menuItems} />
            <Logo logo={logo} />

            <nav>
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} label={item.label} />
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </header>
      </div>

      <span className={styled.fixedHeader} />
    </>
  );
};
