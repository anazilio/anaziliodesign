import { mockSomeWorksCards } from '../../mocks/someWorksCard';
import { NextArrow } from '../Slider/NextArrow';
import { PrevArrow } from '../Slider/PrevArrow';
import { Slider, SliderProps } from '../Slider/Slider';
import { SomeWorksCard } from '../SomeWorksCard/SomeWorksCard';
import styled from './style.module.scss';

export const settings: Pick<SliderProps, 'settings'> = {
  settings: {
    initialSlide: 0,
    speed: 500,
    cssEase: 'linear',
    draggable: true,
    infinite: true,
    lazyLoad: 'progressive',
    slidesToShow: 3.5,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: '60px',
    centerMode: true,
    responsive: [
      {
        breakpoint: 1730,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px'
        }
      }
    ]
  }
};

export const SomeWorksSlider = () => {
  return (
    <div
      className={styled.SomeWorksSlider}
      data-aos="zoom-in-up"
      data-aos-delay={600}
      data-aos-duration={800}
    >
      <Slider settings={settings.settings}>
        {mockSomeWorksCards.map((worksCard) => (
          <SomeWorksCard key={worksCard.title} {...worksCard} />
        ))}
      </Slider>
    </div>
  );
};
