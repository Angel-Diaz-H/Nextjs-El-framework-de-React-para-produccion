import { useDispatch, useSelector } from "react-redux";
import { configureStore, Middleware } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import pokemonsReducer from "./pokemons/pokemon";
import { localStorageMiddleware } from "./middlewares/localStorage-middleware";

export const store = configureStore({
  // Como hojas de nuestro store.
  // Aquí habrá pequeños reducers.
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(localStorageMiddleware as Middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
