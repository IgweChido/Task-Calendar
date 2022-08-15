import React from 'react'
import '../../styles/Month/MonthTime.scss'
import MonthTask from './MonthTask'

function MonthTimeBox1(props) {
  return (
    <div className='montht-box1'>

        {/* month number */}
        <div className='m-number1'>
            <p>{props.day}</p>
        </div>


        

    </div>
  )
}

export default MonthTimeBox1