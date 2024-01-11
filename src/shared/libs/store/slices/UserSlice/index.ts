// imports ================================================== //
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit/react';

// types ==================================================== //
interface initialState {
    id: string | null,
    email: string | null,
}

// constants ================================================ //
const initialState: initialState = {
    id: null,
    email: null,
};

// main ===================================================== //
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<initialState>) => {
            let { id, email } = action.payload;
            state.id = id;
            state.email = email;
        }
    }
});

// exports ================================================== //
export const { set } = userSlice.actions;
export { userSlice };