import React, { useEffect, useRef, useState } from 'react'
import '../../styles/WEEK/WeekBody.scss'
import '../../styles/Month/MonthTime.scss'
import MonthTimeBox from './MonthTimeBox'
import MonthTimeBox1 from './MonthTimeBox1'
import MonthTime from './MonthTime'
import { useDispatch, useSelector } from 'react-redux';
import MonthYearlyCount from './MonthYearlyCount'


function MonthBody() {
  var d = new Date();
  const {monthMove}= useSelector((state)=>state.moveSlice);
  const [monthStateArr, setMonthStateArr]= useState([])
  const [shiftContState, setShiftContState]= useState([])
  const [kays, setKays]= useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12])
  const [monthDays, setMonthDays]= useState([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31])
  const[tempMonth, setTempMonth] = useState('May')
  const[tempYear, setTempYear] = useState(d.getFullYear())
  const [monthInYear, setMonthInYear]= useState(['January', 'February','March', 'April','May', 'June','July',
  'August', 'September', 'October', 'November', 'December'])
  var yearCount = []


  
    // function to add current year to plus 1 10 times
  const CountTenYears=()=>{
    for(var i=0; i<4; i++){
        yearCount[i]= tempYear+i
    }

    console.log(yearCount)
  }

  CountTenYears()



  
  var shiftArray = [5,6,0,2,3,4,5,0,1,2,3]
  
  return (
    <div className='week-body2' >
       
        {/* scroll area for time */}

        <div className='week-scroll' >

          
            {
              yearCount &&
              yearCount.map((year, index)=>(
                <div key={index}>
                    <p className='year'>{yearCount[index]}</p>
                    <MonthYearlyCount year={tempYear+index} yearShift={shiftArray[index]} />
                </div>
                
              ))
             
            }
          

           
            
        </div>
    </div>
  )
}

export default MonthBody