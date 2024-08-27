'use client';

import { CSSProperties, ReactNode, useMemo } from 'react';

import styled from './style.module.scss';

import classNames from 'classnames';

export type SideDrawerProps = {
  direction?: 'right' | 'left';
  open: boolean;
  changeOpen: (open: boolean) => void;
  children: ReactNode;
};

export const SideDrawer = ({
  direction = 'left',
  changeOpen,
  open = false,
  children
}: SideDrawerProps) => {
  const styledSideDrawer = useMemo((): CSSProperties => {
    return {
      zIndex: open ? 1100 : -1,
      opacity: open ? 1 : 0,
      visibility: open ? 'visible' : 'hidden'
    };
  }, [open]);

  const styledContent = useMemo((): CSSProperties => {
    return {
      position: 'relative',
      zIndex: open ? 1100 : -1,
      transform:
        direction === 'left'
          ? `translateX(${open ? 0 : -350}px) translateY(0)`
          : `translateX(${open ? 0 : 350}px) translateY(0)`,
      margin: direction === 'left' ? '0 auto 0 0' : '0 0 0 auto'
    };
  }, [direction, open]);

  const styledOverlay = useMemo((): CSSProperties => {
    return {
      opacity: open ? 1 : 0,
      visibility: open ? 'visible' : 'hidden'
    };
  }, [open]);

  return (
    <>
      <button
        className={classNames(`${styled.button}`, {
          [styled.icon_open_menu]: !open,
          [styled.icon_close_menu]: open
        })}
        onClick={() => changeOpen(!open)}
        aria-label="Abrir menu"
      />

      <div className={styled.SideDrawer} style={styledSideDrawer}>
        <div className={styled.content} style={styledContent}>
          {children}
        </div>

        <span
          className={styled.overlay}
          style={styledOverlay}
          onClick={() => changeOpen(!open)}
        />
      </div>
    </>
  );
};
