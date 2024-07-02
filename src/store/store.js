import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/slices.js";
export const store = configureStore({
  reducer: {
    users,
  },
});
