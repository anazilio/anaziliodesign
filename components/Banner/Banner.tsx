'use client';
import Image from 'next/image';

import { ImageType } from '../../types/ImageType';

import { Container } from '../Container/Container';
import { NextArrow } from '../Slider/NextArrow';
import { PrevArrow } from '../Slider/PrevArrow';
import { SliderProps } from '../Slider/Slider';
import { DesktopBanner } from './DesktopBanner';
import { MobileBanner } from './MobileBanner';
import styled from './style.module.scss';
import './style.scss';
import { TabletBanner } from './TabletBanner';

export const settings: Pick<SliderProps, 'settings'> = {
  settings: {
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnDotsHover: true,
    pauseOnHover: true,
    draggable: true,
    vertical: false,
    verticalSwiping: false,
    infinite: true,
    waitForAnimate: true,
    lazyLoad: 'progressive',
    accessibility: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
};

export type BannerProps = {
  images: {
    desktop: ImageType[];
    tablet: ImageType[];
    mobile: ImageType[];
  };
};

export const Banner = ({ images }: BannerProps) => {
  return (
    <div className={`${styled.Banner} BannerSliderContainer`}>
      <Container>
        <noscript>
          {images.desktop.map((image, index) => (
            <div key={index}>
              <Image
                width={1920}
                height={560}
                src={image.url}
                alt={image.alt}
                draggable={false}
                blurDataURL={image.url}
                placeholder="blur"
                className={styled.bannerImage}
                objectFit="cover"
                loading="lazy"
              />
            </div>
          ))}
        </noscript>
        <DesktopBanner desktop={images.desktop} height={560} width={1920} />
        <TabletBanner tablet={images.tablet} height={660} width={960} />
        <MobileBanner mobile={images.mobile} height={560} width={600} />
      </Container>
    </div>
  );
};
