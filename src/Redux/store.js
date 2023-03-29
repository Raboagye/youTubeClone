import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import apiReducer from "./apiSlice"


export const store = configureStore({
    reducer: {
        user: userReducer,
        api: apiReducer
    }
})