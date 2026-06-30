import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  // Como hojas de nuestro store.
  // Aquí habrá pequeños reducers.
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
