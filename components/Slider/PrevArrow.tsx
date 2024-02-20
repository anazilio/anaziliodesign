/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties, MouseEvent } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

export type PrevArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const PrevArrow = (props: PrevArrowProps) => {
  const { className, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick as any}
      aria-label="imagem anterior"
    >
      <MdOutlineKeyboardArrowLeft size={24} />
    </button>
  );
};
