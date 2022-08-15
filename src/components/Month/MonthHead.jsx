import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MonthColoredDay from './MonthColoredDay'
import MonthDay from './MonthDay'
import '../../styles/WEEK/WeekHead.scss'

function MonthHead() {

  var d = new Date();
  const  dispatch = useDispatch()
  const[tempMonth, setTempMonth] = useState(d.getMonth())
  const[tempYear, setTempYear] = useState(d.getFullYear())
  const[tempDate, setTempDate] = useState(d.getDate())
  const[tempDay, setTempDay] = useState(d.getDay())

  return (
    <div className='month-head'>
      <div className='m-head-main'>
        {tempDay===1 ?
        <MonthColoredDay day={'Mon'}/>
        :<MonthDay day={'Mon'}/>
        }
      </div>
        
        <div className='m-head-main'>
          { tempDay===2 ?
            <MonthColoredDay day={'Tue'}/>
            :<MonthDay day={'Tue'}/>
            }
        </div>

        <div className='m-head-main'>
          {tempDay===3 ?
                  <MonthColoredDay day={'Wed'}/>
                  :<MonthDay day={'Wed'}/>
                  }
        </div>
        

        <div className='m-head-main'>
          {tempDay===4 ?
                  <MonthColoredDay day={'Thur'}/>
                  :<MonthDay day={'Thur'}/>
                  }
        </div>

        

        <div className='m-head-main'>
        {tempDay===5 ?
                <MonthColoredDay day={'Fri'}/>
                :<MonthDay day={'Fri'}/>
                }
        </div>
        

        <div className='m-head-main'>
        {tempDay===6 ?
                <MonthColoredDay day={'Sat'}/>
                :<MonthDay day={'Sat'}/>
                }
        </div>
       

        <div className='m-head-main'>
        {tempDay===0 ?
                <MonthColoredDay day={'Sun'}/>
                :<MonthDay day={'Sun'}/>
                }
        </div>
        
       
    </div>
  )
}

export default MonthHead