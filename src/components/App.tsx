import React, { Suspense } from 'react';
import { initialize } from 'typeless';

import { Router, View } from 'react-navi';
import { mount, lazy } from 'navi';

import { Layout } from './Layout';

const { TypelessProvider } = initialize();

const routes = mount({
  '/': lazy(() => import('features/sample1/routes')),
  '/sample2': lazy(() => import('features/sample2/routes')),
});

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
