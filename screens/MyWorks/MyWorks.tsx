'use client';
import Image from 'next/image';
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
      delay: 500,
      easing: 'ease-in-out',
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
              key={index}
              data-aos={index % 2 !== 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index > 9 ? 0.9 : Number(`0.${index}`)}
              data-aos-duration={800}
            >
              {item.img ? (
                <Image
                  alt={item.description || ''}
                  src={item.img}
                  width={900}
                  height={900}
                />
              ) : item.video ? (
                <video controls width={900} height={400}>
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
