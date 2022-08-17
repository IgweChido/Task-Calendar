import Day from "./components/Day/Day";
import Month from "./components/Month/Month";
import TaskPrompt from "./components/TaskPrompt";
import Timeline from "./components/Timeline";
import Week from "./components/Week/Week";
import './styles/App.scss'
import { useDispatch, useSelector } from 'react-redux';
import TaskView from "./components/TaskView";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import WTimeline from "./components/WTimeline";
import MTimeline from "./components/MTimeline";
import React, { useEffect, useState } from 'react'
import AddedTaskPromt from "./components/AddedTaskPromt";

function App() {
  var d = new Date();
  const dispatch = useDispatch()
  const Tasks = useSelector((store)=>store.taskP)
  const {showTask}= useSelector((state)=>state.showCTask);
  const {sLook}= useSelector((state)=>state.showLook);
  const {mtLook}= useSelector((state)=>state.showMonth);
  const {navSlice}= useSelector((state)=>state.navigateSlice);
  const [reminder, setReminder]=useState(false)
  const [filter, setFilter]= useState([])
  const monthArrWords=['January', 'February', 'March','April', 'May','June','July',
    'August','September','October','November', 'December']
// var timely= d.getUTCHours()
// const testIt=(task)=>{
//   if(task.time-1  === timely && task.day=== d.getDate() && task.month === monthArrWords[d.getMonth()] && task.year=== d.getFullYear()){
//     setReminder(true)
//   }
//   else if(task.time === 0 && timely === 0 && task.day === d.getDate()&& task.month === monthArrWords[d.getMonth()] && task.year=== d.getFullYear()){
//     setReminder(true)
//   }
// }
//  useEffect(()=>{
//   const methodToCheck=()=>{
//     Tasks.map((task, index)=>(
//         testIt(task)
//     ))
//    }
  
//    methodToCheck()
//  },[Tasks, timely ])

//  console.log(d.getUTCHours())
 
  return (
  
    <div className={(showTask ||sLook || mtLook) ? "App hold" : 'App'}>
      <BrowserRouter>
      

    
      <TaskPrompt/>
      <Routes>
      
          <Route path="/" element={
            <div>
               <WTimeline/>
               <Week/>
            </div>
         
          }/>
          <Route path="/day" element={
            <div>
              <Timeline/>
              <Day/>
            </div>
            
          }/>
          <Route path="/month" element={
            <div>
              <MTimeline/>
              <Month/>
            </div>
            
          }/>
         

      </Routes>
      </BrowserRouter>

      {
        reminder &&
        <AddedTaskPromt word='task reminder dey work'/>

      }
      
      
      
    </div>
  
    
  );
}

export default App;
