import React, { useState } from 'react'
import '../../styles/Month/MonthTime.scss'
import MonthTask from './MonthTask'
import { useDispatch, useSelector } from 'react-redux';

function MonthTimeBox(props) {

  const Tasks = useSelector((store)=>store.taskP)
  const [putTask, setPutTask] = useState(true)
  const[tempYear, setTempYear] = useState(props.year)

  
  return (
    <div className='montht-box'>

        {/* month number */}
        <div className='m-number'>
            <p>{props.day}</p>
        </div>


        {/* task area */}

      
          {Tasks &&
            <MonthTask day={props.day} tempM={props.tempM} key={props.kay} year={tempYear}/>}
      
        
                

         
        

    </div>
  )
}

export default MonthTimeBox