import React, { useState } from 'react'
import '../../styles/Month/MonthTaskLook.scss'
import '../../styles/TaskView.scss'
import cancel from '../../icons/cancel.svg'
import { useDispatch, useSelector } from 'react-redux';
import { isLooking, isNotLooking } from '../Reducers/ShowTaskLook';
import TaskLookM from '../TaskLookM';
import { mtLooking, mtNotLooking } from '../Reducers/ShowMonthTask';


function MonthTaskLook(props) {
    var backgroundColor;
    const  dispatch = useDispatch()
    const {sLook}= useSelector((state)=>state.showLook);
    const {mtLook}= useSelector((state)=>state.showMonth);
   
    const [supLook, setSupLook] = useState(false)
    const [IND, setIND]= useState()
    const [tcolor, setTcolor]= useState()

    const closeTaskOverlay =()=>{
        dispatch(isNotLooking())
       
    }
  return (
    // overlay div
    <div className='mtaskview-overlay'>

        {/* white container div */}
        <div className='mtl-container'>
             {/* cancel sign */}
             <div className='mtl-cancel' onClick={closeTaskOverlay} >
                    <img src={cancel} alt=''></img>
            </div>

            {/* container scroll div */}
            <div className='mtl-s-container'>

                    {
           
                        props.filter.map((filt, index)=>(
                            backgroundColor={
                                backgroundColor: filt.color,
                                
                            },
                    // {/* filtered task map */}
                        <div className='mtl-main' key={index} style={backgroundColor} onClick={()=>{
                            dispatch(mtLooking())
                            setIND(index)
                            setTcolor(filt.color)
                        }}>

                            {/* name */}
                            <div className='mtl-name'>
                                <p>{filt.title}</p>
                            </div>

                            {/* date */}
                            <div className='mtl-date'>
                                <p>{filt.date}</p>
                            </div>
                        </div>
                        ))
                     }
            </div>
           

            {
                mtLook &&
                <TaskLookM filter={props.filter} index={IND} tcolor={tcolor}/>
            }
           
        </div>


        

    </div>
  )
}

export default MonthTaskLook