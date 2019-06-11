import React from 'react';

import { Sample2View } from './components/Sample2View';
import { Sample2State, handle } from './interface';

// --- Reducer ---
const initialState: Sample2State = {};

handle.reducer(initialState);

// --- Module ---
export const Sample2Module = () => {
  handle();
  return <Sample2View />;
};
