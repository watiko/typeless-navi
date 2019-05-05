import React from 'react';
import { Sample2Module } from './module';
import { MODULE } from './interface';
import { mount, route } from 'navi';

// --- Routing ---
export default mount({
  '/': route({
    title: MODULE,
    getView: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return <Sample2Module />;
    },
  }),
});
