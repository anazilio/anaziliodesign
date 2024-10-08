import Image from 'next/image';

import { useStartAnimation } from '../../hooks/useStartAnimation';
import styled from './style.module.scss';

export const BannerText = () => {
  useStartAnimation('BannerText-title', styled.arrow_ideia, 'arrow_ideia5');
  return (
    <div className={styled.BannerText}>
      <h1 data-aos="fade-up" className="BannerText-title">
        <span className={styled.transform}>
          <Image
            alt="marcação"
            src={'/assets/images/azdgirando.gif'}
            width={100}
            height={100}
            draggable={false}
          />
          Transformando
        </span>
        <div>
          <span className={styled.ideas}>
            ideias
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
                id="arrow_ideia5"
              ></path>
            </svg>
          </span>{' '}
          em{' '}
          <span className={styled.art}>
            arte
            <svg
              width="228"
              height="121"
              viewBox="0 0 228 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M179.188 28.7115C147.286 1.03498 79.4239 -4.24461 42.1337 11.107C25.1508 18.0987 -7.47346 40.6124 6.79197 67.9963C9.30799 72.8264 12.6079 76.9211 16.1045 80.5515C54.586 120.503 115.195 125.209 164.243 111.104C171.558 109.001 178.84 106.313 185.755 102.254C190.928 99.219 196.064 95.2833 200.425 90.4684C213.191 76.3726 212.536 60.3508 202.867 45.6141C191.656 28.528 174.129 21.3221 157.336 16.3975C142.651 12.0913 127.736 9.61966 112.546 8.49669C84.0594 6.39039 51.1265 4.72438 24.5917 22.3918C13.0019 30.1087 -0.768004 48.0937 5.9572 65.08C13.2449 83.4864 35.158 92.1054 49.9127 97.7867C89.7163 113.114 155.447 117.136 196.383 96.6854C200.797 94.48 205.238 92.4694 209.345 89.3384C212.589 86.8644 215.767 83.9724 218.619 80.7629C238.831 58.0171 203.465 37.1785 190.606 32.677C150.151 18.5161 90.2334 -2.12862 48.8362 15.279"
                stroke="#8E178E"
                strokeWidth="5"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styled['svg-elem-1']}
              ></path>
            </svg>
            .
          </span>
        </div>
      </h1>
    </div>
  );
};
