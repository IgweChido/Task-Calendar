import { createSlice } from "@reduxjs/toolkit";


export const NavigationSlice = createSlice({

    // name
    name:'navigateSlice',

    // Initial State
    initialState:{
        navSlice:'',
    },

    // Reducers
    reducers:{
        addNavigation:(state, action)=>{
            state.navSlice = action.payload;
            console.log(action.payload)
        }
    }

})
export const {addNavigation}= NavigationSlice.actions
export default NavigationSlice.reducer;