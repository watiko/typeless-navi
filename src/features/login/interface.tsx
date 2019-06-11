import { createModule } from 'typeless';
import { lazy } from 'navi';
import { RouteEntry } from '@app/types';

import { LoginSymbol } from './symbol';

export const [handle, LoginActions, getLoginState] = createModule(LoginSymbol)
  .withActions({
    $mounted: null,
    login: (form: LoginFormValue) => ({ payload: { form } }),
    setLoading: (isLoading: boolean) => ({ payload: { isLoading } }),
    setError: (error: string) => ({ payload: { error } }),
  })
  .withState<LoginState>();

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
