import { createSlice } from "@reduxjs/toolkit";

export const NumTaskReducer = createSlice({

    // name
    name: 'numTaskReducer',

    // initial state
    initialState:{
        NumTask: 0,
       
    },

    // Reducers
    reducers:{
        NumTaskR:(state,action)=>{
            state.NumTask= action.payload;
        },

      
    }

})
export const { NumTaskR}= NumTaskReducer.actions
export default NumTaskReducer.reducer;