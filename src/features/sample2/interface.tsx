import { createModule } from 'typeless';
import { lazy } from 'navi';
import { RouteEntry } from '@app/types';

import { Sample2Symbol } from './symbol';

export const [handle] = createModule(Sample2Symbol).withState<Sample2State>();

// --- Routing ---
export const routeEntry: RouteEntry = {
  path: '/sample2',
  routes: lazy(() => import('./routes')),
};

// --- Types ---
export interface Sample2State {}
