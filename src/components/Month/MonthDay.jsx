import React from 'react'
import '../../styles/WEEK/WeekDay.scss'

function MonthDay(props) {
  return (
    <div className='before-purple'>
        {/* Day div {purple area cylinder} */}
         <div className='day-div'>
            {/* day */}
            <div className='day-day'>
                <p>{props.day}</p>
            </div>

           

            {/* circle */}
            <div className='day-circle'>

                {/* <div></div> */}
                

            </div>
        </div>
    </div>
  )
}

export default MonthDay