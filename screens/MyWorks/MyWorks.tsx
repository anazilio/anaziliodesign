'use client';
import { useEffect } from 'react';

import { ImageType } from '../../types/ImageType';

import { Banner, Container } from '../../components';
import { Socials } from '../../components/Socials/Socials';

import styled from './style.module.scss';

import Aos from 'aos';

export interface IMyWorksProps {
  title: string;
  year: string;
  description: string;
  banner?: {
    desktop: ImageType[];
    tablet: ImageType[];
    mobile: ImageType[];
  };
  items: {
    description?: string;
    video?: string;
    img?: string;
  }[];
}

export const MyWorks = ({
  title,
  year,
  description,
  items,
  banner
}: IMyWorksProps) => {
  useEffect(() => {
    Aos.init({
      delay: 100,
      easing: 'ease',
      once: true
    });
  }, []);

  return (
    <div className={styled.MyWorks}>
      {banner && <Banner images={banner} />}
      <Container>
        <div className={styled.titleContent} data-aos="fade-up">
          <h1>{title}</h1>
          <p>{year}</p>
          <p>{description}</p>
        </div>

        <div className={styled.gridContent}>
          {items.map((item, index) => (
            <div
              className={styled.gridItem}
              key={`${index}-${item?.img || item?.video || ''}`}
              data-aos={index % 2 !== 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={0}
            >
              {item.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img alt={item.description || ''} src={item.img} />
              ) : item.video ? (
                <video controls width={'100%'}>
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
            </div>
          ))}
        </div>

        <Socials />
      </Container>
    </div>
  );
};
