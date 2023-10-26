import { createSlice } from "@reduxjs/toolkit";

const videosInitialState = {
    url: 'https://www.youtube.com/watch?v=_fhDVVfELsM&t=1387s',
    error: null,
}

const currentVideoSlice = createSlice({
    name: "video",
   initialState: videosInitialState,

  reducers: {
      updateVideo(state, action) {  
          state.url = action.payload;
      },
      errorVideo(state, action) {  
          state.error = action.payload;
         },
   
  },
});

export const { updateVideo, errorVideo } = currentVideoSlice.actions;

export const currentVideoReducer = currentVideoSlice.reducer;