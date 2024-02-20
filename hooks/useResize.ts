'use client';

import { useEffect, useState } from 'react';

export type TypeWindow = 'desktop' | 'tablet' | 'mobile';

export const useResize = () => {
  const [typeWindow, setTypeWindow] = useState<TypeWindow>('desktop');

  const onResise = () => {
    const element = window?.document
      ?.querySelector('body')
      ?.getBoundingClientRect();

    if (element) {
      if (element?.width > 960) {
        setTypeWindow('desktop');
      } else if (element?.width <= 960 && element?.width > 600) {
        setTypeWindow('tablet');
      } else {
        setTypeWindow('mobile');
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onResise);
      onResise();
      return () => {
        window.removeEventListener('resize', onResise);
      };
    }
  }, []);

  return { typeWindow };
};
