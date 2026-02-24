import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';     
import Flex from './Flex';



const Counter = () => {
 
 
 
    const conduct_date = '2026-01-21 00:00:00';
 
     
     const [count,setcount]= useState({})
 

       useEffect(()=>{

         const Interval= setInterval(()=>{
             
             const countDown = countDownDateAndTime();
             
                setcount(countDown)
      
                
            },1000)
            
            
        },[])
        
        console.log(count)      
    return (
    <div className='flex gap-7.5 items-center'>
        <div>
            <h2 className='text-xs'>Days</h2>
            <h2>{count.days}</h2>
        </div>
            <h2 className=' text-3xl text-red-300'>:</h2>
        <div>
            <h2>Hours</h2>
            <h2>{count.hours}</h2>

        </div>
        <div>
            <h2>Minutes</h2>
            <h2>{count.minutes}</h2>
        </div>
        <div>
            <h2>Seconds</h2>
            <h2>{count.seconds}</h2>
        </div>
        
    </div>
  )
}

export default Counter