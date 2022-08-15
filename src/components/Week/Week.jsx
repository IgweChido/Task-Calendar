import React from 'react'
import '../../styles/WEEK/Week.scss'
import WeekBody from './WeekBody'
import WeekHead from './WeekHead'

function Week() {
  return (
    <div className='week'>

        <WeekHead/>
        <WeekBody/>

    </div>
  )
}

export default Week