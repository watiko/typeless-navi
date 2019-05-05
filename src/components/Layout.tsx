import React from 'react';
import { useLoadingRoute } from 'react-navi';
import { Dashboard } from './Dashboard';

import { GuardSpinner } from 'react-spinners-kit';

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
