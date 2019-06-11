import React from 'react';
import * as Rx from 'typeless/rx';
import { catchLog } from '@app/rx';
import { login } from 'services/API';
import { setAccessToken } from 'services/Storage';
import { GlobalActions } from 'features/global/interface';
import { RouterActions, getRouterState } from 'features/router/interface';

import { LoginActions, LoginState, handle } from './interface';
import { LoginView } from './components/LoginView';

// --- Epic ---
handle.epic().on(LoginActions.login, ({ form }) => {
  return Rx.concatObs(
    Rx.of(LoginActions.setLoading(true)),
    Rx.of(LoginActions.setError('')),
    login(form.username, form.password).pipe(
      Rx.mergeMap(({ user, token }) => {
        setAccessToken(token);

        const redirectTo = getRouterState().location!.url.query['redirectTo'];
        const url = !redirectTo ? '/' : decodeURIComponent(redirectTo);

        return [GlobalActions.loggedIn(user), RouterActions.navigate(url)];
      }),
      catchLog(e => Rx.of(LoginActions.setError(e.message))),
    ),
    Rx.of(LoginActions.setLoading(false)),
  );
});

// --- Reducer ---
const initialState: LoginState = {
  isLoading: false,
  error: '',
};

handle
  .reducer(initialState)
  .on(LoginActions.setLoading, (state, { isLoading }) => {
    state.isLoading = isLoading;
  })
  .on(LoginActions.setError, (state, { error }) => {
    state.error = error;
  });

// --- Module ---
export const LoginModule = () => {
  handle();
  return <LoginView />;
};
