// imports ================================================== //
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit/react';

// types ==================================================== //
interface initialState {
    authenticated: boolean
}

// constants ================================================ //
const initialState: initialState = {
    authenticated: false
};

// main ===================================================== //
const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<boolean>) => {
            state.authenticated = action.payload;
        }
    }
});
// exports ================================================== //
export const { set } = AuthSlice.actions;
export default AuthSlice;