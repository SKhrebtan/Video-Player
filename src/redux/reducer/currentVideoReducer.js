import { createSlice } from '@reduxjs/toolkit';

const videosInitialState = {
  //   url: 'https://www.youtube.com/watch?v=_fhDVVfELsM&t=1387s',
  url: [
    'https://www.youtube.com/watch?v=BFkYoT5Gezo',
    'https://www.youtube.com/watch?v=N_MqfF0WBsU',
    'https://www.youtube.com/watch?v=coCjlhyFug8',
    'https://www.youtube.com/watch?v=TYIl6n_SRCI',
    'https://www.youtube.com/watch?v=fOGMRnKl5co',
    'https://www.youtube.com/watch?v=Opxhh9Oh3rg',
    'https://www.youtube.com/watch?v=CLpR0oBOKWQ',
    'https://www.youtube.com/watch?v=K3WAC7CZTDA',
    'https://www.youtube.com/watch?v=uhvrvsiQqbI',
    'https://www.youtube.com/watch?v=ZLJ8XO7pBu4',
    'https://www.youtube.com/watch?v=yjOeWiPZeZw',
    'https://www.youtube.com/watch?v=_XiVLhVe4Xc',
    'https://www.youtube.com/watch?v=V5QukAC-jqE',
    'https://www.youtube.com/watch?v=qcBi55VYu1w',
    'https://www.youtube.com/watch?v=B7nKzCRL_oo',
    'https://www.youtube.com/watch?v=_eBCxYVma1g',
    'https://www.youtube.com/watch?v=PekVe2nZ2xU',
    'https://www.youtube.com/watch?v=9d6q3caSO0A',
    'https://www.youtube.com/watch?v=2Ja4Fo7OJws',
    'https://www.youtube.com/watch?v=QFP9OTy7M2g',
    'https://www.youtube.com/watch?v=YdW5-uJqCVY',
    'https://www.youtube.com/watch?v=l2n167F0eBc',
    'https://www.youtube.com/watch?v=r9fYPH0Gios',
    'https://www.youtube.com/watch?v=QkF3oxziUI4',
    'https://www.youtube.com/watch?v=WGoDaYjdfSg',
    'https://www.youtube.com/watch?v=oDVCXe8psxU',
    'https://www.youtube.com/watch?v=x-zxBNz3XbM',
    'https://www.youtube.com/watch?v=RbmS3tQJ7Os',
    'https://www.youtube.com/watch?v=G3dFpQzu54w',
    'https://www.youtube.com/watch?v=z0MZD29r_QQ',
    'https://www.youtube.com/watch?v=RLdFNr-HtJE',
    'https://www.youtube.com/watch?v=10Ha80EgaB0',
    'https://www.youtube.com/watch?v=VfFVgvKvIbU',
    'https://www.youtube.com/watch?v=ngYwXvdgrrM',
    'https://www.youtube.com/watch?v=dN31ZSQgabs',
    'https://www.youtube.com/watch?v=JwYX52BP2Sk',
    'https://www.youtube.com/watch?v=x-xTttimcNk',
    'https://www.youtube.com/watch?v=7m9ivNr-HLE',
    'https://www.youtube.com/watch?v=O52jAYa4Pm8',
    'https://www.youtube.com/watch?v=rs6Y4kZ8qtw&list=RDrs6Y4kZ8qtw&index=2',
    'https://www.youtube.com/watch?v=HwVnX4ZgliY',
    'https://www.youtube.com/watch?v=_NCd0Y776VQ&pp=ygUPdHVydGxlcyBlbGVhbm9y',
    'https://www.youtube.com/watch?v=pyq3PUTnpd0',
    'https://www.youtube.com/watch?v=9ZEURntrQOg',
    'https://www.youtube.com/watch?v=1AyVXGHxHec',
    'https://www.youtube.com/watch?v=z0vCwGUZe1I',
  ],
  error: null,
};

const currentVideoSlice = createSlice({
  name: 'video',
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
