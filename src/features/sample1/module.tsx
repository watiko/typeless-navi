import React from 'react';

import { Sample1View } from './components/Sample1View';
import { Sample1State, handle } from './interface';

// --- Reducer ---
const initialState: Sample1State = {};

handle.reducer(initialState);

// --- Module ---
export const Sample1Module = () => {
  handle();
  return <Sample1View />;
};
