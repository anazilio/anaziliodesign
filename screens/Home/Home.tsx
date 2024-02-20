'use client';
import { useEffect } from 'react';

import { Banner, BannerProps } from '../../components/Banner/Banner';

import styled from './style.module.scss';

import AOS from 'aos';

export type HomeProps = BannerProps;

export const Home = ({ images }: HomeProps) => {
  useEffect(() => {
    AOS.init({
      delay: 500,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className={styled.Home}>
      <Banner images={images} />
    </div>
  );
};
