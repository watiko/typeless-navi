import { createActions } from 'typeless';
import { lazy } from 'navi';

import { RouteEntry } from '@app/types';

// --- Constants ---
export const MODULE = 'login';

// --- Actions ---
export const LoginActions = createActions(MODULE, {
  $mounted: null,
  login: (form: LoginFormValue) => ({ payload: { form } }),
  setLoading: (isLoading: boolean) => ({ payload: { isLoading } }),
  setError: (error: string) => ({ payload: { error } }),
});

// --- Routing ---
export const routeEntry: RouteEntry = {
  path: '/login',
  routes: lazy(() => import('./routes')),
};

// --- Types ---
export interface LoginFormValue {
  username: string;
  password: string;
}

export interface LoginState {
  isLoading: boolean;
  error: string;
}

declare module 'typeless/types' {
  export interface DefaultState {
    login: LoginState;
  }
}
