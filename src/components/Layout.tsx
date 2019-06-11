import React from 'react';
import { useLoadingRoute } from 'react-navi';
import { Grommet } from 'grommet';

import { Dashboard } from './Dashboard';
import { Spinner } from './Spinner';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const loadingRoute = useLoadingRoute();

  return (
    <Grommet>
      <Dashboard>{!loadingRoute ? children : <Spinner />}</Dashboard>
    </Grommet>
  );
};
