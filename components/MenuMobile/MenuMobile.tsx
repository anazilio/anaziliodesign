'use client';

import { useSideDrawer } from '../../hooks/useSideDrawer';
import { HeaderProps } from '../Header/Header';
import { Link } from '../Link/Link';
import { SideDrawer } from '../SideDrawer/SideDrawer';
import styled from './style.module.scss';

export type MenuMobileProps = Pick<HeaderProps, 'menuItems'>;

export const MenuMobile = ({ menuItems }: MenuMobileProps) => {
  const { changeSideDrawer, openSideDrawer } = useSideDrawer();
  return (
    <div className={styled.MenuMobile}>
      <SideDrawer open={openSideDrawer} changeOpen={changeSideDrawer}>
        <div className={styled.contentMenu}>
          {menuItems.map((menuItem, index) => (
            <div key={index} className={styled.menuItem}>
              <Link
                href={menuItem.link}
                label={menuItem.label}
                onClick={() => changeSideDrawer(false)}
              />
            </div>
          ))}
        </div>
      </SideDrawer>
    </div>
  );
};
