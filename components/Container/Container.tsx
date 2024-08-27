import { ReactNode } from 'react';

import styled from './style.module.scss';

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className = '' }: ContainerProps) => {
  return <div className={`${styled.Container} ${className}`}>{children}</div>;
};
