import React, { Suspense } from 'react';

import { Router, View } from 'react-navi';
import { mount, route } from 'navi';

import { Layout } from './Layout';

const routes = mount({
  '/': route({
    title: '',
    view: <>top </>,
  }),
  '/delayed': route(async _req => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      title: 'delayed',
      view: <div>delayed view!</div>,
    };
  }),
});

export const App = () => (
  <Router routes={routes}>
    <Suspense fallback={null}>
      <Layout>
        <View />
      </Layout>
    </Suspense>
  </Router>
);
