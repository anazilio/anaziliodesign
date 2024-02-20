import { ReactNode } from 'react';

import styled from './style.module.scss';

export type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className={styled.Container}>{children}</div>;
};
