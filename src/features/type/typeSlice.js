import {createSlice} from "@reduxjs/toolkit";


const initTyp2 = [
    {
        id: 0,
        type: "fruit",
        description: "can eat",
    },
    {
        id: 1,
        type: "person",
        description: "person",
    },
    {
        id: 2,
        type: "country",
        description: "country",
    },
    {
        id: 3,
        type: "color",
        description: "color",
    }
];

const initTyp1 = [
    {
        id: 0,
        type: "n.",
        description: "can eat",
    },
    {
        id: 1,
        type: "adj.",
        description: "person",
    },
    {
        id: 2,
        type: "v.",
        description: "country",
    },
    {
        id: 3,
        type: "adv.",
        description: "color",
    }
];

const initialState = {
    type1: initTyp1,
    type2: initTyp2
};

const typeSlice = createSlice({
    name: "type",
    initialState,
    reducers: {
        addtype: {
            reducer(state, action){
                let newType = action.payload;
                newType.id = state.type2.lenght;
                state.push(newType);
            },
            prepare(type, description){
                return{
                    payload: {
                        type: type,
                        description: description
                    }
                }
            }
        }
    }
});

export default typeSlice.reducer;
export const {addType} = typeSlice.actions;
export const selectorType1 = (state) => (state.type.type1);
export const selectorType2 = (state) => (state.type.type2);