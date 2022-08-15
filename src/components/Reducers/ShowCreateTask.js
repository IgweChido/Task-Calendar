import { createSlice } from "@reduxjs/toolkit";

export const ShowCreateTask = createSlice({

    // name
    name:'ShowCTask',

    // Initial State
    initialState:{
        showTask: false
    },


    // reducers
    reducers:{

        isShowing:(state)=>{
            state.showTask=true;
        },

        isNotShowing:(state)=>{
            state.showTask=false;
        }

    }

});

export const {isShowing, isNotShowing}= ShowCreateTask.actions;
export default ShowCreateTask.reducer;