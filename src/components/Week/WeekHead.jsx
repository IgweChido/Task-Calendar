import React, { useEffect, useState } from 'react'
import '../../styles/WEEK/WeekHead.scss'
import WeekDay from './WeekDay'
import WeekDayColored from './WeekDayColored'
import { useDispatch, useSelector } from 'react-redux';
import { addWeekTimeline } from '../Reducers/WeekTimeline';


function WeekHead() {
  var d = new Date();
  
  const  dispatch = useDispatch()
  const {weekT }= useSelector((store)=>store.weekTimeline)
  const[tempMonth, setTempMonth] = useState(d.getMonth())
  const[tempYear, setTempYear] = useState(d.getFullYear())
  const[tempDate, setTempDate] = useState(d.getDate())
  const[tempDay, setTempDay] = useState(d.getDay())

  const [dayInWeek, setDayInWeek]= useState(["Mon","Tue","Wed","Thur","Fri","Sat","Sun"])
  const [monthInYear, setMonthInYear]= useState(['January', 'February','March', 'April','May', 'June','July',
  'August', 'September', 'October', 'November', 'December'])
  const[initialW, setInitialW]= useState([])  
  




console.log(weekT)








// if week.month === d.getMonth
//if weekT.year === d.getYear

const checker=()=>{

  if(weekT){

    if(weekT.month === monthInYear[d.getMonth()] && weekT.year=== d.getFullYear()){

      if(d.getDate()=== weekT.arr[0])
        return true

      else if(d.getDate()=== weekT.arr[1])
        return true

      else if(d.getDate()=== weekT.arr[2])
      return true

      else if(d.getDate()=== weekT.arr[3])
      return true

      else if(d.getDate()=== weekT.arr[4])
      return true

      else if(d.getDate()=== weekT.arr[5])
      return true

      else if(d.getDate()=== weekT.arr[6])
      return true

      else{
        return false
      }
        
    }
  }
}




  
  return (
    <div className='week-head'>


     { weekT &&
      dayInWeek.map((day, indx)=>(
        
        <div className='w-head-main'> 
          {
           
            tempDay===indx+1 && checker() ?
             
              <WeekDayColored day={dayInWeek[indx]} kay={indx} />
            :
              tempDay===0 && indx=== 6 && checker() ?
                <WeekDayColored day={dayInWeek[6]} kay={indx} />
              :
                <WeekDay day={dayInWeek[indx]} kay={indx} />

           
           
              
        }

        
        </div>
        
      ))
     }
       
        
       
       
      
    </div>
  )
}

export default WeekHead