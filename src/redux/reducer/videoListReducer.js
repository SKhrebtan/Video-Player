import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'videos',
  storage,
}
const videosInitialState = { items: [] };

const videoListSlice = createSlice({
    name: "videoList",
   initialState: videosInitialState,

  reducers: {
    addVideo(state, action) {  
                state.items.push(action.payload)
         },
    deleteVideo(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
                }
  },
});

export const { addVideo, deleteVideo } = videoListSlice.actions;
export const persistedReducer = persistReducer(persistConfig, videoListSlice.reducer)
