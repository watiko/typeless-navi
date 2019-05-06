import { mount } from 'navi';

import { RouteEntry } from '@app/types';

const req = require.context('../features', true, /interface.tsx?$/);

const resolveRoutes = () => {
  const targetModules = req.keys().map(key => req(key));
  const matcherEntry = targetModules.reduce((acc, module) => {
    const routeEntry: RouteEntry | undefined = module['routeEntry'];

    if (!routeEntry) {
      return acc;
    }

    return { ...acc, ...{ [routeEntry.path]: routeEntry.routes } };
  }, {});

  return mount(matcherEntry);
};

export const routes = resolveRoutes();
