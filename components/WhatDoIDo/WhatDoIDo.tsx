import Image from 'next/image';

import { Container } from '../Container/Container';
import { mySkillsMock } from '../MySkills/mock';
import { MySkills } from '../MySkills/MySkills';
import styled from './style.module.scss';

export const WhatDoIDo = () => {
  return (
    <div className={styled.WhatDoIDo}>
      <div className={styled.coverTop} />

      <Container>
        <h1 className={styled.title} data-aos="fade-up">
          <span>
            O que
            <Image
              alt="marcação"
              src={'/assets/images/icones/arrow_ideia.svg'}
              width={255}
              height={20}
              draggable={false}
            />
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
