import Image from 'next/image';

import { ImageType } from '../../types/ImageType';

import { Slider } from '../Slider/Slider';
import { settings } from './Banner';
import styled from './style.module.scss';

export type TabletBannerProps = {
  width: number;
  height: number;
  tablet: ImageType[];
};

export const TabletBanner = ({ tablet, height, width }: TabletBannerProps) => {
  return (
    <div className={styled.bannerTablet}>
      <Slider settings={settings.settings}>
        {tablet.map((image, index) => (
          <div key={index}>
            <Image
              width={width}
              height={height}
              src={image.url}
              alt={image.alt}
              loading="lazy"
              placeholder="blur"
              blurDataURL={image.url}
              draggable={false}
              className={styled.bannerImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
