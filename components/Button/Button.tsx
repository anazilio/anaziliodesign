import { ButtonHTMLAttributes, ReactNode } from 'react';

import styled from './style.module.scss';

import classNames from 'classnames';

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'className' | 'style'
> & {
  typeStyle: 'primary' | 'secondary';
  label: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
};

export const Button = ({
  label,
  typeStyle = 'primary',
  iconStart,
  iconEnd,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(`${styled.Button} ${styled[typeStyle]}`)}
    >
      {!!iconStart && iconStart}
      {label}
      {!!iconEnd && iconEnd}
    </button>
  );
};
