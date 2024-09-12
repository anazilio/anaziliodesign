import { Lily_Script_One } from 'next/font/google';

import styled from './style.module.scss';

const lily_Script_One = Lily_Script_One({
  subsets: ['latin'],
  weight: '400'
});

export interface ICardAlreadyKnowsProps {
  description: string;
  name: string;
  location: string;
}

export const getInitialsName = (name: string): string => {
  if (!name) return '';

  const splitName = name.split(' ').filter((item) => !!item);
  const firstName = splitName[0].split('')[0];
  let lastName = '';

  if (splitName.length > 1 && splitName[splitName.length - 1]) {
    lastName = splitName[splitName.length - 1].split('')[0];
  }
  return `${firstName}${lastName}`.toUpperCase().replace(/ /g, '');
};

export const CardAlreadyKnows = ({
  description,
  location,
  name
}: ICardAlreadyKnowsProps) => {
  return (
    <div className={styled.CardAlreadyKnows}>
      <span className={styled.cardAlreadyKnowsAvatar}>
        {getInitialsName(name)}
      </span>
      <div className={styled.contentCardAlreadyKnows}>
        <span className={lily_Script_One.className}>“</span>
        <p>{description}</p>
        <strong>{name}</strong>
        <p>{location}</p>
      </div>
    </div>
  );
};
