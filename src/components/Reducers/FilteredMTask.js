import { createSlice } from '@reduxjs/toolkit';


const initialState=[

];

export const FilteredMTask = createSlice({

    // name
    name: 'filteredTask',

    // Initial State
    initialState,



    // Reducers
    reducers:{
        addFiltered:(state, action)=>{
            state.push(action.payload)
            console.log(action.payload)
        }
    }
})

export const {addFiltered}= FilteredMTask.actions
export default FilteredMTask.reducer;