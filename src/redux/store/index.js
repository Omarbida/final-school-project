import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/authSlice";

const combinedReducers = combineReducers({
  auth: authReducer,
});
export const store = configureStore({
  reducer: combinedReducers,
});
