import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
