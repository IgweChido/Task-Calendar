import { createSlice } from "@reduxjs/toolkit";

export const ShiftReducer = createSlice({

    // name
    name: 'shiftReducer',

    // initial state
    initialState:{
        shiftR: null,
       
    },

    // Reducers
    reducers:{
        addShiftR:(state,action)=>{
            state.shiftR= action.payload;
        },

      
    }

})
export const { addShiftR, shiftingArr}= ShiftReducer.actions
export default ShiftReducer.reducer;