import { FieldValues, RegisterOptions } from 'react-hook-form';

import { FormContactUs } from '../components/FormContact/FormContact';
import { InputProps } from '../components/Input/Input';

import {
  ErrorMessageMailInvalid,
  ErrorMessageMin3Character,
  ErrorMessagePhoneInvalid,
  ErrorMessageRequired
} from './ErrorMessages';
import { phoneMask } from './masks';
import { mailRegex, phoneRegex } from './regex';

export type RenderFields = Pick<
  InputProps,
  'type' | 'maxLength' | 'minLength'
> & {
  name: keyof FormContactUs;
  label: string;
  component: 'INPUT' | 'TEXTAREA';
  mask?: (value: string) => string;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
};

export const renderFields = (): RenderFields[] => {
  return [
    {
      name: 'name',
      label: 'Nome*',
      type: 'text',
      component: 'INPUT',
      rules: {
        required: {
          value: true,
          message: ErrorMessageRequired
        },
        minLength: {
          value: 3,
          message: ErrorMessageMin3Character
        }
      }
    },
    {
      name: 'cellphone',
      label: 'Telefone*',
      type: 'tel',
      component: 'INPUT',
      rules: {
        required: {
          value: true,
          message: ErrorMessageRequired
        },
        pattern: {
          value: phoneRegex,
          message: ErrorMessagePhoneInvalid
        },
        minLength: {
          value: 15,
          message: ErrorMessagePhoneInvalid
        },
        maxLength: {
          value: 15,
          message: ErrorMessagePhoneInvalid
        }
      },
      mask: phoneMask,
      maxLength: 15,
      minLength: 15
    },
    {
      name: 'mail',
      label: 'E-mail*',
      type: 'mail',
      component: 'INPUT',
      rules: {
        required: {
          value: true,
          message: ErrorMessageRequired
        },
        pattern: {
          value: mailRegex,
          message: ErrorMessageMailInvalid
        }
      }
    },
    {
      name: 'message',
      label: 'Mensagem',
      type: 'text',
      component: 'TEXTAREA',
      rules: {
        minLength: {
          value: 3,
          message: ErrorMessageMin3Character
        }
      }
    }
  ];
};
