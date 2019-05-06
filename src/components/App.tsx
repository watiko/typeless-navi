import React, { Suspense } from 'react';
import { Router, View } from 'react-navi';

import { navigation } from '@app/routes';
import { useRouterModule } from 'features/router/module';

import { Layout } from './Layout';

export const App = () => {
  useRouterModule();

  return (
    <Router navigation={navigation}>
      <Suspense fallback={null}>
        <Layout>
          <View />
        </Layout>
      </Suspense>
    </Router>
  );
};
