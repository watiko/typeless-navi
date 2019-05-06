import React from 'react';
import { useLoadingRoute } from 'react-navi';

import { Dashboard } from './Dashboard';
import { Spinner } from './Spinner';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const loadingRoute = useLoadingRoute();

  return (
    <div>
      <Dashboard>{!loadingRoute ? children : <Spinner />}</Dashboard>
    </div>
  );
};
