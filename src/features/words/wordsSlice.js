import {createSlice } from "@reduxjs/toolkit";

const initWords = [
        {
            id: 0,
            name: "apple",
            pronounce: "[apple]",
            descriptions: [
                {
                    meaning: "a fruit",
                    type1: "n",
                    examples: ["an apple a day, leave doctor away","i like apple"]
                },
                {
                    meaning: "red",
                    type1: "adj",
                    examples: ["she is so apple","apple~~~"]
                }
            ],
            type1:[true, false, false, false],
            type2:[false, false, false, false],
        },
        {
            id: 1,
            name: "apple1",
            pronounce: "[apple]",
            descriptions: [
                {
                    meaning: "a fruit",
                    type1: "n",
                    examples: ["an apple a day, leave doctor away","i like apple"]
                },
                {
                    meaning: "red",
                    type1: "adj",
                    examples: ["she is so apple","apple~~~"]
                }
            ],
            type1:[true, false, false, false],
            type2:[false, false, false, false],
        },
        {
            id: 2,
            name: "appl2",
            pronounce: "[apple]",
            descriptions: [
                {
                    meaning: "a fruit",
                    type1: "n",
                    examples: ["an apple a day, leave doctor away","i like apple"]
                },
                {
                    meaning: "red",
                    type1: "adj",
                    examples: ["she is so apple","apple~~~"]
                }
            ],
            type1:[true, false, false, false],
            type2:[false, false, false, false],
        },
        {
            id: 3,
            name: "apple3",
            pronounce: "[apple]",
            descriptions: [
                {
                    meaning: "a fruit",
                    type1: "n",
                    examples: ["an apple a day, leave doctor away","i like apple"]
                },
                {
                    meaning: "red",
                    type1: "adj",
                    examples: ["she is so apple","apple~~~"]
                }
            ],
            type1:[true, false, false, false],
            type2:[false, false, false, false],
        },
        {
            id: 4,
            name: "apple4",
            pronounce: "[apple]",
            descriptions: [
                {
                    meaning: "a fruit",
                    type1: "n",
                    examples: ["an apple a day, leave doctor away","i like apple"]
                },
                {
                    meaning: "red",
                    type1: "adj",
                    examples: ["she is so apple","apple~~~"]
                }
            ],
            type1:[true, false, false, false],
            type2:[false, false, false, false],
        },
        {
            id: 5,
            name: "apple5",
            pronounce: "[apple]",
            descriptions: [
                {
                    meaning: "a fruit",
                    type1: "n",
                    examples: ["an apple a day, leave doctor away","i like apple"]
                },
                {
                    meaning: "red",
                    type1: "adj",
                    examples: ["she is so apple","apple~~~"]
                }
            ],
            type1:[true, false, false, false],
            type2:[false, false, false, false],
        }
];
const initValue = {
    words: initWords,
    status: "pending",  //pending, fullfilled, error 
    error: null
}

const wordsSlice = createSlice({
    name: words,
    initValue,
    reducers:{
        addWord: {
            reducer(state, action){
                let id = state.words.length;
                action.payload.id = id;
                state.words.push(action.payload);
            },
            prepare( id, name, pronounce, descriptions, type1, type2){
                return{
                    payload:{
                        id: id,
                        name: name,
                        pronounce: pronounce,
                        descriptions: descriptions,
                        type1:type1,
                        type2:type2,
                    }
                }
            }
        },
        editWord: {
            reducer(state, action){
                const id = action.payload.id;
                const newWord = action.payload;
                state.words[id] = newWord;
            },
            prepare(id, name, pronounce, descriptions, type1, type2){
                return{
                    payload:{
                        id: id,
                        name: name,
                        pronounce: pronounce,
                        descriptions: descriptions,
                        type1:type1,
                        type2:type2,
                    }
                }
            }
        },
        deleteWord: {
            reducer(state, action){
                //create new words, beacuse the id of each wor will be redefined
                const oldWords = state.words;
                const newWords = oldWords.map((item)=(item.id===action.id?null:item)).filter(Boolean);
                state.words = newWords;
            },
            prepare(id){
                return{
                    payload:{
                        id: id
                    }
                }
            }
        }
    },
    extraReduces(build){
        build
            .addCase()
    }
});

export default wordsSlice.reducer;
export const {addWord, editWord, deleteWord} = wordsSlice.actions;
export const selectorWords = (state) => (state.words.words);
export const selectorWordByID = (state, id) => (state.words.words[id]);
export const selectorStatus = (state) => (state.words.status);
export const selectorsError = (state) => (state.words.error);
