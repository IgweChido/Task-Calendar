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

function Timeline() {

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
    const[tempMonth, setTempMonth] = useState(7)
    const[tempYear, setTempYear] = useState(d.getFullYear())
    const[tempDate, setTempDate] = useState(d.getDate())
    const[tempDay, setTempDay] = useState(d.getDay())
    const [monthInYear, setMonthInYear]= useState(['January', 'February','March', 'April','May', 'June','July',
  'August', 'September', 'October', 'November', 'December'])
  const [dayInWeek, setDayInWeek]= useState(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])
    
  useEffect(()=>{
      dispatch(addDayTimeline({
        day:dayInWeek[tempDay],
        date:tempDate,
        month: monthInYear[tempMonth],
        year: tempYear

    }))
  },[])


    const openTimeline=()=>{
        if(!openT){
             setOpenT(true)
            
        }else{
            setOpenT(false)
            
        }
       

    }

    // Navigation show of Day/Week/Month

    
  

   
   

    //********** loop to print out numbers **************//
    var monthArr =[]
    const printMonthDays=()=>{ 
        var start = 1;
        var i=1;
        monthArr[0] = start;
        var curr1;

          // if its sept, april, june, nov print 30
          if(tempMonth === 3 || tempMonth === 5 || tempMonth === 8|| tempMonth === 10 ){
                // loop to keep adding +1
               
                while( i < 30){
                    
                        curr1= monthArr[i-1]; //(2022)
                        monthArr[i] = curr1+1;
                        i++

                }

                // console.log(monthArr)
          }

        // if its feb print 28 0r 29,
        else if(tempMonth===1){

            //if year is divisible by 4 print 29
            if(tempYear % 4 === 0){
                 // loop to keep adding +1
                
                 while( i < 29){
                     
                         curr1= monthArr[i-1]; //(2022)
                         monthArr[i] = curr1+1;
                         i++
 
                 }
                //  console.log(monthArr)

            }
            // else print 28
            else{
                 // loop to keep adding +1
                
                 while( i < 28){
                     
                    curr1= monthArr[i-1]; //(2022)
                    monthArr[i] = curr1+1;
                    i++

            }
            // console.log(monthArr)
            }

        }
            
        // else print 31

        else{
               // loop to keep adding +1
                
               while( i < 31){
                     
                curr1= monthArr[i-1]; //(2022)
                monthArr[i] = curr1+1;
                i++

        }
        // console.log(monthArr)
        }

       

    }

   
        printMonthDays()

        // Shift days and month forwad
        const AddDays=()=>{
                
            setStopBshift(true)
                  if(tempDate===monthArr.length && tempMonth=== 11){
                    if(tempDay === dayInWeek.length-1){
                        
                        setTempYear(tempYear+1)
                        setTempMonth(0)
                        setTempDate(1)
                        setTempDay(0)
                        
                        dispatch(addDayTimeline({
                            day:dayInWeek[0],
                            date:1,
                            month: monthInYear[0],
                            year: tempYear+1
        
                        }))
                        // console.log('******* next year forward next week ********') 
                    }
                    else{
                       
                        setTempYear(tempYear+1)
                        setTempMonth(0)
                        setTempDate(1)
                        setTempDay(tempDay+1)
                        
                        dispatch(addDayTimeline({
                            day:dayInWeek[tempDay+1],
                            date:1,
                            month: monthInYear[0],
                            year: tempYear+1
        
                        }))
                        // console.log('******* next year forward normal ********')
                    }
                  
                   }
                   else if(tempDate===monthArr.length){
                  
                    setTempMonth(tempMonth+1)
                    setTempDate(1)
                    setTempDay(tempDay+1)
                    
                    dispatch(addDayTimeline({
                        day:dayInWeek[tempDay+1],
                        date:1,
                        month: monthInYear[tempMonth+1],
                        year: tempYear
                      
    
                    }))
                    // console.log('******* next month forward ********')
                   }

                   else if(tempDay === dayInWeek.length-1){
                    setTempDay(0)
                    setTempDate(tempDate+1)

                    dispatch(addDayTimeline({
                        day:dayInWeek[0],
                        date:tempDate+1,
                        month: monthInYear[tempMonth],
                        year: tempYear
                      
    
                    }))
                    // console.log('******* next week forward ********')
                   }

                   else{
                    setTempDate(tempDate+1)
                    setTempDay(tempDay+1)

                    dispatch(addDayTimeline({
                        day:dayInWeek[tempDay+1],
                        date:tempDate+1,
                        month: monthInYear[tempMonth],
                        year: tempYear
                      
    
                    }))

                    // console.log('******* normal forward ********')
                   }


                
        }


        var monthArr1 =[]
        const printMonthDays1=(tempM)=>{ 
            var start = 1;
            var i=1;
            monthArr1[0] = start;
            var curr1;
    
              // if its sept, april, june, nov print 30
              if(tempM === 3 || tempM === 5 || tempM === 8|| tempM === 10 ){
                    // loop to keep adding +1
                   
                    while( i < 30){
                        
                            curr1= monthArr1[i-1]; //(2022)
                            monthArr1[i] = curr1+1;
                            i++
    
                    }
    
                    // console.log(monthArr)
              }
    
            // if its feb print 28 0r 29,
            else if(tempM===1){
    
                //if year is divisible by 4 print 29
                if(tempYear % 4 === 0){
                     // loop to keep adding +1
                    
                     while( i < 29){
                         
                             curr1= monthArr1[i-1]; //(2022)
                             monthArr1[i] = curr1+1;
                             i++
     
                     }
                    //  console.log(monthArr)
    
                }
                // else print 28
                else{
                     // loop to keep adding +1
                    
                     while( i < 28){
                         
                        curr1= monthArr1[i-1]; //(2022)
                        monthArr1[i] = curr1+1;
                        i++
    
                }
                // console.log(monthArr)
                }
    
            }
                
            // else print 31
    
            else{
                   // loop to keep adding +1
                    
                   while( i < 31){
                         
                    curr1= monthArr1[i-1]; //(2022)
                    monthArr1[i] = curr1+1;
                    i++
    
            }
            // console.log(monthArr)
            }
    
           return monthArr1.length
    
        }
    
       
            

         // function to get the previous previous month during shift back
         const prevMonth=()=>{
            console.log(monthArr)
            console.log(tempMonth)
            setTempDate(printMonthDays1(tempMonth-1))
            console.log(printMonthDays1(tempMonth-1))
           
        }

       

        // shift days and month backwards
        const shiftBack=()=>{
           
            if(tempDate===d.getDate() && tempMonth === d.getMonth() && tempYear===d.getFullYear()){
                
                setTempYear(d.getFullYear())
                setTempMonth(d.getMonth())
                setTempDate(d.getDate())
                setTempDay(d.getDay())
                
               
                dispatch(addDayTimeline({
                    day:dayInWeek[tempDay],
                    date:tempDate,
                    month: monthInYear[tempMonth],
                    year: tempYear
    
                }))
               
                setStopBshift(false)  
                // console.log('*******  End of back ********')
            }
            

            else{
                if(tempDate===1 && tempMonth=== 0){
                    if(tempDay===0){
                        setTempYear(tempYear-1)
                        setTempMonth(11)
                        prevMonth()
                        setTempDay(6)
    
                        dispatch(addDayTimeline({
                            day:dayInWeek[6],
                            date:monthArr1.length,
                            month: monthInYear[11],
                            year: tempYear-1
            
                        }))
                        // console.log('*******  End of year and week ********')
                    }

                    else{
                        setTempYear(tempYear-1)
                        setTempMonth(11)
                        prevMonth()
                        setTempDay(tempDay-1)
    
                        dispatch(addDayTimeline({
                            day:dayInWeek[tempDay-1],
                            date:monthArr1.length,
                            month: monthInYear[11],
                            year: tempYear-1
            
                        }))
                        // console.log('*******  End of year and week ********')
                    }
                   
                   }


                   else if(tempDate===1){
                    console.log('first'+tempMonth)
                    prevMonth()
                    setTempMonth(tempMonth-1)
                    
                    setTempDay(tempDay-1)

                    dispatch(addDayTimeline({
                        day:dayInWeek[tempDay-1],
                        date:monthArr1.length,
                        month: monthInYear[tempMonth-1],
                        year: tempYear
        
                    }))
                    console.log('second'+tempMonth)
                    // console.log('*******  End of month ********')
    
                   }
    
                   else if(tempDay === 0){
                    setTempDay(6)
                    setTempDate(tempDate-1)

                    dispatch(addDayTimeline({
                        day:dayInWeek[6],
                        date:tempDate-1,
                        month: monthInYear[tempMonth],
                        year: tempYear
        
                    }))
                    // console.log('*******  End of week ********')
                   }
                else{
                    setTempDate(tempDate-1)
                    setTempDay(tempDay-1)

                    dispatch(addDayTimeline({
                        day:dayInWeek[tempDay-1],
                        date:tempDate-1,
                        month: monthInYear[tempMonth],
                        year: tempYear
        
                    }))
                    // console.log('*******  normal back ********')
                }

               
            }

            
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


                <p>Day</p>

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
                  
                    // window.location.reload()
                    
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
                    
                }}>Month</Link>
            </div>
         </div>

          {/* element 3 */}
        <div className='TL3'>

            {/* div 1 */}
            <div className='TL3-div1'>
                <p>{dayInWeek[tempDay]} {tempDate} {monthInYear[tempMonth]}, {tempYear}</p>
                
            </div>

            {/* div 2 */}
            <div className='TL3-div2'>
               {/* arrow left */}
               {
               stopBShift ?
                <div className='TL-arrow1' onClick={shiftBack}>
                    <img src={left} alt=''></img>
                </div>

               :
                <div className='TL-arrow1 disabled' >
                    <img src={left} alt=''></img>
                </div>
               }

                {/* arrow right */}
                <div className='TL-arrow2' onClick={
                AddDays    
                }>
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

export default Timeline