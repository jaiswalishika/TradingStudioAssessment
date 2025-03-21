// src/store/reducers/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../slices/loginSlice";
import strategyReducer from "../slices/strategySlice";

const rootReducer = combineReducers({
  login: loginReducer,
  strategy: strategyReducer,
});

export default rootReducer;
