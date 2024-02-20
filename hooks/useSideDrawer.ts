'use client';
import { useCallback, useState } from 'react';

export const useSideDrawer = () => {
  const [openSideDrawer, setSideDrawer] = useState<boolean>(false);

  const changeSideDrawer = useCallback(
    (open: boolean) => {
      setSideDrawer(open);
    },
    [setSideDrawer]
  );

  return {
    changeSideDrawer,
    openSideDrawer
  };
};
