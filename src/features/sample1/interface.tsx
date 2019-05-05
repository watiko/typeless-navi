import { createActions } from 'typeless';

// --- Constants ---
export const MODULE = 'sample1';

// --- Actions ---
export const Sample1Actions = createActions(MODULE, {});

// --- Types ---
export interface Sample1State {}

declare module 'typeless/types' {
  export interface DefaultState {
    sample1: Sample1State;
  }
}