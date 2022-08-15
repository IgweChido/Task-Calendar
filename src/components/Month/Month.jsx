import React from 'react'
import '../../styles/WEEK/Week.scss'
import MonthBody from './MonthBody'
import MonthHead from './MonthHead'

function Month() {
  return (
    <div className='week'>
      <MonthHead/>
      <MonthBody/>
        
    </div>
  )
}

export default Month