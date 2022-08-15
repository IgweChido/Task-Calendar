import { createSlice } from "@reduxjs/toolkit";


export const MonthMoveSlice = createSlice({

    // name
    name:'moveSlice',

    // Initial State
    initialState:{
        monthMove:null,
    },

    // Reducers
    reducers:{
        moveMonth:(state, action)=>{
            state.monthMove = action.payload;
            console.log(action.payload)
        }
    }

})
export const {moveMonth}= MonthMoveSlice.actions
export default MonthMoveSlice.reducer;