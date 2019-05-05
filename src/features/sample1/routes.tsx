import React from 'react';
import { Sample1Module } from './module';
import { mount, route } from 'navi';

// --- Routing ---
export default mount({
  '/': route({
    title: 'Sample1 - Sample App',
    view: <Sample1Module />,
  }),
});
