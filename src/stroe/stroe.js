import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "../features/wordsSlice";
import typeReducer from "../features/typeSlice";
export const store = configureStore({
    reducer:{
        words: wordReducer,
        type: typeReducer
    }
})