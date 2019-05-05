import { createActions } from 'typeless';
import { RouteEntry } from 'types';
import { lazy } from 'navi';

// --- Constants ---
export const MODULE = 'sample2';

// --- Actions ---
export const Sample2Actions = createActions(MODULE, {});

// --- Routing ---
export const routeEntry: RouteEntry = {
  path: '/sample2',
  routes: lazy(() => import('./routes')),
};

// --- Types ---
export interface Sample2State {}

declare module 'typeless/types' {
  export interface DefaultState {
    sample2: Sample2State;
  }
}
