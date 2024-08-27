import Link from 'next/link';

import { allLinks } from '../../mocks/allLinks';
import { socialsMock } from '../../mocks/socialsMock';
import styled from './style.module.scss';

export const Socials = () => {
  return (
    <div className={styled.Socials}>
      <p data-aos="fade-up">
        <strong>Precisando de um design para sua marca?!</strong>
      </p>
      <small data-aos="fade-up">
        <Link href={allLinks.CONTACT}>
          Entre em contato <span>aqui!</span>
        </Link>
      </small>

      <div className={styled.socialContent}>
        {socialsMock.map((social) => (
          <div key={social.link}>
            <Link href={social.link} target="_blank">
              {social.icon}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
