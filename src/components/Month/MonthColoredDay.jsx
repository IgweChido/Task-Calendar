import React from 'react'
import '../../styles/WEEK/WeekDay.scss'

function MonthColoredDay(props) {
  return (
    <div className='before-purple1'>
        {/* Day div {purple area cylinder} */}
         <div className='day-div1'>
            {/* day */}
            <div className='day-day1'>
                <p>{props.day}</p>
            </div>

           

            {/* circle */}
            <div className='day-circle1'>

                {/* <div></div> */}
                

            </div>
        </div>
    </div>
  )
}

export default MonthColoredDay