// imports ================================================== //
import type { ModalWindows } from '@/features/ActiveWindows/constants/ModalWindows';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit/react';

// types ==================================================== //
type NameModalWindow = keyof ModalWindows
type ActiveWindows = NameModalWindow[]
interface initialState {
    active_windows: ActiveWindows,
}

// constants ================================================ //
const initialState: initialState = {
    active_windows: [],
};

// main ===================================================== //
const ModalWindowsSlice = createSlice({
    name: 'modalWindow',
    initialState,
    reducers: {
        setTotal: (state, action: PayloadAction<NameModalWindow>) => {
            state.active_windows = [action.payload];
        },
        setByIndex: (state, action: PayloadAction<{ title: NameModalWindow, index: number }>) => {
            let {title, index} = action.payload;
            state.active_windows.splice(index, 0, title);
        },
        remove: (state, action: PayloadAction<NameModalWindow>) => {
            state.active_windows = state.active_windows.filter(
                (window) => window !== action.payload
            );
        },
        clear: (state) => {
            state.active_windows = [];
        },
    }
});

// exports ================================================== //
export const { setTotal, setByIndex, remove, clear } = ModalWindowsSlice.actions;
export type { ActiveWindows, NameModalWindow };
export default ModalWindowsSlice;