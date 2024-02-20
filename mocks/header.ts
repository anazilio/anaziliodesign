import { HeaderProps } from '../components/Header/Header';

export const headerMock: HeaderProps = {
  logo: {
    desktop: {
      alt: 'logo gmartins',
      url: '/assets/images/logo.svg'
    },
    mobile: {
      alt: 'logo gmartins',
      url: '/assets/images/logo_mobile.svg'
    }
  },
  menuItems: [
    {
      label: 'QUEM SOMOS',
      link: 'allLinks.ABOUT_US'
    },
    {
      label: 'SERVIÇOS',
      link: 'allLinks.SERVICES'
    },
    {
      label: 'FALE CONOSCO',
      link: 'allLinks.CONTACT_US'
    }
  ],
  subMenuItems: [
    {
      label: 'PORTAL DO CLIENTE',
      link: 'allLinks.CUSTOMER_PORTAL'
    },
    {
      label: 'SISTEMA DE CANHOTOS',
      link: 'allLinks.LEFT_HEAD_SYSTEM'
    }
  ]
};
