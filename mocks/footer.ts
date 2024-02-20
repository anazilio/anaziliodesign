import { FooterProps } from '../components/Footer/Footer';

export const footerMock: FooterProps = {
  footerItems: [
    {
      title: 'g.martins',
      items: [
        {
          link: {
            href: 'allLinks.ABOUT_US',
            label: 'Quem Somos'
          }
        },
        {
          link: {
            href: 'allLinks.SERVICES',
            label: 'Serviços'
          }
        },
        {
          link: {
            href: 'allLinks.CUSTOMER_PORTAL',
            label: 'Portal do Cliente'
          }
        },
        {
          link: {
            href: 'allLinks.LEFT_HEAD_SYSTEM',
            label: 'Sistema de Canhotos'
          }
        }
      ]
    },
    {
      title: 'contato',
      items: [
        {
          link: {
            href: 'allLinks.CONTACT_US',
            label: 'Fale Conosco'
          }
        },
        {
          link: {
            href: 'allLinks.WORK_WITH_US',
            label: 'Trabalhe Conosco'
          }
        }
      ]
    },
    {
      title: 'ONDE ESTAMOS',
      items: [
        {
          description: ` Rua Frei Gaspar, 1024 Jardim Piratininga • Osasco/SP
          <br />
          <br />
          (11) 4376.6115 <br /> De segunda a sexta-feira das 8h às 18h`
        }
      ]
    }
  ],
  image: {
    url: '/assets/images/logo_mobile.svg',
    alt: 'logo gmartins'
  },
  subFooterText: `G.MARTINS Soluções em Distribuição • ${new Date().getFullYear()} Todos os direitos
  reservados.`
};
