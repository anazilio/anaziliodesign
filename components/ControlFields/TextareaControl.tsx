import { forwardRef, Ref } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';

import { TextAreaProps, Textarea } from '../Textarea/Textarea';

export type TextareaControlProps = {
  control: Omit<ControllerProps, 'render'>;
  textarea: Pick<TextAreaProps, 'label' | 'maxLength' | 'minLength'>;
  error?: string;
  mask?: (value: string) => string;
};

// eslint-disable-next-line react/display-name
export const TextareaControl = forwardRef(
  (props: TextareaControlProps, ref: Ref<HTMLTextAreaElement>) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Controller
          {...props.control}
          render={({ field }) => (
            <Textarea
              {...props.textarea}
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
          <span className={`input-field-error`}>{props.error}</span>
        )}
      </div>
    );
  }
);
