import React from 'react';
import { createEpic, createReducer, useModule } from 'typeless';

import { Sample2View } from './components/Sample2View';
import { MODULE, Sample2Actions, Sample2State } from './interface';

// --- Epic ---
export const epic = createEpic(MODULE);

// --- Reducer ---
const initialState: Sample2State = {};

export const reducer = createReducer(initialState);

// --- Module ---
export const Sample2Module = () => {
  useModule({
    epic,
    reducer,
    reducerPath: ['sample2'],
    actions: Sample2Actions,
  });
  return <Sample2View />;
};
