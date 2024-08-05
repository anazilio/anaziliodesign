import { HeaderProps } from '../components/Header/Header';

import { allLinks } from './allLinks';

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
      label: 'PORTFÓLIO',
      link: allLinks.HOME
    },
    {
      label: 'CONTATO',
      link: allLinks.CONTACT
    },
    {
      label: 'ANA',
      link: allLinks.SOCIAL_NETWORKS,
      target: '_blank'
    }
  ]
};
