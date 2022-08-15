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
import { addWeekTimeline } from './Reducers/WeekTimeline'

function WTimeline() {

    
    var d = new Date();
    const  dispatch = useDispatch()
    const weekT = useSelector((store)=>store.weekTimeline)
    const [stopBShift, setStopBshift]= useState(false)
    const {navSlice}= useSelector((state)=>state.navigateSlice);
    const[start, setStart]= useState();
    const[end, setEnd]= useState();
    const [checkArr, setCheckArr]= useState([])


   
    


    const [openT, setOpenT] = useState(false);
    const {showTask}= useSelector((state)=>state.showCTask);
    const [day, setDay] = useState(false)
    const [week, setWeek] = useState(true)
    const [month, setMonth] = useState(false)
    const[tempMonth, setTempMonth] = useState(d.getMonth())
    const[tempYear, setTempYear] = useState(d.getFullYear())
    const[tempDate, setTempDate] = useState(d.getDate())
    const[tempDay, setTempDay] = useState(d.getDay())

    const [monthDays, setMonthDays]= useState([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31])
    if(tempYear%4===0 ){
        monthDays[1]=29
        // console.log(monthDays)
    }
    // console.log(monthDays)



    const [monthInYear, setMonthInYear]= useState(['January', 'February','March', 'April','May', 'June','July',
  'August', 'September', 'October', 'November', 'December'])
  const [dayInWeek, setDayInWeek]= useState(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])


  const openTimeline=()=>{
    if(!openT){
         setOpenT(true)
        
    }else{
        setOpenT(false)
        
    }
   

}


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



// Weekly calculation for timeline


 const weekCalcArr=[]

 useEffect(()=>{
    const WeekCalc=()=>{

        // beginning of a week (Monday)
        if(tempDay === 1){

            // get the date
            weekCalcArr[0]= d.getDate();
            checkArr[0]= d.getDate();
            // add 6 and loop through the numbers to get full week
            for(var i=1; i<7; i++){
                weekCalcArr[i]= weekCalcArr[0]+ i;
                checkArr[i]= weekCalcArr[0]+ i;
            }

            // console.log(weekCalcArr)
            setStart(weekCalcArr[0])
            setEnd(weekCalcArr[6])

        }

         // beginning of a week (Tuesday)
         if(tempDay === 2){

            // get the date
            weekCalcArr[0]= d.getDate()-1;
            checkArr[0]= d.getDate()-1;
            // add 6 and loop through the numbers to get full week
            for( i=1; i<7; i++){
                weekCalcArr[i]= weekCalcArr[0]+ i;
                checkArr[i]= weekCalcArr[0]+ i;
            }

            // console.log(weekCalcArr)
            setStart(weekCalcArr[0])
            setEnd(weekCalcArr[6])

        }
         // beginning of a week (Wednesday)
         if(tempDay === 3){

            // get the date
            weekCalcArr[0]= d.getDate()-2;
            checkArr[0]= d.getDate()-2;
            // add 6 and loop through the numbers to get full week
            for( i=1; i<7; i++){
                weekCalcArr[i]= weekCalcArr[0]+ i;
                checkArr[i]= weekCalcArr[0]+ i;
            }

            // console.log(weekCalcArr)
            setStart(weekCalcArr[0])
            setEnd(weekCalcArr[6])

        }
         // beginning of a week (thursday)
         if(tempDay === 4){

            // get the date
            weekCalcArr[0]= d.getDate()-3;
            checkArr[0]= d.getDate()-3;
            // add 6 and loop through the numbers to get full week
            for( i=1; i<7; i++){
                weekCalcArr[i]= weekCalcArr[0]+ i;
                checkArr[i]= weekCalcArr[0]+ i;
            }

            // console.log(weekCalcArr)
            setStart(weekCalcArr[0])
            setEnd(weekCalcArr[6])

        }
         // beginning of a week (Friday)
         if(tempDay === 5){

            // get the date
            weekCalcArr[0]= d.getDate()-4;
            checkArr[0]= d.getDate()-4;
            // add 6 and loop through the numbers to get full week
            for( i=1; i<7; i++){
                weekCalcArr[i]= weekCalcArr[0]+ i;
                checkArr[i]= weekCalcArr[0]+ i;
            }

            // console.log(weekCalcArr)
            setStart(weekCalcArr[0])
            setEnd(weekCalcArr[6])

        }
         // beginning of a week (Saturday)
         if(tempDay === 6){

            // get the date
            weekCalcArr[0]= d.getDate()-5;
            checkArr[0]= d.getDate()-5;
            // add 6 and loop through the numbers to get full week
            for( i=1; i<7; i++){
                weekCalcArr[i]= weekCalcArr[0]+ i;
                checkArr[i]= weekCalcArr[0]+ i;
            }

            // console.log(weekCalcArr)
            setStart(weekCalcArr[0])
            setEnd(weekCalcArr[6])

        }
         // beginning of a week (Sunday)
         if(tempDay === 0){

            // get the date
            weekCalcArr[0]= d.getDate()-6;
            checkArr[0]= d.getDate()-6;
            // add 6 and loop through the numbers to get full week
            for( i=1; i<7; i++){
                weekCalcArr[i]= weekCalcArr[0]+ i;
                checkArr[i]= weekCalcArr[0]+ i;
            }

            // console.log(weekCalcArr)
            setStart(weekCalcArr[0])
            setEnd(weekCalcArr[6])

        }




        dispatch(addWeekTimeline(
            {
               month: monthInYear[tempMonth],
               year: tempYear,

             arr:[
              checkArr[0],
              checkArr[1],
              checkArr[2],
              checkArr[3],
              checkArr[4],
              checkArr[5],
              checkArr[6],
             ]
              }
           
         ))
    }

    WeekCalc()
 },[])






 const weekCalcAdd=[]

 // Weekly backward movement
 const subWeek=(date)=>{
    if(date+1=== checkArr[0] && tempMonth===d.getMonth()&& tempYear===d.getFullYear()){
        setStopBshift(false)

         //  Add Array to the weekTime Reducer

         dispatch(addWeekTimeline(
            { 
            month: monthInYear[tempMonth],
            year: tempYear,
            arr:[
                checkArr[0],
                checkArr[1],
                checkArr[2],
                checkArr[3],
                checkArr[4],
                checkArr[5],
                checkArr[6],
               ]
            
        }
        ))

    }

    else{


        if(date - 6 < 1 && tempMonth===0){

          
          
    
            const newFlow = monthDays[11]+(date-6);
            const newLen = monthDays[11] - newFlow;
        // const sEnd= date + 6;
    
        weekCalcAdd[0]= newFlow;
    
         // add 6 and loop through the numbers to get full week
         if(newLen>0){
             for( var i=1; i<newLen+1; i++){
            weekCalcAdd[i]= weekCalcAdd[0]+ i;
        }
         }
       
    
        // update new month
        const newMFlow = date;
        weekCalcAdd[newLen+1] = 1;
        var counter=1;
        for(var j=newLen+2; j<(newLen+newMFlow+1); j++){
            
            weekCalcAdd[j]= weekCalcAdd[newLen+1]+ counter;
            counter ++;
        }
    
        setStart(weekCalcAdd[0])
        setEnd(weekCalcAdd[6])
        
        
        // console.log('else if year ' + weekCalcAdd)

        //   Add Array to the weekTime Reducer

         dispatch(addWeekTimeline(
            { 
            monthPrev: monthInYear[11],
            monthNext: monthInYear[tempMonth],
            yearPrev: tempYear-1,
            yearNext: tempYear,
            arr:[
                weekCalcAdd[0],
                weekCalcAdd[1],
                weekCalcAdd[2],
                weekCalcAdd[3],
                weekCalcAdd[4],
                weekCalcAdd[5],
                weekCalcAdd[6],
               ]
        }
        ))



    
     }
    
    
     
    
     else if(date - 6 < 1){
    
        
        console.log('array length '+ monthArr.length)
        console.log('month'+ monthInYear[tempMonth])
       
        const newFlow = monthDays[tempMonth-1]+(date-6);
        const newLen = monthDays[tempMonth-1] - newFlow;
        
    
        weekCalcAdd[0]= newFlow;
    
         // add 6 and loop through the numbers to get full week
         if(newLen>0){
             for( i=1; i<newLen+1; i++){
            weekCalcAdd[i]= weekCalcAdd[0]+ i;
    
             }
         }
       
    
        // update new month
        const newMFlow = date;
        weekCalcAdd[newLen+1] = 1;
         counter=1;
        for( j=newLen+2; j<(newLen+newMFlow+1); j++){
            
            weekCalcAdd[j]= weekCalcAdd[newLen+1]+ counter;
            counter ++;
        }
    
        setStart(weekCalcAdd[0])
        setEnd(weekCalcAdd[6])
        
        // console.log('else if month ' + weekCalcAdd)


         //  Add Array to the weekTime Reducer

         dispatch(addWeekTimeline(
            { 
            monthPrev: monthInYear[tempMonth-1],
            monthNext: monthInYear[tempMonth],
            year: tempYear,
            arr:[
                weekCalcAdd[0],
                weekCalcAdd[1],
                weekCalcAdd[2],
                weekCalcAdd[3],
                weekCalcAdd[4],
                weekCalcAdd[5],
                weekCalcAdd[6],
               ]
        }
        ))

        
    
     }
    
    
     else{
    
        if(date + 7 > monthArr.length){
    
            weekCalcAdd[6]= date
      
            // add 6 and loop through the numbers to get full week
            var k=1;
            for( i=6; i>0; i--){
               weekCalcAdd[i-1]= weekCalcAdd[6]- k;
               k++;
           }
           setStart(weekCalcAdd[0])
           setEnd(weekCalcAdd[6])
           if(tempMonth===0){
            setTempMonth(11)
            setTempYear(tempYear-1)
           }
           else{
             setTempMonth(tempMonth-1)
           }
          
    
        //    console.log('else1 ' + weekCalcAdd)

            //  Add Array to the weekTime Reducer

            dispatch(addWeekTimeline(
                { 
                month: monthInYear[tempMonth-1],
                year: tempYear,
                arr:[
                    weekCalcAdd[0],
                    weekCalcAdd[1],
                    weekCalcAdd[2],
                    weekCalcAdd[3],
                    weekCalcAdd[4],
                    weekCalcAdd[5],
                    weekCalcAdd[6],
                   ]
            }
            ))
    

    
        }

        
        else{
             weekCalcAdd[6]= date
      
            // add 6 and loop through the numbers to get full week
             k=1;
            for( i=6; i>0; i--){
                weekCalcAdd[i-1]= weekCalcAdd[6]- k;
                k++;
            }
            setStart(weekCalcAdd[0])
            setEnd(weekCalcAdd[6])
    
            // console.log('else2 ' + weekCalcAdd)


            //  Add Array to the weekTime Reducer

            dispatch(addWeekTimeline(
                { 
                month: monthInYear[tempMonth],
                year: tempYear,
                arr:[
                    weekCalcAdd[0],
                    weekCalcAdd[1],
                    weekCalcAdd[2],
                    weekCalcAdd[3],
                    weekCalcAdd[4],
                    weekCalcAdd[5],
                    weekCalcAdd[6],
                   ]
            }
            ))
    
      
        }
       
    
      
     }


    

    }


    
  
  


 }
 
  



var count = 1;

const subWeekOnclick=()=>{
   
    
 if(start === 1 && tempMonth=== 0){
  setTempYear(tempYear-1)
  setTempMonth(11)
  subWeek(monthArr.length)
}

else if(start === 1){
setTempMonth(tempMonth-1)
subWeek(monthArr.length)

}


else{

     subWeek(start-1)


}






}




// Weekly forward movement

const addWeek=(date)=>{

    setStopBshift(true)
   
     //when button is pressed repeat the last loop but let the last elemnt
        // become the first

        if(date + 6 > monthArr.length && tempMonth===11){
            const newFlow = date;
            const newLen = monthArr.length- newFlow;
            const sEnd= date + 6;

            weekCalcAdd[0]= newFlow;

             // add 6 and loop through the numbers to get full week
            for( var i=1; i<newLen+1; i++){
                weekCalcAdd[i]= weekCalcAdd[0]+ i;
            }

            // update new month
            const newMFlow = sEnd - monthArr.length;
            weekCalcAdd[newLen+1] = 1;
            var counter=1;
            for(var j=newLen+2; j<(newLen+newMFlow+1); j++){
                
                weekCalcAdd[j]= weekCalcAdd[newLen+1]+ counter;
                counter ++;
            }
            setTempYear(tempYear+1)
            setTempMonth(0)
            setStart(weekCalcAdd[0])
            setEnd(weekCalcAdd[6])

             //  Add Array to the weekTime Reducer

             dispatch(addWeekTimeline(
                { 
                monthPrev: monthInYear[tempMonth],
                monthNext: monthInYear[0],
                yearPrev: tempYear,
                yearNext: tempYear+1,
                arr:[
                    weekCalcAdd[0],
                    weekCalcAdd[1],
                    weekCalcAdd[2],
                    weekCalcAdd[3],
                    weekCalcAdd[4],
                    weekCalcAdd[5],
                    weekCalcAdd[6],
                   ]
            }
            ))
    

        }




        else if(date + 6 > monthArr.length){
            
            const newFlow = date;
            const newLen = monthArr.length- newFlow;
            const sEnd= date + 6;

            weekCalcAdd[0]= newFlow;

             // add 6 and loop through the numbers to get full week
            for( i=1; i<newLen+1; i++){
                weekCalcAdd[i]= weekCalcAdd[0]+ i;
            }

            // update new month
            const newMFlow = sEnd - monthArr.length;
            weekCalcAdd[newLen+1] = 1;
             counter=1;
            for( j=newLen+2; j<(newLen+newMFlow+1); j++){
                
                weekCalcAdd[j]= weekCalcAdd[newLen+1]+ counter;
                counter ++;
            }
            setTempMonth(tempMonth+1)
            setStart(weekCalcAdd[0])
            setEnd(weekCalcAdd[6])

             //  Add Array to the weekTime Reducer

             dispatch(addWeekTimeline(
                { 
                monthPrev: monthInYear[tempMonth],
                monthNext: monthInYear[tempMonth+1],
                year: tempYear,
                arr:[
                    weekCalcAdd[0],
                    weekCalcAdd[1],
                    weekCalcAdd[2],
                    weekCalcAdd[3],
                    weekCalcAdd[4],
                    weekCalcAdd[5],
                    weekCalcAdd[6],
                   ]
            }
            ))
    
            
        }


        else{
            weekCalcAdd[0]= date
          
           // add 6 and loop through the numbers to get full week
           for( i=1; i<7; i++){
              weekCalcAdd[i]= weekCalcAdd[0]+ i;
          }
          setStart(weekCalcAdd[0])
          setEnd(weekCalcAdd[6])

           //  Add Array to the weekTime Reducer

           dispatch(addWeekTimeline(
            { 
            month: monthInYear[tempMonth],
            year: tempYear,
            arr:[
                weekCalcAdd[0],
                weekCalcAdd[1],
                weekCalcAdd[2],
                weekCalcAdd[3],
                weekCalcAdd[4],
                weekCalcAdd[5],
                weekCalcAdd[6],
               ]
        }
        ))

         }
        
  
        //   console.log(weekCalcAdd)

         
      
          
  }
  
  
  var count = 1;
  const addWeekOnclick=()=>{
      if(end === monthArr.length && tempMonth=== 11){
          setTempYear(tempYear+1)
          setTempMonth(0)
          addWeek(1)

          dispatch(addWeekTimeline(
            { 
           
            month: monthInYear[tempMonth+1],
            year: tempYear,
            arr:[
                weekCalcAdd[0],
                weekCalcAdd[1],
                weekCalcAdd[2],
                weekCalcAdd[3],
                weekCalcAdd[4],
                weekCalcAdd[5],
                weekCalcAdd[6],
               ]
        }
        ))
      }
  
      else if(end === monthArr.length){
      setTempMonth(tempMonth+1)
     
          addWeek(1)

          dispatch(addWeekTimeline(
            { 
           
            month: monthInYear[tempMonth+1],
            year: tempYear,
            arr:[
                weekCalcAdd[0],
                weekCalcAdd[1],
                weekCalcAdd[2],
                weekCalcAdd[3],
                weekCalcAdd[4],
                weekCalcAdd[5],
                weekCalcAdd[6],
               ]
        }
        ))
     }
  
     else{
       addWeek(end+count)
     }
  
     
     
   
     
  
  }

// console.log(start)
// console.log(end)

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


                <p>Week</p>

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
                   
                    // window.location.reload()
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
                <p>{start} - {end} {monthInYear[tempMonth]}, {tempYear}</p>
                
            </div>

            {/* div 2 */}
            <div className='TL3-div2'>
               {/* arrow left */}
               {
               stopBShift ?
                <div className='TL-arrow1' onClick={subWeekOnclick}>
                    <img src={left} alt=''></img>
                </div>

               :
                <div className='TL-arrow1 disabled' >
                    <img src={left} alt=''></img>
                </div>
               }

                {/* arrow right */}
                <div className='TL-arrow2' onClick={addWeekOnclick}>
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

export default WTimeline