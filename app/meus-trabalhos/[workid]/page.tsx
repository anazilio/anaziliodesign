import { notFound } from 'next/navigation';

import { changeHeader } from '../../../utils/changeHeader';

import { myWorks } from '../../../mocks/myWorks';
import { MyWorks } from '../../../screens';

interface IMyWorksPageProps {
  params: {
    workid: string;
  };
}

export const metadata = changeHeader({
  title: 'Ana Zilio',
  description:
    'Ana Zilio é uma designer com mais de 10 anos de experiência, dedicada a transformar ideias em experiências visuais impactantes. Com um portfólio diversificado que abrange desde identidades visuais até interfaces intuitivas, Ana combina estética e funcionalidade em cada projeto. Seu olhar atento às necessidades dos usuários e sua habilidade em criar soluções criativas garantem resultados que não apenas encantam, mas também resolvem problemas reais. Acesse e descubra como Ana pode ajudar sua marca a se destacar!'
});

export default async function MyWorksPage({ params }: IMyWorksPageProps) {
  const data = myWorks[params.workid];
  if (!data?.title) notFound();
  return <MyWorks {...data} />;
}
