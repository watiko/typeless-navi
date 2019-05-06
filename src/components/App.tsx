import React, { Suspense } from 'react';
import { Router, View } from 'react-navi';
import { useMappedState } from 'typeless';

import { navigation } from '@app/routes';
import { useRouterModule } from 'features/router/module';
import { useGlobalModule } from 'features/global/module';

import { Layout } from './Layout';

export const App = () => {
  useRouterModule();
  useGlobalModule();

  const user = useMappedState(state => state.global.user);

  return (
    <Router navigation={navigation} context={{ user }}>
      <Suspense fallback={null}>
        <Layout>
          <View />
        </Layout>
      </Suspense>
    </Router>
  );
};
