import { createSlice } from '@reduxjs/toolkit';

const filterListSlice = createSlice({
    name: 'filter',
    initialState: { value: '' },
    reducers: {
        filter(state, {payload}) {
            state.value = payload
            }
    }
})

export const filterListReducer = filterListSlice.reducer;
export const { filter } = filterListSlice.actions;
