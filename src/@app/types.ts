import { Matcher } from 'navi';

export interface AppContext {
  user: User | null;
  isLoadedAsync: Promise<void>;
}

export interface RouteEntry<
  Context extends object = AppContext,
  ChildContext extends object = Context
> {
  path: string;
  routes: Matcher<Context, ChildContext>;
}

export interface User {
  id: string;
  username: string;
}
