import React from 'react';
import { mount, route } from 'navi';

import { Sample2Module } from './module';

export default mount({
  '/': route({
    title: 'Sample2 - Sample App',
    getView: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return <Sample2Module />;
    },
  }),
});
