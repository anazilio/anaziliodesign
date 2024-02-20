'use client';
import { ReactNode } from 'react';
import SliderSlick, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './style.scss';
// import 'slick-carousel/slick/slick-theme.css';

export type SliderProps = {
  settings: Settings;
  children: ReactNode;
};

export const Slider = ({ settings, children }: SliderProps) => {
  return (
    <SliderSlick {...settings} className="slick-carousel-content">
      {children}
    </SliderSlick>
  );
};
