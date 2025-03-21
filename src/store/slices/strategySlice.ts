// src/store/slices/strategySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Strategy {
  name: string;
}

interface StrategyState {
  strategies: Strategy[];
}

const initialState: StrategyState = {
  strategies: [],
};

const strategySlice = createSlice({
  name: "strategy",
  initialState,
  reducers: {
    saveStrategy: (state, action: PayloadAction<Strategy>) => {
      state.strategies.push(action.payload);
    },
  },
});

export const { saveStrategy } = strategySlice.actions;
export default strategySlice.reducer;
