import { configureStore } from "@reduxjs/toolkit";
import { bikesApi } from "@/api/bikesApiService";
import bikedataSlice from "./features/bikedataSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [bikesApi.reducerPath]: bikesApi.reducer,
      bikedata: bikedataSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(bikesApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
