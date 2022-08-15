import React, { useEffect , useState} from 'react'
import '../../styles/WEEK/WeekDay.scss'
import { useDispatch, useSelector } from 'react-redux';
import { weekBoolean } from '../Reducers/WeekTimeline';


function WeekDay(props) {

    
    const dispatch = useDispatch()
    const {weekT} = useSelector((state)=>state.weekTimeline)
    const {weekB} = useSelector((state)=>state.weekTimeline)
    const {showTask}= useSelector((state)=>state.showCTask);
    const Tasks = useSelector((store)=>store.taskP)
    const [filter, setFilter]= useState([])
    // console.log(weekT.arr)
    useEffect(()=>{
        
        const filterDay=()=>{
        const filteredList = Tasks.filter((tasks)=> (tasks.day === weekT.arr[props.kay])&&(tasks.month === weekT.month)&&(tasks.year === weekT.year))
        setFilter(filteredList);
  
       
      
      }

      
  
      
    
      filterDay()
     
      },[weekT, Tasks])
      
      console.log(filter)
  return (
    
    <div className='before-purple'>
        {/* Day div {purple area cylinder} */}
         <div className='day-div'>
            {/* day */}
            <div className='day-day'>
                <p>{props.day}</p>
            </div>

            {/* number */}
            <div className='day-number'>
                {
                    weekT &&
                    <p>{weekT.arr[props.kay]}</p>
                }
                
            </div>

            {/* circle */}
            <div className='day-circle'>
                {
                    weekB && 
                    <div></div>
                }
               
                

            </div>
        </div>
    </div>
   
  )
}

export default WeekDay