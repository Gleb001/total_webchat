// imports ================================================== //
import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import AuthSlice from "./slices/AuthSlice";
import ModalWindowsSlice from "./slices/ModalWindowsSlice";

// types ==================================================== //
type AppStore = ReturnType<typeof makeStore>;
type RootState = AppStore["getState"];
type AppDispatch = AppStore["dispatch"];

// main ===================================================== //
const makeStore = () => configureStore({
    reducer: {
        [UserSlice.name]: UserSlice.reducer,
        [AuthSlice.name]: AuthSlice.reducer,
        [ModalWindowsSlice.name]: ModalWindowsSlice.reducer
    }
});

// exports ================================================== //
export type { AppStore, RootState, AppDispatch };
export default makeStore;