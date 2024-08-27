import Image from 'next/image';

import styled from './style.module.scss';

export interface IMySkillsProps {
  image: string;
  title: string;
  description: string;
}

export const MySkills = ({ description, image, title }: IMySkillsProps) => {
  return (
    <div className={styled.MySkills}>
      <Image src={image} alt={description} width={115} height={100} />
      <p className={styled.title}>{title}</p>
      <p className={styled.description}>{description}</p>
    </div>
  );
};
