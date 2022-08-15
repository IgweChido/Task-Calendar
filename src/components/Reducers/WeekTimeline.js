import { createSlice } from "@reduxjs/toolkit";

export const WeekTimelineSlice = createSlice({
    // name
    name: 'weekTimeline',

    // Initial State
    initialState:{
        weekT:'',
        weekB:'',
    },
      
    
       
    

    // Reducers
    reducers:{
        addWeekTimeline:(state, action)=>{
            state.weekT = action.payload
            
           
            // console.log(action.payload)
        },
        weekBoolean:(state, action)=>{
            state.weekB = action.payload
            
           
            // console.log(action.payload)
        }

      
    }

    

})
export const {addWeekTimeline, weekBoolean}= WeekTimelineSlice.actions;
export default WeekTimelineSlice.reducer;