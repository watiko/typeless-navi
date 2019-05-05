import React, { Suspense } from 'react';
import { initialize } from 'typeless';

import { Router, View } from 'react-navi';

import { Layout } from './Layout';
import { routes } from '../routes';

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
