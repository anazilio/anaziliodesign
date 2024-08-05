import Image from 'next/image';

import styled from './style.module.scss';

export const BannerText = () => {
  return (
    <div className={styled.BannerText}>
      <h1 data-aos="fade-up">
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
            <Image
              alt="marcação"
              src={'/assets/images/icones/arrow_ideia.svg'}
              width={255}
              height={20}
              draggable={false}
            />
          </span>{' '}
          em{' '}
          <span className={styled.art}>
            arte
            <Image
              alt="marcação"
              src={'/assets/images/icones/circle_markdown.svg'}
              width={120}
              height={120}
              draggable={false}
            />
            .
          </span>
        </div>
      </h1>
    </div>
  );
};
