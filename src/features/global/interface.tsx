import { createModule } from 'typeless';

import { User } from '@app/types';

import { GlobalSymbol } from './symbol';

export const [handle, GlobalActions, getGlobalState] = createModule(GlobalSymbol)
  .withActions({
    $mounted: null,
    logout: null,
    loggedIn: (user: User | null) => ({ payload: { user } }),
  })
  .withState<GlobalState>();

// --- Types ---
export interface GlobalState {
  user: User | null;
  isLoaded: boolean;
}
