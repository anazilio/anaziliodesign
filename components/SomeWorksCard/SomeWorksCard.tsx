'use client';
import Image from 'next/image';
import { useRef } from 'react';

import { Button } from '../Button/Button';
import styled from './style.module.scss';

export interface ISomeWorksCardProps {
  id: string;
  img: string;
  title: string;
  year: string;
  description: string;
}

export const SomeWorksCard = ({ img, title, id }: ISomeWorksCardProps) => {
  const refLink = useRef<HTMLAnchorElement>(null);

  return (
    <div className={styled.SomeWorksCard}>
      <Image src={img} alt={title} width={400} height={500} />
      <div className={styled.addittionalInfos}>
        <p>{title}</p>
        <Button
          label="VER MAIS"
          typeStyle="secondary"
          onClick={() => refLink?.current?.click()}
        />
        <a
          ref={refLink}
          href={`/meus-trabalhos/${id}`}
          style={{ position: 'absolute', opacity: 0 }}
        ></a>
      </div>
    </div>
  );
};
