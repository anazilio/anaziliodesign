/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
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
                <svg
                  width="43"
                  height="110"
                  viewBox="0 0 43 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styled.arrow_down}
                >
                  <path
                    d="M28.5756 72.2307C27.1212 74.1261 26.61 76.4141 25.9827 78.6711C23.922 86.0817 24.0717 94.7218 27.759 101.665C21.612 95.771 11.6449 90.1904 3 92.5028"
                    stroke="#8E178E"
                    strokeWidth="5"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styled['arrow_down-1']}
                  ></path>
                  <path
                    d="M33 2.5C16.8333 18.6667 -7.60002 60.1 24 96.5"
                    stroke="#8E178E"
                    strokeWidth="5"
                    strokeLinecap="round"
                    className={styled['arrow_down-2']}
                  ></path>
                </svg>
                ideias
                <svg
                  width="231"
                  height="19"
                  viewBox="0 0 231 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styled.dash}
                >
                  <path
                    d="M3 15.6081C105.966 -7.27326 228 7.98098 228 7.98098"
                    stroke="#8E178E"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styled.arrow_ideia}
                  ></path>
                </svg>
              </span>
              em{' '}
            </div>
            <span>
              realidade?!
              <svg
                width="62"
                height="53"
                viewBox="0 0 62 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styled.acents}
              >
                <path
                  d="M26.9731 24.5788C37.7624 19.1842 43.1571 3.00024 43.1571 3.00024"
                  stroke="#8E178E"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className={styled['acents-1']}
                ></path>
                <path
                  d="M12.2514 23.34C13.6993 12.1293 6.76605 2.99996 6.76605 2.99996"
                  stroke="#8E178E"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className={styled['acents-2']}
                ></path>
                <path
                  d="M59.3345 40.4306C48.6649 34.8031 32.3677 39.8451 32.3677 39.8451"
                  stroke="#8E178E"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className={styled['acents-3']}
                ></path>
              </svg>
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
