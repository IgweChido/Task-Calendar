import { createSlice }  from '@reduxjs/toolkit'

export const ShowMonthTask = createSlice({

    //name
    name: 'showMonth',
    
    // Initial State
    initialState:{
       
        mtLook: false
    },

    // reducers
    reducers:{

      

        mtLooking:(state)=>{
            state.mtLook=true;
        },

        mtNotLooking:(state)=>{
            state.mtLook=false;
        }

    }
})

export const { mtLooking, mtNotLooking}= ShowMonthTask.actions
export default ShowMonthTask.reducer