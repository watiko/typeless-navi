import React from 'react';
import { useLoadingRoute } from 'react-navi';
import { GuardSpinner } from 'react-spinners-kit';

import { Dashboard } from './Dashboard';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const loadingRoute = useLoadingRoute();

  return (
    <div>
      <Dashboard>
        {!loadingRoute ? children : <GuardSpinner size={60} frontColor="black" backColor="white" />}
      </Dashboard>
    </div>
  );
};
