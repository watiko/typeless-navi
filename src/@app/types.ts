import { Matcher } from 'navi';

type AppContext = {}; // TODO

export interface RouteEntry<
  Context extends object = AppContext,
  ChildContext extends object = Context
> {
  path: string;
  routes: Matcher<Context, ChildContext>;
}
