import React from 'react';
import { mount, route } from 'navi';

import { AppContext } from '@app/types';
import { withAuthentication } from '@app/routes';

import { Sample2Module } from './module';

export default mount<AppContext>({
  '/': withAuthentication(
    route({
      title: 'Sample2 - Sample App',
      getView: async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return <Sample2Module />;
      },
    }),
  ),
});
