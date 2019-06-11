import React from 'react';
import { mount, route } from 'navi';
import { AppContext } from '@app/types';

import { {{pascalCase name}}Module } from './module';

export default mount<AppContext>({
  '/': route({
    title: '{{pascalCase name}}',
    view: <{{pascalCase name }}Module />,
  }),
});
