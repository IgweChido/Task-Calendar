import React from 'react'
import '../../styles/WEEK/WeekDay.scss'
import { useDispatch, useSelector } from 'react-redux';


function WeekDayColored(props) {
    const {weekT} = useSelector((state)=>state.weekTimeline)
    const {showTask}= useSelector((state)=>state.showCTask);
    // console.log(weekT.arr)


  return (
    <div className='before-purple1'>
        {/* Day div {purple area cylinder} */}
        <div className='day-div1'>
            {/* day */}
            <div className='day-day1'>
                <p>{props.day}</p>
            </div>

            {/* number */}
            <div className='day-number1'>
            {
                    weekT &&
                    <p>{weekT.arr[props.kay]}</p>
                }
            </div>

            {/* circle */}
            <div className='day-circle1'>

                {/* <div></div> */}
                

            </div>
        </div>
</div>
  )
}

export default WeekDayColored