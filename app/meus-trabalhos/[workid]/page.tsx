import { notFound } from 'next/navigation';

import { myWorks } from '../../../mocks/myWorks';
import { MyWorks } from '../../../screens';

interface IMyWorksPageProps {
  params: {
    workid: string;
  };
}

export default async function MyWorksPage({ params }: IMyWorksPageProps) {
  const data = myWorks[params.workid];
  if (!data?.title) notFound();
  return <MyWorks {...data} />;
}
