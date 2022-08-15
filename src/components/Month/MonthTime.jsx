
 import React, { useEffect, useRef, useState } from 'react'
 import MonthTimeBox from './MonthTimeBox'
import MonthTimeBox1 from './MonthTimeBox1'
import '../../styles/Month/MonthTime.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addShiftR, shiftingArr } from '../Reducers/ShiftReducer'
 
 function MonthTime(props) {

    const[tempMonth, setTempMonth] = useState(props.tempM)
    var d = new Date();
    const dispatch = useDispatch()
    const[tempYear, setTempYear] = useState(props.year)
    
    const [monthDays, setMonthDays]= useState([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31])
    const [cArr, setCarr]= useState([])

    // const {navSlice}= useSelector((state)=>state.navigateSlice);
    const {shiftR}= useSelector((state)=>state.shiftReducer);
    const {shiftArr}= useSelector((state)=>state.shiftReducer);
    const {monthMove}= useSelector((state)=>state.moveSlice);


    const monthArr =[]

    const printMonthDays=()=>{ 
      
      var start = 1;
      var i=1;
     monthArr[0]= start
      var curr1;

        // if its sept, april, june, nov print 30
        if(tempMonth === 'April' || tempMonth === 'June' || tempMonth === 'September' || tempMonth === 'November' ){
              // loop to keep adding +1
             
              while( i < 30){
                  
                      curr1= monthArr[i-1]; //(2022)
                      monthArr[i]=curr1+1
                      
                      i++

              }

              

              // console.log(monthArr)
        }

      // if its feb print 28 0r 29,
      else if(tempMonth==='February'){

          //if year is divisible by 4 print 29
          if(tempYear % 4 === 0){
               // loop to keep adding +1
              
               while( i < 29){
                   
                       curr1= monthArr[i-1]; //(2022)
                       monthArr[i]=curr1+1
                       i++

               }
              //  setMonthStateArr(monthStateArr)
              //  console.log(monthArr)

          }
          // else print 28
          else{
               // loop to keep adding +1
              
               while( i < 28){
                   
                  curr1= monthArr[i-1]; //(2022)
                  monthArr[i]=curr1+1
                  i++

          }

          // setMonthStateArr(monthArr)
          // console.log(monthArr)
          }

      }
          
      // else print 31

      else{
             // loop to keep adding +1
              
             while( i < 31){
                   
              curr1= monthArr[i-1]; //(2022)
              monthArr[i]=curr1+1
              i++

      }
      // setMonthStateArr(monthArr)
     
      }

  }
  
 printMonthDays()
 
 


  // console.log('on every render')

  


 // shift control

 
  var InitialShift = [];
  var shift ;
  var lastShift;
  var shiftCont=[]
 
 
 
//  console.log(shiftR)
 
   
 
     
      const shiftControl=()=>{
        InitialShift[0]= props.yearShift;
 
        // An for loop to create an twod array
        for(var k=0;k<13; k++){
          shiftCont[k]=[]
        }
        
        // a whole year loop 12times
        for(var i=1; i <13; i++){
 
            shift = monthDays[i-1] % 7;
            lastShift = (InitialShift[i-1] + shift)%7;
            InitialShift[i] = lastShift;
           
 
            for(var j=0;j<InitialShift[i-1];j++){
              shiftCont[i-1][j]= '';
             
            }
            
          
           
        }
      
       
       
        
 
        
      
      }

     
  
      shiftControl()
    
     
     
     
      

       
   return (

    <div className='month-time' key={props.kay}>
    {/* the shift control */}
    
          {
          
          shiftCont[props.kay].map((shift, id)=>(
            <MonthTimeBox1 day={shiftCont[id]} key={id}/>
          ))
        }
    
   

    {/* Main days */}
    
       {
      monthArr.map((days,index)=>(
        

        <MonthTimeBox day={monthArr[index]} key={index} kay={index} tempM={props.tempM} year={tempYear}/>
      ))
    }
   
   

  </div>
   )
 }
 
 export default MonthTime