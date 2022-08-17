import React, { useEffect, useState } from 'react'
import '../styles/TaskView.scss'
import arrowd from '../icons/arrow-d.svg'
import cancel from '../icons/cancel.svg'
import { useDispatch, useSelector } from 'react-redux';
import { isNotShowing, isShowing } from './Reducers/ShowCreateTask';
import { addTask } from './Reducers/TaskReducer';
import AddedTaskPromt from './AddedTaskPromt';
import { v4 as uuidv4 } from 'uuid';

function TaskView() {

    const  dispatch = useDispatch()
    const [filter, setFilter]= useState([])
    const Tasks = useSelector((store)=>store.taskP)
    const {showTask}= useSelector((state)=>state.showCTask);
    const[setp, setSetp]= useState(false);
    const[setp1, setSetp1]= useState(false);
    const[setp2, setSetp2]= useState(false);
    const[setp3, setSetp3]= useState(false);
    const[setp4, setSetp4]= useState(false);
    const[colorp, setColorp]= useState(false)
    const[colorp1, setColorp1]= useState(false)
    const[colorp2, setColorp2]= useState(false)

    // Tempoorary states
    var d = new Date();
       // ********* array for time ********* //
       const timeArr = ['00:00 AM','01:00 AM','02:00 AM','03:00 AM','04:00 AM',
       '05:00 AM','06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM',
       '12:00 PM','13:00 PM','14:00 PM','15:00 PM','16:00 PM','17:00 PM','18:00 PM',
       '19:00 PM','20:00 PM','21:00 PM','22:00 PM','23:00 PM']
   
       
    const monthArrWords=['January', 'February', 'March','April', 'May','June','July',
    'August','September','October','November', 'December']
    const [dayInWeek, setDayInWeek]= useState(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])
    
    const[tempMonth, setTempMonth] = useState(monthArrWords[d.getMonth()])
    const[numMonth, setNumMonth]= useState()
    const[tempYear, setTempYear] = useState(d.getFullYear())
    const[tempDay, setTempDay] = useState(d.getDate())
    const[tempTime, setTempTime] = useState(d.getUTCHours()+2)
    const[tempTime1, setTempTime1] = useState(timeArr[d.getUTCHours()+2])
    const [startt, setStartt]= useState()
    const [cantOpen, setCantOpen]= useState(false)
    const [clashing, setClashing]= useState(false)
   

    // Task states
    const[year, setYear] = useState('')
    const[month, setMonth] = useState('')
    const[day, setDay] = useState('')
    const[title, setTitle] = useState('')
    const[color , setColor]= useState('')
    const[note, setNote] = useState('')
    const [openAT, setOpenAT]= useState(false)

    const closeTaskOverlay =()=>{
        dispatch(isNotShowing())
        // console.log(showTask)
    }


    const closeTaskOverlay1 =()=>{
        setTimeout(()=>{
            dispatch(isNotShowing())
        },1500)
        
        // console.log(showTask)
    }
    


 

  

    

    //*************** print out years from 2022 ***************//
    var yearArr =[];


    const addYear=()=>{
        // loop to keep adding +1
        var cYear = 2022;
        var i=1;
        yearArr[0] = cYear;
        var curr;
       while( i < 10){
        
            curr= yearArr[i-1]; //(2022)
            yearArr[i] = curr+1;
            i++

       }

    //    console.log(yearArr)


    }

   
        addYear()

   
// useEffect to force re-render when task month is changed
useEffect(()=>{
    if(tempYear===d.getFullYear() && tempMonth=== monthArrWords[d.getMonth()]){
        setStartt(d.getDate());
        setTempDay(d.getDate())

        if(d.getUTCHours()=== 22){
            setTempTime(0)
            
            setTempTime1(timeArr[0])
            
        }
        else if(d.getUTCHours()=== 23){
            setTempTime(1)
            setTempTime1(timeArr[1])
        }

        else{
            setTempTime(d.getUTCHours()+2)
             setTempTime1(timeArr[d.getUTCHours()+2])
        }
       
        
    }
    else if(tempYear===d.getFullYear() && tempMonth!== monthArrWords[d.getMonth()]){
        setStartt(1);
        setTempDay(1)
        setTempTime(0)
        setTempTime1(timeArr[0])
       
           
       
    }
   

    else if(tempYear !== d.getFullYear() ){
        setStartt(1);
        setTempDay(1)
        setTempTime(0)
       
        setTempTime1(timeArr[0])
    }
    
    else{
        setStartt(1);
        setTempDay(1)
        setTempTime(0)
        setTempTime1(timeArr[0])
    }
},[tempYear,tempMonth])


// useEffect with only year dependency
useEffect(()=>{
     if(tempYear !== d.getFullYear() ){
        setTempMonth(monthArrWords[0])
    }
    
},[tempYear])




   

    //********** loop to print out numbers **************//
    var monthArr =[]
    const printMonthDays=()=>{ 

       
       var start= startt;
        
        monthArr[0] = start;
        var curr1;

          // if its sept, april, june, nov print 30
          if(tempMonth === 'April' || tempMonth === 'June' || tempMonth === 'September' || tempMonth === 'November' ){
                // loop to keep adding +1
               
                for(var i = 1; i< (31-start); i++){
                    
                        curr1= monthArr[i-1]; //(2022)
                        monthArr[i] = curr1+1;
                       

                }

                // console.log(monthArr)
          }

        // if its feb print 28 0r 29,
        else if(tempMonth==='February'){

            //if year is divisible by 4 print 29
            if(tempYear % 4 === 0){
                 // loop to keep adding +1
                
                 for( i = 1; i< (30-start); i++){
                     
                         curr1= monthArr[i-1]; //(2022)
                         monthArr[i] = curr1+1;
                        
 
                 }
                //  console.log(monthArr)

            }
            // else print 28
            else{
                 // loop to keep adding +1
                
                 for( i = 1; i< (29-start); i++){
                     
                    curr1= monthArr[i-1]; //(2022)
                    monthArr[i] = curr1+1;
                   

            }
            // console.log(monthArr)
            }

        }
            
        // else print 31

        else{
               // loop to keep adding +1
                
               for( i = 1; i< (32-start); i++){
                     
                curr1= monthArr[i-1]; //(2022)
                monthArr[i] = curr1+1;
               

        }
        // console.log(monthArr)
        }

    }

   
        printMonthDays()


// Function to show the current date and time
var currentMonthArr=[]
const currentDT=()=>{
    var start;
    if(tempYear===d.getFullYear()){
        // setTempMonth(monthArrWords[d.getMonth()])
       start = d.getMonth()

        currentMonthArr[0]= start;

        for(var i= 1; i< (12-start);i++){
            currentMonthArr[i]= currentMonthArr[0]+i

        }

       
    }

    else{
         start= 0

        currentMonthArr[0]= start;

        for( i= 1; i< (12-start);i++){
            currentMonthArr[i]= currentMonthArr[0]+i
        }

       
    }
}

currentDT()


useEffect(()=>{
    if(tempYear=== d.getFullYear()){
        setTempMonth(monthArrWords[d.getMonth()])
        // console.log(tempMonth)
    }
},[tempYear])




// open Added task successfully
const openAddedT=()=>{
    setOpenAT(true)
    closeTaskOverlay1()
    setTimeout(()=>{
        setOpenAT(false)
        
    },1500)

    
   
}

const cantopenAddedT=()=>{
    setCantOpen(true)
    closeTaskOverlay1()
    setTimeout(()=>{
        setCantOpen(false)
        
    },1500)

    
   
}

const Clashed=()=>{
    setClashing(true)
    closeTaskOverlay1()
    setTimeout(()=>{
        setClashing(false)
        
    },1500)

    
   
}


// set local storage to value of tasks
useEffect(()=>{
    
  localStorage.setItem('tasks', JSON.stringify(Tasks))
},[Tasks])
   
   


    // handel Task Submit
    
    const handleTaskSubmit=(e)=>{
        // filterDay()
        console.log(filter)
        const filteredList = Tasks.filter((tasks)=> (tasks.timeIS === tempTime1)&&(tasks.day=== tempDay)&&((tasks.month === tempMonth))&&(tasks.year === tempYear))
        e.preventDefault();
        const dd = new Date(`${tempMonth} ${tempDay} ${tempYear}`)
        let days = dd.getDay()


        if(tempYear===d.getFullYear() && tempMonth=== monthArrWords[d.getMonth()] && tempTime < (d.getUTCHours()+2) && tempDay === d.getDate()){
            cantopenAddedT()
        }

        else if(filteredList.length > 0){
            Clashed()
        }

        else{
              dispatch(addTask({

                id: uuidv4(),
                title: title,
                date:`${tempMonth} ${tempDay}, ${tempYear}`,
                dayInWeek: days,
                nuMonth: numMonth,
                month: tempMonth,
                day: tempDay,
                year: tempYear,
                time:tempTime,
                timeIS: tempTime1,
                color:color,
                note: note

             }))

        
            openAddedT()

        }
       
       
      
        
    }

  
   
      


  return (
    <div className='taskview-overlay'>

        {/* Task form */}
        
            <form className='t-form'>
                <div className='t-scroll'>

                {/* cancel sign */}
                <div className='t-cancel' onClick={closeTaskOverlay}>
                    <img src={cancel} alt=''></img>
                </div>

                {/* Label */}
                <label>Add a Task</label>

                {/* Task Header */}
                <div className='task-header'>
                    <input
                    placeholder='Add Title'
                    type='text'
                    onChange={(e)=>{
                        setTitle(e.target.value)
                        
                    }}
                    
                    ></input>
                </div>

                {/******* Time and date **********/}
                <div className='t-time-date'>

                    
                    {/* year */}
                    <div className='t-task-year'>

                        {/* selected option */}
                        <div className='selected-op'>
                            <p>{tempYear}</p>
                        </div>

                        {/* arrow-down */}
                        <div className={setp?'t-ar-down1': 't-ar-down'} onClick={()=>{
                            if(setp){
                                setSetp(false)
                            }else{
                                setSetp(true)
                            }
                           
                        }}>
                            <img src={arrowd} alt=''></img>
                        </div>

                        {/* Hidden years */}
                        <div className={setp ?'hidden-years hy-active':'hidden-years'}>
                            {yearArr.map((year, index)=>(
                                <p key={index} onClick={()=>{
                                    setTempYear(yearArr[index])
                                    
                                }}>{yearArr[index]}</p>
                            ))}
                           
                        </div>
                    </div>



                     {/* Month */}
                     <div className='t-task-month'>

                        {/* selected option */}
                        <div className='selected-op'>
                            <p>{tempMonth}</p>
                        </div>

                        {/* arrow-down */}
                        <div className={setp1?'t-ar-down1': 't-ar-down'} onClick={()=>{
                            if(setp1){
                                setSetp1(false)
                            }else{
                                setSetp1(true)
                            }
                           
                        }}>
                            <img src={arrowd} alt=''></img>
                        </div>

                        {/* Hidden years */}
                        <div className={setp1 ?'hidden-years hy-active':'hidden-years'}>
                            {
                                currentMonthArr.map((month, index)=>(
                                    <p key={index} onClick={()=>{
                                        setTempMonth(monthArrWords[currentMonthArr[index]])
                                        setNumMonth(index)

                                    }}>{monthArrWords[currentMonthArr[index]]}</p>
                                ))
                            }
                           
                            
                        </div>

                     </div>




                      {/* Day */}
                    <div className='t-task-day'>
                        {/* selected option */}
                        <div className='selected-op'>
                            <p>{tempDay}</p>
                        </div>

                        {/* arrow-down */}
                        <div className={setp2?'t-ar-down1': 't-ar-down'} onClick={()=>{
                            if(setp2){
                                setSetp2(false)
                            }else{
                                setSetp2(true)
                            }
                           
                        }}>
                            <img src={arrowd} alt=''></img>
                        </div>

                        {/* Hidden years */}
                        <div className={setp2 ?'hidden-years hy-active':'hidden-years'}>
                            {monthArr.map((month, index)=>(
                               
                                <p key={index} onClick={()=>{
                                    setTempDay(monthArr[index])
                                }}>{monthArr[index]}</p>
                            ))}
                        </div>
                    </div>


                    {/*  Start Time */}
                            <div className='t-task-time'>

                                {/* selected option */}
                                <div className='selected-op'>
                                <p>{tempTime1}</p>
                                </div>

                                {/* arrow-down */}
                                <div className={setp4?'t-ar-down1': 't-ar-down'} onClick={()=>{
                                if(setp4){
                                    setSetp4(false)
                                }else{
                                    setSetp4(true)
                                }
                                
                                }}>
                                <img src={arrowd} alt=''></img>
                                </div>

                                {/* Hidden years */}
                                <div className={setp4 ?'hidden-years hy-active':'hidden-years'}>
                                {timeArr.map((time, index)=>(
                                    
                                    <p key={index} onClick={()=>{
                                        setTempTime(index)
                                        setTempTime1(timeArr[index])
                                        // console.log(d.getUTCHours())
                                    }}>{timeArr[index]}</p>
                                ))}
                                
                                </div>

                            </div>



                </div>

                {/* Task notes */}
                <div className='t-notes'>
                    <textarea
                    placeholder='Add note..'
                    onChange={(e)=>{
                        setNote(e.target.value)
                    }}
                    ></textarea>
                </div>

                {/* pic color */}
                <div className='color-picker'>

                    <p>Pick a color</p>

                    <div className='pick-color'>
                    {/* color 1 */}
                    <div className={colorp ?'pcolor1 active-color': 'pcolor1'} onClick={()=>{
                        setColor('#e9c4b3')
                        setColorp(true)
                        setColorp1(false)
                        setColorp2(false)
                    }}>
                    {/* #e9c4b3 */}
                    </div>

                     {/* color 2 */}
                     <div className={colorp1 ?'pcolor2 active-color': 'pcolor2'}  onClick={()=>{
                        setColor('#b6d7c9')
                        setColorp(false)
                        setColorp1(true)
                        setColorp2(false)
                    }}>
                     {/* #b6d7c9 */}
                     </div>

                      {/* color 3 */}
                    <div className={colorp2 ?'pcolor3 active-color': 'pcolor3'}  onClick={()=>{
                        setColor('#c4c4de')
                        setColorp(false)
                        setColorp1(false)
                        setColorp2(true)
                       
                    }}>
                    {/* #c4c4de */}
                    </div>

                </div>

                </div>



                {/* submit button */}
                <div className='s-btn'>
                     <button className='submit-button' onClick={handleTaskSubmit}>Add Task</button>
                </div>
               
               
                 </div>    
            </form>

            {
                openAT && 
                <AddedTaskPromt word={'Task Added Successfully'} color={true}/>
            }

            {
                cantOpen && 
                <AddedTaskPromt word={'Time has already passed'} color={false}/>
            }


            {
                clashing && 
                <AddedTaskPromt word={'This Time has been assigned a Task'} color={false}/>
            }


       

    </div>
  )
}

export default TaskView