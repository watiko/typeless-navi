import React from 'react';
import { mount, route } from 'navi';

import { {{pascalCase name}}Module } from './module';

export default mount({
  '/': route({
    title: '{{pascalCase name}}',
    view: <{{pascalCase name }}Module />,
  }),
});
