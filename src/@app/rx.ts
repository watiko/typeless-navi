import type { Observable, ObservableInput, OperatorFunction, ObservedValueOf } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const catchLog = <T, R extends ObservableInput<any>>(
  fn: (err: Error, source: Observable<T>) => R,
): OperatorFunction<T, T | ObservedValueOf<R>> =>
  catchError<T, R>((err, source) => {
    if (process.env.NODE_ENV !== 'test') {
      // tslint:disable-next-line:no-console
      console.error(err);
    }
    return fn(err, source);
  });
