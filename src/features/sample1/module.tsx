import React from 'react';
import { createEpic, createReducer, useModule } from 'typeless';

import { Sample1View } from './components/Sample1View';
import { MODULE, Sample1Actions, Sample1State } from './interface';

// --- Epic ---
export const epic = createEpic(MODULE);

// --- Reducer ---
const initialState: Sample1State = {};

export const reducer = createReducer(initialState);

// --- Module ---
export const Sample1Module = () => {
  useModule({
    epic,
    reducer,
    reducerPath: ['sample1'],
    actions: Sample1Actions,
  });
  return <Sample1View />;
};
