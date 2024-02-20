'use client';
import { ReactNode } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import styled from './style.module.scss';

import { Disclosure } from '@headlessui/react';

export type CollapseProps = {
  title: string;
  children: ReactNode;
};

export const Collapse = ({ title, children }: CollapseProps) => {
  return (
    <div style={{ position: 'relative' }}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={styled.Collapse}
              id={title.replace(/ /g, '')}
            >
              {title}
              <MdKeyboardArrowDown
                fontWeight={600}
                size={24}
                className={open ? styled.arrowOpen : styled.arrowClose}
              />
            </Disclosure.Button>

            <Disclosure.Panel className={styled.CollapsePanel}>
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
