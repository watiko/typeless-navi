import React from 'react';
import { Sample1Module } from './module';
import { MODULE } from './interface';
import { mount, route } from 'navi';

// --- Routing ---
export default mount({
  '/': route({
    title: MODULE,
    view: <Sample1Module />,
  }),
});
