import React, { useEffect, useState } from 'react'
import '../../styles/WEEK/WeekHead.scss'
import '../../styles/Day/DayHead.scss'
import { useDispatch, useSelector } from 'react-redux';

function DayHead() {
    var d = new Date();
    const dayT = useSelector((store)=>store.dayTimeline)
    const {NumTask}= useSelector((state)=>state.numTaskReducer);
    const {dTimeline}= useSelector((state)=>state.dayTimeline);
    const [monthInYear, setMonthInYear]= useState(['January', 'February','March', 'April','May', 'June','July',
    'August', 'September', 'October', 'November', 'December'])
    const [dayInWeek, setDayInWeek]= useState(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])
      
    // console.log(dTimeline)
  return (
    <div className='month-head'>
        {/* Day and date */}
        <div className='day-date'>
        {/* Day */}
            <div className='d-day'>
                <p>{dTimeline.day}</p>
            </div>

            {/* Date  */}
            {
                dTimeline.date=== d.getDate() && dTimeline.month === monthInYear[d.getMonth()]
                && dTimeline.year === d.getFullYear()
                ?
                <div className='d-date'>
                    <p>{dTimeline.date}</p>
                </div>
                :
                <div className='d-date11'>
                    <p>{dTimeline.date}</p>
                </div>
            }
            
        </div>


        {/* events */}
        <div className='d-events'>
            <p>{NumTask} {NumTask>1? 'Tasks': 'Task'}</p>

            {/* circle */}
            <div className='d-circle'>

            </div>
        </div>

    </div>
  )
}

export default DayHead