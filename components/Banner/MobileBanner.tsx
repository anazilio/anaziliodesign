import Image from 'next/image';

import { ImageType } from '../../types/ImageType';

import { Slider } from '../Slider/Slider';
import { settings } from './Banner';
import styled from './style.module.scss';

export type MobileBannerProps = {
  width: number;
  height: number;
  mobile: ImageType[];
};

export const MobileBanner = ({ mobile, height, width }: MobileBannerProps) => {
  return (
    <div className={styled.bannerMobile}>
      <Slider settings={settings.settings}>
        {mobile.map((image, index) => (
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
