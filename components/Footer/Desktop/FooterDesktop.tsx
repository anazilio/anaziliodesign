import Image from 'next/image';
import React from 'react';

import { Link } from '../../Link/Link';
import { FooterProps } from '../Footer';
import styled from './style.module.scss';

export const FooterDesktop = ({
  footerItems,
  image
}: Pick<FooterProps, 'footerItems' | 'image'>) => {
  return (
    <div className={styled.FooterDesktop}>
      {footerItems.map((footer, indexFooter) => (
        <div key={indexFooter} className={styled.item}>
          <p className={styled.title}>{footer.title}</p>

          <div className={styled.items}>
            {footer.items.map((item, index) => (
              <React.Fragment key={index}>
                {item?.link?.label && (
                  <Link href={item?.link?.href} label={item?.link?.label} />
                )}

                {item?.description && (
                  <p
                    dangerouslySetInnerHTML={{ __html: `${item?.description}` }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}

      <Image
        src={image.url}
        alt={image.alt}
        width={175}
        height={200}
        loading="lazy"
        blurDataURL={image.url}
        placeholder="blur"
      />
    </div>
  );
};
