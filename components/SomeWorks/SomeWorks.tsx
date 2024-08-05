import Image from 'next/image';

import { Container } from '../Container/Container';
import { SomeWorksSlider } from '../SomeWorksSlider/SomeWorksSlider';
import styled from './style.module.scss';

export const SomeWorks = () => {
  return (
    <div className={styled.SomeWorks}>
      <Container>
        <h1 className={styled.title} data-aos="fade-up">
          Alguns
          <span>
            trabalhos
            <Image
              alt="marcação"
              src={'/assets/images/icones/arrow_ideia2.svg'}
              width={400}
              height={20}
              draggable={false}
            />
          </span>
        </h1>
        <SomeWorksSlider />
      </Container>
    </div>
  );
};
