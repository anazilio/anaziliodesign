import React from 'react';

import { Collapse } from '../../Collapse/Collapse';
import { Link } from '../../Link/Link';
import { FooterProps } from '../Footer';
import styled from './style.module.scss';

export const FooterMobile = ({
  footerItems
}: Pick<FooterProps, 'footerItems'>) => {
  return (
    <div className={styled.FooterMobile}>
      {footerItems.map((footerItem, indexFooter) => (
        <Collapse key={indexFooter} title={footerItem.title}>
          <div className={styled.items}>
            {footerItem.items.map((item, index) => (
              <div
                key={index}
                className={styled.animateContent}
                style={{ animationDelay: `0.${index}s` }}
              >
                {item?.link?.label && (
                  <Link href={item?.link?.href} label={item?.link?.label} />
                )}

                {item?.description && (
                  <p
                    dangerouslySetInnerHTML={{ __html: `${item?.description}` }}
                  />
                )}
              </div>
            ))}
          </div>
        </Collapse>
      ))}
    </div>
  );
};
