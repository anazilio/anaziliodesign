import { Metadata } from 'next';

export type Metatags = Omit<Metadata, 'viewport'> & {
  path?: string;
};

export const changeHeader = (header: Metatags): Metadata => {
  return {
    ...header,
    viewport: 'width=device-width, initial-scale=1',
    alternates: {
      canonical: `https://gmartins.vercel.app/${header?.path}`
    }
  };
};
