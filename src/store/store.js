import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "../features/words/wordsSlice";
import typeReducer from "../features/type/typeSlice";


export const store = configureStore({
    reducer:{
        words: wordReducer,
        type: typeReducer
    }
})
