import { createModule } from 'typeless';
import { URLDescriptor } from 'navi';

import { RouterSymbol } from './symbol';

export const [handle, RouterActions, getRouterState] = createModule(RouterSymbol)
  .withActions({
    $mounted: null,
    navigate: (url: RouterNavigation) => ({ payload: { url } }),
    locationChange: (data: RouterLocation) => ({ payload: data }),
  })
  .withState<RouterState>();

// --- Types ---
export type RouterNavigation = string | Partial<URLDescriptor>;
export interface RouterLocation {
  url: URLDescriptor;
  state?: Record<string, any>;
}

export interface RouterState {
  location: RouterLocation | null;
  prevLocation: RouterLocation | null;
}
