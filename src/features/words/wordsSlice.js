import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    words: [],
    status: "pending",  //pending, fullfilled, error 
    error: null
}

export const fetchWords = createAsyncThunk("words/fetchWords", async () =>{
    console.log("begin!!!")
    const response = await axios.get("http://127.0.0.1:7001/words")
    console.log("get the result!!!"+response.data.length)
    return response.data
})

export const addNewWord = createAsyncThunk("words/addNewWord", async (newWord) =>{
    try {
        const response = await axios.post("http://127.0.0.1:7001/words", newWord)
        return response.data;
    } catch (err) {
        return err.message;
    }
})

export const editNewWord = createAsyncThunk('words/editNewPost', async (newWord) => {
    const { id } = newWord;
    try {
        const response = await axios.put(`http://127.0.0.1:7001/words/${id}`, newWord)
        return response.data
    } catch (err) {
        return err.message;
    }
})

export const deleteNewWord = createAsyncThunk('words/deleteNewPost', async (newWord) => {
    const { id } = newWord;
    try {
        await axios.delete(`http://127.0.0.1:7001/words/${id}`)
        return newWord
    } catch (err) {
        return err.message;
    }
})

const wordsSlice = createSlice({
    name: 'words',
    initialState,
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
                const newWords = state.words.map((word, index) => (
                    index===id?newWord:word
                ));
                state.words = newWords;
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
                const newWords = oldWords.map((item)=>(item.id===action.id?null:item)).filter(Boolean);
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchWords.pending,(state, action) => {
                state.status = "pending";
            })
            .addCase(fetchWords.fulfilled,(state, action) => {
                state.words = action.payload;
                state.status = "fulfilled";
            })
            .addCase(fetchWords.rejected,(state, action) => {
                console.log("error");
                state.words = action.payload.message;
                state.status = "error";
            })
            .addCase(addNewWord.fulfilled,(state, action) => {
                state.words.push(action.payload);
            })
            .addCase(editNewWord.fulfilled,(state, action) => {
                const newWord = action.payload;
                const newWords = state.words.map((word, index) => (
                    index===action.payload.id?newWord:word
                ));
                state.words = newWords;
            })
            .addCase(deleteNewWord.fulfilled,(state, action) => {
                const oldWords = state.words;
                const newWords = oldWords.filter( item => item.id!==action.payload.id);
                state.words = newWords;
            })
    }
});

export const {addWord, editWord, deleteWord} = wordsSlice.actions;
export const selectorWords = (state) => (state.words.words);
export const selectorWordByID = (state, id) =>
    state.words.words.find((word) => String(word.id) === String(id))
export const selectorStatus = (state) => (state.words.status);
export const selectorError = (state) => (state.words.error);
export default wordsSlice.reducer;
