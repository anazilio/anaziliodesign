import React, { Ref, forwardRef } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';

import { Input, InputProps } from '../Input/Input';

export type InputControlProps = {
  control: Omit<ControllerProps, 'render'>;
  input: Pick<
    InputProps,
    'label' | 'theme' | 'type' | 'maxLength' | 'minLength'
  >;
  mask?: (value: string) => string;
  error?: string;
};

// eslint-disable-next-line react/display-name
const InputControl = forwardRef(
  (props: InputControlProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Controller
          {...props.control}
          render={({ field }) => (
            <Input
              {...props.input}
              {...field}
              onChange={(e) => {
                if (typeof props?.mask === 'function') {
                  field.onChange(props?.mask(e.target.value));
                  return;
                }
                field.onChange(e.target.value);
              }}
              ref={ref}
            />
          )}
        />
        {props.error && (
          <span className={`input-field-error-${props.input?.theme}`}>
            {props.error}
          </span>
        )}
      </div>
    );
  }
);

export default InputControl;
