import * as Rx from 'typeless/rx';
import { getUser } from 'services/API';
import { clearAccessToken, getAccessToken } from 'services/Storage';
import { RouterActions } from 'features/router/interface';

import { GlobalActions, GlobalState, handle } from './interface';

// --- Epic ---
handle
  .epic()
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

handle
  .reducer(initialState)
  .on(GlobalActions.loggedIn, (state, { user }) => {
    state.user = user;
    state.isLoaded = true;
  })
  .on(GlobalActions.logout, state => {
    state.user = null;
  });

// --- Module ---
export const useGlobalModule = handle;
