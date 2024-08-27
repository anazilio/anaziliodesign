'use client';

import { InputHTMLAttributes, useMemo, useState } from 'react';

import styled from './style.module.scss';
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  ref?: React.Ref<HTMLInputElement>;
};

export const Input = ({ label, ...rest }: InputProps) => {
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false);

  const isValidUpLabel = useMemo(
    () => isFocusInput || !!rest?.value,
    [isFocusInput, rest?.value]
  );

  return (
    <label
      htmlFor={label.replace(/ /g, '')}
      className={`${styled.Input} ${isValidUpLabel ? styled.inputFocus : ''}`}
    >
      <input
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
      <i />
    </label>
  );
};
