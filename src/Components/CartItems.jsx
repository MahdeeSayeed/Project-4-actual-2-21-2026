import { Flex } from 'antd';
import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Console from '../assets/console.png';
import { useDispatch } from 'react-redux';
import { removeReducer } from '../Slice/ProductSlice';
import Item from 'antd/es/list/Item';
// import Laptop from '../assets//Laptop-2.png';






const CartItems = ({imgSrc, title, price}, subtotal, id) => {
 
                
  
        const dispatch =useDispatch();
     
       const handleRemove= ()=>{
           
         dispatch(removeReducer(id)) 

       }
 
 
 
  return (
    <>
    
    <Flex className='justify-between py-6 px-10 shadow-sm mt-10   '>
        <div className='items-center'>
        <span onClick={handleRemove} className='w-4 h-4 rounded-full bg-red-500 text-white text-xs flex justify-center items-center cursor-pointer'>X</span>
       <img src={imgSrc}className='w-13.5 h-13.5'alt='LCD Monitor'/>
       
        

        </div>

         <div>
          
       <h2>
         <span>{`${name.slice(0,10)}...`}</span>
        
        {price}</h2>

         </div>
     
       <div className=' gap-1  items-center flex py-1.5 px-3 border border-gray-300 rounded-sm'>

        01
        
        <div>
      
         <IoIosArrowUp/>
    <IoIosArrowDown />

        </div>
    
        <h2>{subtotal}</h2>
        
       </div>
    </Flex>
    </>
  )
}

export default CartItems