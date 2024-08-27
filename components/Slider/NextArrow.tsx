/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties, MouseEvent } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export type NextArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const NextArrow = (props: NextArrowProps) => {
  const { className, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick as any}
      aria-label="proxima imagem"
    >
      <MdOutlineKeyboardArrowRight size={24} />
    </button>
  );
};
