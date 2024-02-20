import { ReactNode } from 'react';

import styled from './style.module.scss';

import classNames from 'classnames';

export type TitleProps = {
  title: string;
  subTitle?: ReactNode;
  colorTitle?: 'title-primary' | 'title-secondary';
  colorDash?: 'dash-primary' | 'dash-secondary' | 'dash-white';
  isDashTop?: boolean;
};

export const Title = ({
  title,
  colorDash = 'dash-primary',
  colorTitle = 'title-primary',
  subTitle,
  isDashTop
}: TitleProps) => {
  return (
    <h1
      className={classNames(
        `${styled.Title} ${styled[colorDash]} ${styled[colorTitle]}`,
        {
          [styled['dash-top']]: isDashTop
        }
      )}
    >
      {title}
      {!!subTitle && <span>{subTitle}</span>}
    </h1>
  );
};
