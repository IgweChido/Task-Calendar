import React from 'react'
import '../../styles/WEEK/Week.scss'
import DayBody from './DayBody'
import DayHead from './DayHead'

function Day() {
  return (
    <div className='week'>
        <DayHead/>
        <DayBody/>
   
      
  </div>
  )
}

export default Day