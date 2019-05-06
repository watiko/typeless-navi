import React from 'react';
import { mount, route } from 'navi';

import { AppContext } from '@app/types';

import { Sample1Module } from './module';

// --- Routing ---
export default mount<AppContext>({
  '/': route({
    title: 'Sample1 - Sample App',
    view: <Sample1Module />,
  }),
});
