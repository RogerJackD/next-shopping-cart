import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, userReducer } from "../features";

export const store = configureStore({
    reducer : {
        counterReducer,
        userReducer
    }
})

export type AppDistpatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;