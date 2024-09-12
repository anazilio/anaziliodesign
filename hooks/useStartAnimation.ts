'use client';
import { useEffect } from 'react';

export const useStartAnimation = (
  targetClass: string,
  animationClass: string,
  idSvg: string
) => {
  useEffect(() => {
    const targetNode = document.querySelector(`.${targetClass}`);

    if (targetNode) {
      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          if (
            mutation.attributeName === 'class' &&
            targetNode.classList.contains('aos-animate')
          ) {
            const svgElement = document.getElementById(idSvg);

            if (svgElement) {
              svgElement.classList.add(animationClass);
            }
          }
        });
      });

      observer.observe(targetNode, { attributes: true });

      return () => {
        observer.disconnect();
      };
    }
  }, [animationClass, idSvg, targetClass]);
};
