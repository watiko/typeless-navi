import { createActions } from 'typeless';

import { User } from '@app/types';

// --- Constants ---
export const MODULE = 'global';

// --- Actions ---
export const GlobalActions = createActions(MODULE, {
  $mounted: null,
  logout: null,
  loggedIn: (user: User | null) => ({ payload: { user } }),
});

// --- Types ---
export interface GlobalState {
  user: User | null;
  isLoaded: boolean;
}

declare module 'typeless/types' {
  export interface DefaultState {
    global: GlobalState;
  }
}
