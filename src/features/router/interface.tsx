import { createActions } from 'typeless';
import { URLDescriptor } from 'navi';

// --- Constants ---
export const MODULE = '@@router';

// --- Actions ---
export const RouterActions = createActions(MODULE, {
  $mounted: null,
  navigate: (url: RouterNavigation) => ({ payload: { url } }),
  locationChange: (data: RouterLocation) => ({ payload: data }),
});

// --- Types ---
export type RouterNavigation = string | Partial<URLDescriptor>;
export interface RouterLocation {
  url: URLDescriptor;
  state?: object;
}

export interface RouterState {
  location: RouterLocation | null;
  prevLocation: RouterLocation | null;
}

declare module 'typeless/types' {
  export interface DefaultState {
    router: RouterState;
  }
}
