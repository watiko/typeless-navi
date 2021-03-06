import * as Rx from 'typeless/rx';
import { Route } from 'navi';

import { navigation } from '@app/routes';

import { RouterActions, RouterState, handle, RouterLocation } from './interface';

const toRouterLocation = (route: Route): RouterLocation => {
  const { url, state } = route;
  return { url, state };
};

const emitLocationChageIfNeeded = (route: Route, fn: (location: RouterLocation) => void) => {
  if (route.type === 'ready') {
    fn(toRouterLocation(route));
  }
};

// --- Epic ---
handle
  .epic()
  .on(
    RouterActions.$mounted,
    () =>
      new Rx.Observable(subscriber => {
        const emitter = (location: RouterLocation) =>
          subscriber.next(RouterActions.locationChange(location));
        emitLocationChageIfNeeded(navigation.getCurrentValue(), emitter);
        return navigation.subscribe(route => {
          emitLocationChageIfNeeded(route, emitter);
        });
      }),
  )
  .on(RouterActions.navigate, ({ url }) => {
    return Rx.fromPromise(navigation.navigate(url)).pipe(
      Rx.map(route => RouterActions.locationChange(toRouterLocation(route))),
    );
  });

// --- Reducer ---
const initialState: RouterState = {
  location: null,
  prevLocation: null,
};

handle.reducer(initialState).on(RouterActions.locationChange, (state, payload) => {
  state.prevLocation = state.location;
  state.location = payload;
});

// --- Module ---
export const useRouterModule = handle;
