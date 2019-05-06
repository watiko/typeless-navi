import { Matcher } from 'navi';

export type AppContext = {}; // TODO

export interface RouteEntry<
  Context extends object = AppContext,
  ChildContext extends object = Context
> {
  path: string;
  routes: Matcher<Context, ChildContext>;
}

export interface User {
  id: string;
  name: string;
}
