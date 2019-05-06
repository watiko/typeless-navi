import React, { Suspense } from 'react';
import { initialize } from 'typeless';
import { Router, View } from 'react-navi';

import { navigation } from '@app/routes';
import { useRouterModule } from 'features/router/module';

import { Layout } from './Layout';

const { TypelessProvider } = initialize();

export const App = () => {
  useRouterModule();

  return (
    <TypelessProvider>
      <Router navigation={navigation}>
        <Suspense fallback={null}>
          <Layout>
            <View />
          </Layout>
        </Suspense>
      </Router>
    </TypelessProvider>
  );
};
