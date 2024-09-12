import { useStartAnimation } from '../../hooks/useStartAnimation';
import { Container } from '../Container/Container';
import { SomeWorksSlider } from '../SomeWorksSlider/SomeWorksSlider';
import styled from './style.module.scss';

export const SomeWorks = () => {
  useStartAnimation(styled.title, styled.arrow_ideia2, 'arrow_ideia2');

  return (
    <div id="work">
      <div className={styled.SomeWorks}>
        <Container>
          <h1 className={styled.title} data-aos="fade-up">
            Alguns
            <span>
              trabalhos
              <svg
                width="388"
                height="15"
                viewBox="0 0 388 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12.5C113.167 5.50002 343.9 -4.29997 385.5 12.5"
                  stroke="#8E178E"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  id="arrow_ideia2"
                ></path>
              </svg>
            </span>
          </h1>
          <SomeWorksSlider />
        </Container>
      </div>
    </div>
  );
};
