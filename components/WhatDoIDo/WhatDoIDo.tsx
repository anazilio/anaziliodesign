'use client';

import { useStartAnimation } from '../../hooks/useStartAnimation';
import { Container } from '../Container/Container';
import { mySkillsMock } from '../MySkills/mock';
import { MySkills } from '../MySkills/MySkills';
import styled from './style.module.scss';

export const WhatDoIDo = () => {
  useStartAnimation(styled.title, styled.arrow_ideia, 'arrow_ideia');

  return (
    <div className={styled.WhatDoIDo}>
      <div className={styled.coverTop} />

      <Container>
        <h1 className={styled.title} data-aos="fade-up">
          <span>
            O que
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
                id="arrow_ideia"
              ></path>
            </svg>
          </span>
          eu faço
        </h1>

        <div className={styled.contentCards}>
          {mySkillsMock.map((skills, index) => (
            <div
              data-aos={index > 2 ? 'zoom-in-right' : 'zoom-in-left'}
              data-aos-delay={index > 9 ? 0.9 : Number(`0.${index}`)}
              data-aos-duration={800}
              key={index}
            >
              <MySkills key={skills.title} {...skills} />
            </div>
          ))}
        </div>
      </Container>
      <div className={styled.coverBottom} />
    </div>
  );
};
