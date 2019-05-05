import React from 'react';
import { Sample2Module } from './module';
import { mount, route } from 'navi';

export default mount({
  '/': route({
    title: 'Sample2 - Sample App',
    getView: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return <Sample2Module />;
    },
  }),
});
