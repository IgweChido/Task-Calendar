import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    // {id:1, title:'Brother shaggis birthday', date:'june 22, 2022',color:'red', note:'the reason for such an important events is because two times two plus one, is equals to my birthday crazy fact right?'},

];

export const TaskSlice = createSlice({

    // name
    name:'taskReducer',

    // InitialState
    initialState,


    // Reducers
    reducers:{
        addTask:(state, action)=>{
            state.push(action.payload)
            console.log(action.payload)
            
        },


        deleteTask:(state, action)=>{

            const{id} = action.payload;
            const existingTask = state.find(task =>task.id === id)

            if(existingTask){
                return state.filter(task => task.id !== id)
            }

        }
    }



})
export const { addTask, deleteTask} = TaskSlice.actions;
export default TaskSlice.reducer;