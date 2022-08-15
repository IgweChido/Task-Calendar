import React, { useEffect, useState } from 'react'
import '../styles/TaskLook.scss'
import '../styles/TaskView.scss'
import cancel from '../icons/cancel.svg'
import trash from '../icons/trash.svg'
import { useDispatch, useSelector } from 'react-redux';
import { isNotShowing, isShowing } from './Reducers/ShowCreateTask';
import { useParams } from 'react-router-dom';
import { isNotLooking } from './Reducers/ShowTaskLook';
import { deleteTask } from './Reducers/TaskReducer'
import AddedTaskPromt from './AddedTaskPromt'

function TaskLook(props) {
    
    const  dispatch = useDispatch()
    
    const Tasks = useSelector((store)=>store.taskP)
    const [openAT, setOpenAT]= useState(false)

    // open Added task successfully
    const openAddedT=()=>{
        setOpenAT(true)
    
        setTimeout(()=>{
            setOpenAT(false)
            handleDelete()
            
        },1500)

       

        
    
    }

    const closeTaskOverlay =()=>{
      
        dispatch(isNotLooking())
       
    }

    const backgroundColor={
        backgroundColor: props.tcolor,
    }

    const handleDelete=()=>{
       
        dispatch(deleteTask({id: Tasks[props.tID].id}))
        dispatch(isNotLooking())
       
    }


  return (
    <div className='taskview-overlay'>

        <div className='task-look' key={props.tID} style={backgroundColor}>

                 {/* cancel sign */}
                 <div className='t-cancel' onClick={closeTaskOverlay}>
                    <img src={cancel} alt=''></img>
                </div>

                {/* title of the task */}
                <div className='look-title'>
                    <p>{Tasks[props.tID].title}</p>
                </div>

                {/* Date and day */}
                <div className='look-date'>
                    <p>{Tasks[props.tID].date} - {Tasks[props.tID].timeIS}</p>
                </div>

                {/* Note area */}
                <div className='look-note'>
                    <p>{Tasks[props.tID].note}
                    </p>
                </div>

                {/* delete task */}
                <div className='delete-task' onClick={ openAddedT}>
                    <img src={trash} alt=''></img>
                </div>
            </div>

            
            {
                openAT && 
                <AddedTaskPromt word={'Task Deleted Successfully'} color={false}/>
            }

    </div>
    
  )
}

export default TaskLook