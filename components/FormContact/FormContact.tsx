'use client';
import { useState } from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';

import { sendMailService } from '../../services/sendMailService';

import { renderFields } from '../../utils/formContactFields';

import { Button } from '../Button/Button';
import InputControl from '../ControlFields/InputControl';
import { TextareaControl } from '../ControlFields/TextareaControl';
import styled from './style.module.scss';

export type FormContactUs = {
  name: string;
  cellphone: string;
  mail: string;
  message: string;
};

export const FormContact = () => {
  const [responseForm, setResponseForm] = useState<string>('');

  const methods = useForm<FormContactUs>({
    defaultValues: {
      cellphone: '',
      mail: '',
      message: '',
      name: ''
    },
    criteriaMode: 'all',
    reValidateMode: 'onChange'
  });

  const handleDefaultValues = (key: string) =>
    methods?.formState?.defaultValues
      ? methods?.formState?.defaultValues[key]
      : '';

  const onSubmit = async (formData: FormContactUs) => {
    try {
      setResponseForm('');
      const { status } = await sendMailService.contact(formData);
      if (status === 201) {
        setResponseForm('Email enviado com sucesso');
        methods.reset();
      } else {
        setResponseForm('Erro ao enviar email');
      }

      setTimeout(() => setResponseForm(''), 5000);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={styled.FormContact}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {renderFields().map((field) => {
          if (field.component === 'INPUT') {
            return (
              <InputControl
                key={field.name}
                control={{
                  name: field.name,
                  control: methods.control as unknown as Control<FieldValues>,
                  defaultValue: handleDefaultValues(field.name),
                  rules: field.rules
                }}
                input={{
                  label: field.label,
                  theme: 'white',
                  type: field.type,
                  maxLength: field.maxLength,
                  minLength: field.minLength
                }}
                mask={field.mask}
                error={methods?.formState?.errors[field.name]?.message}
              />
            );
          }

          return (
            <TextareaControl
              key={field.name}
              control={{
                name: field.name,
                control: methods.control as unknown as Control<FieldValues>,
                defaultValue: handleDefaultValues(field.name),
                rules: field.rules
              }}
              textarea={{
                label: field.label,
                theme: 'white',
                maxLength: field.maxLength,
                minLength: field.minLength
              }}
              mask={field.mask}
              error={methods?.formState?.errors[field.name]?.message}
            />
          );
        })}

        <div className={styled.contentButton}>
          <Button
            label="Enviar"
            type="submit"
            typeStyle="primary"
            disabled={!!methods.formState.isSubmitting}
          />
        </div>
        <span>{responseForm}</span>
      </form>
    </div>
  );
};
