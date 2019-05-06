import React from 'react';
import { mount, route } from 'navi';

import { AppContext } from '@app/types';

import { LoginModule } from './module';

export default mount<AppContext>({
  '/': route({
    title: 'Login',
    view: <LoginModule />,
  }),
});
