import React from 'react'
import TaskContainer from '../TaskContainer'
import WeekTimeBox from './WeekTimeBox'

function WeekTime(props) {
  return (
    <div className='week-time'>

        <div className='w-time'>
            {/* time */}
            <p className='wt-p'>{props.timme}</p>

            <WeekTimeBox/>
   
            
            <WeekTimeBox/>
            <WeekTimeBox/>
            <WeekTimeBox/>
            <WeekTimeBox/>
            <WeekTimeBox/>


        </div>
        

    </div>
  )
}

export default WeekTime