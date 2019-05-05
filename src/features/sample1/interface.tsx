import { createActions } from 'typeless';
import { lazy } from 'navi';
import { RouteEntry } from '@/types';

// --- Constants ---
export const MODULE = 'sample1';

// --- Actions ---
export const Sample1Actions = createActions(MODULE, {});

// --- Routing ---
export const routeEntry: RouteEntry = {
  path: '/',
  routes: lazy(() => import('./routes')),
};

// --- Types ---
export interface Sample1State {}

declare module 'typeless/types' {
  export interface DefaultState {
    sample1: Sample1State;
  }
}
