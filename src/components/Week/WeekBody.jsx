import React, { useState } from 'react'
import '../../styles/WEEK/WeekBody.scss'
import WeekTime from './WeekTime'
import { useDispatch, useSelector } from 'react-redux';
import TaskContainer from '../TaskContainer';

function WeekBody() {

  const [P, setP] = useState(true);
  const Tasks = useSelector((store)=>store.taskP)

  const timeArr = ['00:00 AM','01:00 AM','02:00 AM','03:00 AM','04:00 AM',
  '05:00 AM','06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM',
  '12:00 PM','13:00 PM','14:00 PM','15:00 PM','16:00 PM','17:00 PM','18:00 PM',
  '19:00 PM','20:00 PM','21:00 PM','22:00 PM','23:00 PM', '24:00 PM']


  return (
    <div className='week-body1'>

        {/* scroll area for time */}

        <div className='week-scroll'>

          {Tasks &&
              <TaskContainer/>
           }
          { timeArr.map((time, index)=>(

             <WeekTime timme={timeArr[index]} key={index}/>
          ))
            
          }
          
            
            



        </div>

    </div>
  )
}

export default WeekBody