import * as Rx from 'typeless/rx';
import { createEpic, createReducer, useModule } from 'typeless';

import { getUser } from 'services/API';
import { clearAccessToken, getAccessToken } from 'services/Storage';
import { RouterActions } from 'features/router/interface';

import { GlobalActions, GlobalState, MODULE } from './interface';

// --- Epic ---
export const epic = createEpic(MODULE)
  .on(GlobalActions.$mounted, () => {
    if (getAccessToken()) {
      return getUser().pipe(Rx.map(GlobalActions.loggedIn));
    }
    return GlobalActions.loggedIn(null);
  })
  .on(GlobalActions.logout, () => {
    clearAccessToken();
    return RouterActions.navigate('/login');
  });

// --- Reducer ---
const initialState: GlobalState = {
  user: null,
  isLoaded: false,
};

export const reducer = createReducer(initialState)
  .on(GlobalActions.loggedIn, (state, { user }) => {
    state.user = user;
    state.isLoaded = true;
  })
  .on(GlobalActions.logout, state => {
    state.user = null;
  });

// --- Module ---
export const useGlobalModule = () =>
  useModule({
    epic,
    reducer,
    reducerPath: ['global'],
    actions: GlobalActions,
  });
