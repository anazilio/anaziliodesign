/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import { Container } from '../Container/Container';
import InputControl from '../ControlFields/InputControl';
import { TextareaControl } from '../ControlFields/TextareaControl';
import styled from './style.module.scss';

import axios from 'axios';

export interface IContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const methods = useForm<IContactForm>();

  const onSubmit = async (data: IContactForm) => {
    await axios.post('/api/sendmail/contact', data);
  };

  const getError = (key: keyof IContactForm) => {
    return methods.formState.errors[key]?.message;
  };

  return (
    <div className={styled.Contact}>
      <Container className={styled.container}>
        <div id="contact" data-aos="fade-up">
          <h1 className={styled.title}>
            Pronto para <br />
            transformar suas <br />
            <div>
              <span>
                <Image
                  alt="marcação"
                  src={'/assets/images/icones/arrow_down.svg'}
                  width={80}
                  height={100}
                  draggable={false}
                  className={styled.arrow_down}
                />
                ideias
                <Image
                  alt="marcação"
                  src={'/assets/images/icones/arrow_ideia.svg'}
                  width={255}
                  height={20}
                  draggable={false}
                  className={styled.dash}
                />
              </span>
              em{' '}
            </div>
            <span>
              realidade?!
              <Image
                alt="marcação"
                src={'/assets/images/icones/Group 100.svg'}
                width={80}
                height={80}
                draggable={false}
                className={styled.acents}
              />
            </span>
          </h1>
          <span>
            O primeiro passo é enviar uma mensagem através do formulário. ;)
          </span>
        </div>

        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          data-aos="fade-up"
          data-aos-delay={1000}
        >
          <InputControl
            control={{
              name: 'name',
              control: methods.control as any,
              rules: {
                required: {
                  message: 'Campo obrigatório!',
                  value: true
                }
              }
            }}
            input={{ label: 'Nome' }}
            error={getError('name')}
          />
          <InputControl
            control={{
              name: 'email',
              control: methods.control as any,
              rules: {
                required: {
                  message: 'Campo obrigatório!',
                  value: true
                }
              }
            }}
            input={{ label: 'E-mail', type: 'email' }}
            error={getError('email')}
          />
          <InputControl
            control={{
              name: 'subject',
              control: methods.control as any,
              rules: {
                required: {
                  message: 'Campo obrigatório!',
                  value: true
                }
              }
            }}
            input={{ label: 'Assunto' }}
            error={getError('subject')}
          />
          <TextareaControl
            control={{
              name: 'message',
              control: methods.control as any,
              rules: {
                required: {
                  message: 'Campo obrigatório!',
                  value: true
                }
              }
            }}
            textarea={{ label: 'Menssagem' }}
            error={getError('message')}
          />

          <button type="submit" disabled={methods.formState.isSubmitting}>
            {methods.formState.isSubmitting ? 'ENVIANDO' : 'ENVIAR'}
          </button>
        </form>
      </Container>
    </div>
  );
};
