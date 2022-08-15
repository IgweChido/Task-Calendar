import React, { useEffect, useState } from 'react'
import '../../styles/Month/MonthTime.scss'
import { useDispatch, useSelector } from 'react-redux';
import { isLooking} from '../Reducers/ShowTaskLook';
import TaskLookM from '../TaskLookM';
import MonthTaskLook from './MonthTaskLook';
import { mtLooking } from '../Reducers/ShowMonthTask';

function MonthTask(props) {

  const dispatch = useDispatch()
  // const FilteredT = useSelector((store)=>store.filteredP)
  const Tasks = useSelector((store)=>store.taskP)
  const [filter, setFilter]= useState([])
  const {sLook}= useSelector((state)=>state.showLook);
  const {mtLook}= useSelector((state)=>state.showMonth);
  const [lookAt, setLookAt]= useState(sLook)
  const [PID, setPID]= useState()
  const [back, setBack]= useState()

  // method to filter the day of the month


  useEffect(()=>{
    const filterDay=()=>{
    const filteredList = Tasks.filter((tasks)=> (tasks.day === props.day)&&(tasks.month === props.tempM)&&(tasks.year === props.year))
    setFilter(filteredList);

  }

  filterDay()
  },[Tasks])

  // useEffect(()=>{
  //   setLookAt(sLook)
  // },[sLook])




  
  // console.log(mtLook)
  // console.log(filter)
  // console.log(filter[0].title)
 

  var backgroundColor;
  return (
    <div className='mt-area'>
      {
        filter.map((tasks, index)=>(
          backgroundColor={
            backgroundColor: tasks.color,
          },
           <div className='month-task' key={index} style={backgroundColor}
            onClick={()=> {
              dispatch(isLooking())
              setLookAt(true)
              } }>
              
              <p>{tasks.title.substring(0,11)}...</p>
          </div>
        ))
      }


      {
        ((sLook && lookAt) && lookAt) &&
        
        <MonthTaskLook filter={filter} />
        
       
      }
     
    </div>
    
  )
}

export default MonthTask