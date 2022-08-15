import React, { useEffect, useState } from 'react'
import '../styles/TaskLook.scss'
import '../styles/TaskView.scss'
import cancel from '../icons/cancel.svg'
import trash from '../icons/trash.svg'
import { useDispatch, useSelector } from 'react-redux';
import { isNotShowing, isShowing } from './Reducers/ShowCreateTask';
import { useParams } from 'react-router-dom';
import { isNotLooking } from './Reducers/ShowTaskLook';
import { mtNotLooking } from './Reducers/ShowMonthTask';
import { deleteTask } from './Reducers/TaskReducer'
import AddedTaskPromt from './AddedTaskPromt'


function TaskLookM(props) {

    const [filter, setFilter]= useState(props.filter[props.index])
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
      
        dispatch(mtNotLooking())
       
    }

    const backgroundColor={
        backgroundColor: props.tcolor,
    }

    console.log(filter)

    const handleDelete=()=>{
        dispatch(deleteTask({id: Tasks[props.index].id}))
       
        dispatch(mtNotLooking())
       
    }
  return (
    <div className='taskview-overlay'>

        

        <div className='task-look' key={props.index} style={backgroundColor}>

                 {/* cancel sign */}
                 <div className='t-cancel' onClick={closeTaskOverlay}>
                    <img src={cancel} alt=''></img>
                </div>

                {/* title of the task */}
                <div className='look-title'>
                    <p>{filter.title}</p>
                </div>

                {/* Date and day */}
                <div className='look-date'>
                    <p>{filter.date} - {filter.timeIS}</p>
                </div>

                {/* Note area */}
                <div className='look-note'>
                    <p>{filter.note}
                    </p>
                </div>

                {/* delete task */}
                <div className='delete-task' onClick={openAddedT}>
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

export default TaskLookM