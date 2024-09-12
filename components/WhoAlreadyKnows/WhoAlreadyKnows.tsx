/* eslint-disable react/prop-types */
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { useStartAnimation } from '../../hooks/useStartAnimation';
import { mockDepositions } from '../../mocks/depoimentos';
import { CardAlreadyKnows } from '../CardAlreadyKnows/CardAlreadyKnows';
import { Container } from '../Container/Container';
import { Slider } from '../Slider/Slider';
import styled from './style.module.scss';
import './style.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} sampleNextArrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <IoIosArrowDown size={18} />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} samplePrevArrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <IoIosArrowUp size={18} />
    </button>
  );
}

export const WhoAlreadyKnows = () => {
  useStartAnimation(styled.title, styled.arrow_ideia, 'arrow_ideia3');
  return (
    <div className={styled.WhoAlreadyKnows}>
      <div className={styled.coverTop} />
      <Container>
        <h1 className={styled.title} data-aos="fade-up">
          <span>
            Quem
            <svg
              width="231"
              height="19"
              viewBox="0 0 231 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 15.6081C105.966 -7.27326 228 7.98098 228 7.98098"
                stroke="#8E178E"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                id={'arrow_ideia3'}
              ></path>
            </svg>
          </span>
          já conhece
        </h1>

        <div
          className={styled.slider}
          data-aos="zoom-in-up"
          data-aos-delay={600}
          data-aos-duration={800}
        >
          <Slider
            settings={{
              dots: true,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              vertical: true,
              verticalSwiping: true,
              swipeToSlide: true,
              adaptiveHeight: true,
              speed: 500,
              waitForAnimate: false,
              appendDots: (dots) => (
                <div>
                  <ul> {dots} </ul>
                </div>
              ),
              customPaging: () => <button />,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />
            }}
          >
            {mockDepositions.map((item) => (
              <CardAlreadyKnows key={item.name} {...item} />
            ))}
          </Slider>
        </div>
      </Container>
      <div className={styled.coverBottom} />
    </div>
  );
};
