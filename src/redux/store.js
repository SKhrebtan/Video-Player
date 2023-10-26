import { configureStore } from "@reduxjs/toolkit";
import { currentVideoReducer } from "./reducer/currentVideoReducer";
import { persistedReducer } from "./reducer/videoListReducer";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
  videoList: persistedReducer,
  video: currentVideoReducer,
  },
   middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },  
});

export const persistor = persistStore(store)