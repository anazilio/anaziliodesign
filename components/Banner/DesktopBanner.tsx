import Image from 'next/image';

import { ImageType } from '../../types/ImageType';

import { Slider } from '../Slider/Slider';
import { settings } from './Banner';
import styled from './style.module.scss';

export type DesktopBannerProps = {
  width: number;
  height: number;
  desktop: ImageType[];
};

export const DesktopBanner = ({
  desktop,
  height,
  width
}: DesktopBannerProps) => {
  return (
    <div className={styled.bannerDesktop}>
      <Slider settings={settings.settings}>
        {desktop.map((image, index) => (
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
