import React, { Suspense, useRef } from 'react';
import { Router, View } from 'react-navi';

import { navigation } from '@app/routes';
import { defer, Deffered } from '@app/defer';
import { useRouterModule } from 'features/router/module';
import { useGlobalModule } from 'features/global/module';
import { getGlobalState } from 'features/global/interface';

import { Layout } from './Layout';

export const App = () => {
  useRouterModule();
  useGlobalModule();

  const { isLoaded, user } = getGlobalState.useState();

  const isLoadedAsyncRef = useRef<Deffered<void>>(defer());

  if (isLoaded) {
    isLoadedAsyncRef.current.resolve();
  }

  return (
    <Router
      navigation={navigation}
      context={{ user, isLoadedAsync: isLoadedAsyncRef.current.promise }}
    >
      <Suspense fallback={null}>
        <Layout>
          <View />
        </Layout>
      </Suspense>
    </Router>
  );
};
