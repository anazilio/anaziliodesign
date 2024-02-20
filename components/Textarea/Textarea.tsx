'use client';

import { Ref, TextareaHTMLAttributes, useMemo, useState } from 'react';

import styled from './style.module.scss';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  theme?: 'white' | 'yellow' | 'bordo';
  ref?: Ref<HTMLTextAreaElement>;
};

export const Textarea = ({
  theme = 'white',
  label,
  ...rest
}: TextAreaProps) => {
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false);

  const selectThemeTextarea = () => {
    switch (theme) {
      case 'yellow':
        return styled.TextareaThemeYellow;
      case 'bordo':
        return styled.TextareaThemeBordo;
      default:
        return '';
    }
  };

  const isValidUpLabel = useMemo(
    () => isFocusInput || !!rest?.value,
    [isFocusInput, rest?.value]
  );

  return (
    <div
      className={`${styled.Textarea} ${selectThemeTextarea()} ${
        isValidUpLabel ? styled.inputFocus : ''
      }`}
    >
      <textarea
        {...rest}
        onFocus={(e) => {
          typeof rest?.onFocus === 'function' && rest?.onFocus(e);
          setIsFocusInput(true);
        }}
        onBlur={(e) => {
          typeof rest?.onBlur === 'function' && rest?.onBlur(e);
          setIsFocusInput(false);
        }}
      />
      <span>{label}</span>
    </div>
  );
};
