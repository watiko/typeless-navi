import type { Observable } from 'rxjs';
import * as Rx from 'typeless/rx';

export type User = {
  id: string;
  username: string;
};

const sampleUser = { id: 'a', username: 'user' };

export const login = (
  username: string,
  password: string,
): Observable<{ user: User; token: string }> =>
  Rx.of({ user: sampleUser, token: '123' }).pipe(
    Rx.delay(300),
    Rx.map(user => {
      if (username === 'user' && password === 'pass') {
        return user;
      }
      throw new Error('Invalid username or password');
    }),
  );

export const getUser = (): Observable<User> => Rx.of(sampleUser).pipe(Rx.delay(300));
