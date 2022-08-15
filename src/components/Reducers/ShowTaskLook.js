import { createSlice } from '@reduxjs/toolkit';

export const ShowTaskLook = createSlice({

    // name
    name: 'showLook',


    // Initial State
    initialState:{
        sLook: false,
      
    },

    // reducers
    reducers:{

        isLooking:(state)=>{
            state.sLook=true;
        },
        isNotLooking:(state)=>{
            state.sLook=false;
        },

       
        

    }

});
export const {isLooking, isNotLooking }= ShowTaskLook.actions
export default ShowTaskLook.reducer