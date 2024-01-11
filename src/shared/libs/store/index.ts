// imports ================================================== //
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";
import AuthSlice from "./slices/AuthSlice";

// types ==================================================== //
type AppStore = ReturnType<typeof makeStore>;
type RootState = AppStore["getState"];
type AppDispatch = AppStore["dispatch"];

// main ===================================================== //
const makeStore = () => configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [AuthSlice.name]: AuthSlice.reducer
    }
});

// exports ================================================== //
export type { AppStore, RootState, AppDispatch };
export default makeStore;