import { createActions } from 'typeless';

// --- Constants ---
export const MODULE = 'sample2';

// --- Actions ---
export const Sample2Actions = createActions(MODULE, {});

// --- Types ---
export interface Sample2State {}

declare module 'typeless/types' {
  export interface DefaultState {
    sample2: Sample2State;
  }
}
