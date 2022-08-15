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

function App() {

  const {showTask}= useSelector((state)=>state.showCTask);
  const {sLook}= useSelector((state)=>state.showLook);
  const {mtLook}= useSelector((state)=>state.showMonth);
  const {navSlice}= useSelector((state)=>state.navigateSlice);
 
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
      
      
      
    </div>
  
    
  );
}

export default App;
