import React, { useEffect, useRef, useState } from 'react'
import MonthTime from './MonthTime'
import { useDispatch, useSelector } from 'react-redux';

function MonthYearlyCount(props) {
    var d = new Date();
    const {monthMove}= useSelector((state)=>state.moveSlice);
    const [monthDays, setMonthDays]= useState([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31])
    const [tempYear, setTempYear]= useState(props.year)
    const year= props.year;
    const [monthInYear, setMonthInYear]= useState(['January', 'February','March', 'April','May', 'June','July',
    'August', 'September', 'October', 'November', 'December'])
  const bottomRefs = useRef([])

   
    useEffect(()=>{
      if(tempYear === d.getFullYear())
      bottomRefs.current[d.getMonth()].scrollIntoView({behavior: 'smooth'})
    },[])

    useEffect(()=>{
      if(monthMove){
        if(tempYear === monthMove.year)
          bottomRefs.current[monthMove.month].scrollIntoView({behavior: 'smooth'})
        
      }
      
    },[monthMove])
    
     
    

  return (
    <div>
     
        {
            monthDays.map((months, ids)=>(
              
            <div className='month-cont' key={ids}>
               <div ref={(element) => bottomRefs.current[ids] = element}/>
              <p className='month-name'>{monthInYear[ids]}({year})</p>
              <MonthTime kay={ids} tempM={monthInYear[ids]} key={ids} year={year} yearShift={props.yearShift}/>
              
            </div >
            
              
              
            ))
           
          }
    </div>
  )
}

export default MonthYearlyCount