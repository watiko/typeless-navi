import React, { Suspense } from 'react';
import { initialize } from 'typeless';
import { Router, View } from 'react-navi';

import { routes } from '@app/routes';

import { Layout } from './Layout';

const { TypelessProvider } = initialize();

export const App = () => (
  <TypelessProvider>
    <Router routes={routes}>
      <Suspense fallback={null}>
        <Layout>
          <View />
        </Layout>
      </Suspense>
    </Router>
  </TypelessProvider>
);
