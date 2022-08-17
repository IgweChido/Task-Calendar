import React, { useEffect, useState } from 'react'
import '../../styles/Day/DayTask.scss'
import { useDispatch, useSelector } from 'react-redux';
import TaskLook from '../TaskLook';
import { isLooking } from '../Reducers/ShowTaskLook';
import { NumTaskR } from '../Reducers/NumberOfTaskSlice';


function DayTask(props) {

  const dispatch = useDispatch()
  
  const {sLook}= useSelector((state)=>state.showLook);
  const [PID, setPID]= useState()
  const [back, setBack]= useState()
  const [filter, setFilter]= useState([])
  const Tasks = useSelector((store)=>store.taskP)
  const {NumTask}= useSelector((state)=>state.numTaskReducer);
  const {dTimeline}= useSelector((state)=>state.dayTimeline);
 
  // console.log(dTimeline)

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

        // console.log(manipulateTimeArr)
    }

    createArrMulTwelve()


  // create a style that gives a margin top
  var marginTop;
  const localData = localStorage.getItem('tasks');
  const localMain= JSON.parse(localData)
  useEffect(()=>{
    const filterDay=()=>{
      if(localMain){
        const filteredList = localMain.filter((tasks)=> (tasks.day === dTimeline.date)&&(tasks.month === dTimeline.month)&&(tasks.year === dTimeline.year))
        setFilter(filteredList);
      }
        
   

  }

  filterDay()
 
  },[dTimeline, Tasks])

  useEffect(()=>{
     dispatch(NumTaskR(filter.length))
  },[filter.length])
 
   

  return (

    <div className='dt-main'>
      {filter.map((tasks, index)=>(
        marginTop={
          backgroundColor: tasks.color,
          marginTop: `${8.333 * manipulateTimeArr[tasks.time]}px`
        },
        
           <div className='dtask-container' style={marginTop} key={index} onClick={()=>
           {
            
            dispatch(isLooking())
            setPID(index)
            setBack(tasks.color)
            console.log(PID)
          }
           }>

           {/* Topic */}
           <div className='dtask-topic'>
               <p>{tasks.title}</p>
           </div>
           {/* Time */}
           <div className='dtask-time'>
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

export default DayTask