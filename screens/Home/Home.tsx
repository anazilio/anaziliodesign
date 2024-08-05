'use client';
import { useEffect } from 'react';

import {
  BannerText,
  Contact,
  SomeWorks,
  WhatDoIDo,
  WhoAlreadyKnows
} from '../../components';

import styled from './style.module.scss';

import AOS from 'aos';

// eslint-disable-next-line @typescript-eslint/ban-types
export type HomeProps = {};

export const Home = () => {
  useEffect(() => {
    AOS.init({
      delay: 500,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className={styled.Home}>
      <BannerText />
      <WhatDoIDo />
      <SomeWorks />
      <WhoAlreadyKnows />
      <Contact />
    </div>
  );
};
