import React, { useEffect, useState } from 'react'
import '../styles/TaskContainer.scss';
import { useDispatch, useSelector } from 'react-redux';
import TaskLook from './TaskLook';
import { isLooking } from './Reducers/ShowTaskLook';
import { weekBoolean } from './Reducers/WeekTimeline';


function TaskContainer() {

  const dispatch = useDispatch()
  const [filter, setFilter]= useState([])
  const {weekT }= useSelector((store)=>store.weekTimeline)
  const {weekB }= useSelector((store)=>store.weekTimeline)
  const Tasks = useSelector((store)=>store.taskP)
  const {sLook}= useSelector((state)=>state.showLook);
  const [PID, setPID]= useState()
  const [back, setBack]= useState()
  console.log(Tasks)
  const manipulateTimeArr=[]

  // creating an array of the multiple of twelve
  const createArrMulTwelve =()=>{

     
      var i;
      var j;
    //  manipulateTimeArr[0]= 12;
      for(i= 0; i<24; i++){
        j = i+1;

       
          manipulateTimeArr[i]= 12*j;
      }

      console.log(manipulateTimeArr)
  }

  createArrMulTwelve()


  // Contolling the movement of the task due to two constraints
    // 1. margin-top 
    // 2. left (absolute positioning)
    var controlMov;
    const weekArr=['597%','0','100%','200%','300%','400%','500%']


    useEffect(()=>{
      const checkWeek=(task)=>{
        if(weekT){
          for(var i=0; i<weekT.arr.length; i++){
            if(task === weekT.arr[i]){
              return true
            }
            
          }
        }
          
          return false
      }
      const filterDay=()=>{
      const filteredList = Tasks.filter((tasks)=> (checkWeek(tasks.day))&&((tasks.month === weekT.month)||(tasks.month === weekT.monthNext)||(tasks.month === weekT.monthPrev))&&(tasks.year === weekT.year))
      setFilter(filteredList);

     
     
    }

    
  
    filterDay()
   
    },[weekT, Tasks])

    console.log(weekT)
  

  return (
    <div className='week-task-main'>
      {
        filter.map((tasks, index)=>(
          controlMov={
            backgroundColor: tasks.color,
            marginTop: `${8.333 * manipulateTimeArr[tasks.time]}px`,
            left:`${weekArr[tasks.dayInWeek]}`
          },
          
           <div className='task-container' key={index} style={controlMov} onClick={()=>{
            dispatch(isLooking())
            setPID(index)
            setBack(tasks.color)
           }}>

              {/* Topic */}
              <div className='t-topic'>
                  <p>{tasks.title}</p>
              </div>
              {/* Time */}
              <div className='t-time'>
                  <p>{tasks.timeIS}</p>
              </div>

             </div>
        ))
      }


      {
        sLook &&
        <TaskLook tID={PID}  tcolor={back}/>
      }
      
    </div>
   
  )
}

export default TaskContainer