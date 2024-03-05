// imports ================================================== //
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit/react';

// types ==================================================== //
interface initialState {
    id: number | null,
}

// constants ================================================ //
const initialState: initialState = {
    id: null,
};

// main ===================================================== //
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<initialState>) => {
            state.id = action.payload.id;
        }
    }
});

// exports ================================================== //
export const { set } = userSlice.actions;
export default userSlice;