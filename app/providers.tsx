'use client';

import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      {children}
    </div>
  );
}
