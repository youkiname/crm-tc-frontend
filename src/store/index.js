import {configureStore} from "@reduxjs/toolkit";
import useReducer from './slices/useSlice'
export const store = configureStore({
    reducer: {
        user: useReducer,
    }
})