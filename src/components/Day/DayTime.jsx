import React from 'react'
import FiveMins from '../Week/FiveMins'
import '../../styles/Day/DayBody.scss'
import DayFive from './DayFive'
import DayTask from './DayTask'
import { useDispatch, useSelector } from 'react-redux';

function DayTime(props) {

  const Tasks = useSelector((store)=>store.taskP)


  

  
  return (
    <div className='day-time'>

        <div className='d-time'>
            
            {/* time */}
            <p className='dt-p'>{props.timme}</p>


            {/* put the day task in the right position */}
            {/* time evalution to height */}
              {/* Start time = margin top */}
              {/* Duration = height */}
              
       

              
                
                <div className='dt-five'>
                    <DayFive/>
                    
                    <DayFive/>

                    <DayFive/>
                    <DayFive/>
                    <DayFive/>
                    
                    <DayFive/>
                    <DayFive/>
                    <DayFive/>

                    <DayFive/>
                    <DayFive/>
                    <DayFive/>
                    
                </div>
               

        </div>
        

    </div>
  )
}

export default DayTime