import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from './AuthSlice';
import { CrudSlice } from "./CurdSlice";


export const store = configureStore({
    reducer: {
        Auth: AuthSlice.reducer,
        crud:CrudSlice.reducer
    },
});