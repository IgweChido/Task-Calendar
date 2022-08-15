import { createSlice } from "@reduxjs/toolkit";



export const DayTimelineSlice = createSlice({

    // name
    name: 'dayTimeline',

    //Initial State
    initialState:{
        dTimeline:'',
    },


    // Reducers
    reducers:{
        addDayTimeline:(state, action)=>{
            state.dTimeline = action.payload
            
            // console.log(action.payload)
        }
    }
    
    

})
export const {addDayTimeline}= DayTimelineSlice.actions;
export default DayTimelineSlice.reducer;