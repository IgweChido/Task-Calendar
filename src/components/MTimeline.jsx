import React, { useEffect, useState } from 'react'
import '../styles/Timeline.scss'
import left from '../icons/arrow-l.svg'
import right from '../icons/arrow-r.svg'
import down from '../icons/arrow-d.svg'
import calendar from '../icons/calendar.svg'
import { Link } from 'react-router-dom'
import TaskView from './TaskView'
import { useDispatch, useSelector } from 'react-redux';
import { isNotShowing, isShowing } from './Reducers/ShowCreateTask';
import TaskLook from './TaskLook'
import { addDayTimeline } from './Reducers/DayTimeline'
import { addNavigation } from './Reducers/NavigationSlice'
import { moveMonth } from './Reducers/MonthMoveSlice'

function MTimeline() {

    var d = new Date();
    const  dispatch = useDispatch()
    const dayT = useSelector((store)=>store.dayTimeline)
    const [stopBShift, setStopBshift]= useState(false)
    const {navSlice}= useSelector((state)=>state.navigateSlice);
    


    const [openT, setOpenT] = useState(false);
    const {showTask}= useSelector((state)=>state.showCTask);
    const [day, setDay] = useState(false)
    const [week, setWeek] = useState(true)
    const [month, setMonth] = useState(false)
    const[tempMonth, setTempMonth] = useState(d.getMonth())
    const[tempYear, setTempYear] = useState(d.getFullYear())
    const[tempDate, setTempDate] = useState(d.getDate())
    const[tempDay, setTempDay] = useState(d.getDay())
    const [monthInYear, setMonthInYear]= useState(['January', 'February','March', 'April','May', 'June','July',
  'August', 'September', 'October', 'November', 'December'])
  const [dayInWeek, setDayInWeek]= useState(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])
    

// useEffect(()=>{
//     dispatch(addNavigation('Month'))
// },[])

  const openTimeline=()=>{
    if(!openT){
         setOpenT(true)
        
    }else{
        setOpenT(false)
        
    }
}
    // function to move forward month
    const moveMonthForward=()=>{
        setStopBshift(true)
        if(tempMonth===11){
            setTempMonth(0)
            setTempYear(tempYear+1)
            dispatch(moveMonth({
                month:0,
                year: tempYear+1
            }))
        }
        else{
            setTempMonth(tempMonth+1)
            dispatch(moveMonth({
                month:tempMonth+1,
                year: tempYear
            }))
        }
        
    }
// move forward onclick
    const moveForward=()=>{
       
        moveMonthForward()
    }
    
    // function to move back month
    const moveMonthBackward=()=>{
        if(tempMonth=== d.getMonth()&& tempYear=== d.getFullYear()){
            setStopBshift(false)
        }

        else{
            
             if(tempMonth===0){
            setTempMonth(11)
            setTempYear(tempYear-1)
            dispatch(moveMonth({
                month:11,
                year: tempYear-1
            }))
        }
        else{
            setTempMonth(tempMonth-1)
            dispatch(moveMonth({
                month:tempMonth-1,
                year: tempYear
            }))
        }
        }
       
        
    }
// move Backward onclick
    const moveBackward=()=>{
        dispatch(moveMonth('backward'))
        moveMonthBackward()
    }

    

   


return (
    <div className='TL-head'>
        {/* element 1 */}
        <div className='TL1'>
            <p>Timeline</p>
        </div>

         {/* element 2 */}
         <div className='TL2'>
            {/* open div */}
            <div className='open-div'>
                 {/* arrow down */}
                 <div className='calendar'>
                    <img src={calendar} alt=''></img>
                </div>


                <p>Month</p>

                {/* arrow down */}
                <div className={openT ?'arrow-d1' : 'arrow-d'} onClick={openTimeline}>
                    <img src={down} alt=''></img>
                </div>
            </div>

            {/* hidden div */}
            <div className={openT ? `hidden-div active` : `hidden-div`}>
                <Link to='/day'onClick={()=>{
                    setDay(true)
                    setWeek(false)
                    setMonth(false)
                   
                    
                }}>Day</Link>

                <Link to='/'onClick={()=>{
                    setDay(false)
                    setWeek(true)
                    setMonth(false)
                   
                }}>Week</Link>

                <Link to='/month' onClick={()=>{
                    setDay(false)
                    setWeek(false)
                    setMonth(true)
                   
                    // window.location.reload()
                }}>Month</Link>
            </div>
         </div>

          {/* element 3 */}
        <div className='TL3'>

            {/* div 1 */}
            <div className='TL3-div1'>
                <p> {monthInYear[tempMonth]}, {tempYear}</p>
                
            </div>

            {/* div 2 */}
            <div className='TL3-div2'>
               {/* arrow left */}
               {
               stopBShift ?
                <div className='TL-arrow1' onClick={moveBackward}>
                    <img src={left} alt=''></img>
                </div>

               :
                <div className='TL-arrow1 disabled' >
                    <img src={left} alt=''></img>
                </div>
               }

                {/* arrow right */}
                <div className='TL-arrow2' onClick={moveForward}>
                <img src={right} alt=''></img>
               </div>
                
            </div>
        </div>



        {/* task view overlay */}
        {showTask &&
            <TaskView/>
            // <TaskLook/>
        }
        
    </div>
  )
}

export default MTimeline