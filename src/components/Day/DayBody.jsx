import React from 'react'
import '../../styles/WEEK/WeekBody.scss'
import DayTime from './DayTime'
import DayTask from './DayTask'
import { useDispatch, useSelector } from 'react-redux';

function DayBody() {
    var para ;
    var checkT;
    var checkTT;
    const checkTArr=[]
    const {dTimeline}= useSelector((state)=>state.dayTimeline);
    const Tasks = useSelector((store)=>store.taskP)
    console.log(Tasks)

    const timeArr = ['00:00 AM','01:00 AM','02:00 AM','03:00 AM','04:00 AM',
    '05:00 AM','06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM',
    '12:00 PM','13:00 PM','14:00 PM','15:00 PM','16:00 PM','17:00 PM','18:00 PM',
    '19:00 PM','20:00 PM','21:00 PM','22:00 PM','23:00 PM', '24:00 PM']

  return (
    <div className='week-body'>

        {/* scroll area for time */}

        <div className='week-scroll'>

        { Tasks  &&

          // dTimeline.date === Tasks.day && dTimeline.month === Tasks.month && dTimeline.year === Tasks.year &&
             
             <DayTask />
        
         
           }
          {timeArr.map((tim, index)=>(
          
           
               <DayTime timme={timeArr[index]} key={index}/>
          ))} 
        </div>
    </div>
  )
}

export default DayBody