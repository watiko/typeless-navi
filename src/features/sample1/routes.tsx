import React from 'react';
import { mount, route } from 'navi';

import { Sample1Module } from './module';

// --- Routing ---
export default mount({
  '/': route({
    title: 'Sample1 - Sample App',
    view: <Sample1Module />,
  }),
});
