import { createModule } from 'typeless';
import { lazy } from 'navi';
import { RouteEntry } from '@app/types';

import { Sample1Symbol } from './symbol';

export const [handle] = createModule(Sample1Symbol).withState<Sample1State>();

// --- Routing ---
export const routeEntry: RouteEntry = {
  path: '/',
  routes: lazy(() => import('./routes')),
};

// --- Types ---
export interface Sample1State {}
