import React from 'react'
import '../styles/TaskView.scss'
import add from '../icons/add.svg'
import { useDispatch, useSelector } from 'react-redux';
import { isNotShowing, isShowing } from './Reducers/ShowCreateTask';

function TaskPrompt() {

    const  dispatch = useDispatch()
    const {showTask}= useSelector((state)=>state.showCTask);

    const openCreateTask=()=>{

             dispatch(isShowing())
             console.log(showTask)
            
       
    }

  return (
    // {/* Task prompt */}
    <div className='t-prompt' onClick={openCreateTask}>
        <img src={add} alt=''></img>

    </div>
  )
}

export default TaskPrompt