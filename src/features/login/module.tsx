import React from 'react';
import * as Rx from 'typeless/rx';
import { createEpic, createReducer, useModule, batchUpdate } from 'typeless';

import { catchLog } from '@app/rx';
import { login } from 'services/API';
import { setAccessToken } from 'services/Storage';
import { GlobalActions } from 'features/global/interface';
import { RouterActions } from 'features/router/interface';

import { LoginActions, LoginState, MODULE } from './interface';
import { LoginView } from './components/LoginView';

// --- Epic ---
export const epic = createEpic(MODULE).on(LoginActions.login, ({ form }, { getState }) => {
  return Rx.concatObs(
    Rx.of(LoginActions.setLoading(true)),
    Rx.of(LoginActions.setError('')),
    login(form.username, form.password).pipe(
      Rx.map(({ user, token }) => {
        setAccessToken(token);

        const redirectTo = getState().router.location!.url.query['redirectTo'];
        const url = !redirectTo ? '/' : decodeURIComponent(redirectTo);

        return batchUpdate([GlobalActions.loggedIn(user), RouterActions.navigate(url)]);
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

export const reducer = createReducer(initialState)
  .on(LoginActions.setLoading, (state, { isLoading }) => {
    state.isLoading = isLoading;
  })
  .on(LoginActions.setError, (state, { error }) => {
    state.error = error;
  });

// --- Module ---
export const LoginModule = () => {
  useModule({
    epic,
    reducer,
    reducerPath: ['login'],
    actions: LoginActions,
  });
  return <LoginView />;
};
