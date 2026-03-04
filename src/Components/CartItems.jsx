import { Flex } from 'antd';
import React from 'react'

import Console from '../assets/console.png';
import { useDispatch } from 'react-redux';
import { DecrementReducer, IncrementReducer, removeReducer, SubtotalReducer } from '../Slice/ProductSlice';
import Item from 'antd/es/list/Item';
// import Laptop from '../assets//Laptop-2.png';
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";




const CartItems = ({imgSRC, title, price, subtotal, id, quan} ) => {
 
                
  
        const dispatch =useDispatch();
     
       const handleRemove= ()=>{
           
         dispatch(removeReducer(id)) 
         dispatch(SubtotalReducer()) 

       }
 
  const handleIncrement=()=>{

      dispatch(IncrementReducer(id))
      dispatch(SubtotalReducer())

      console.log
  }
  const handleDecrement=()=>{

      dispatch(DecrementReducer(id))

  }



 
  return (
    <>
    
          <h2>Product</h2>
    <Flex className='justify-between py-6 px-10 shadow-sm mt-10   '>
        <div className=' flex justify-between'>
        <span onClick={handleRemove} className='w-4 h-4 rounded-full bg-red-500 text-white text-xs flex justify-center items-center cursor-pointer'>X</span>
       <img src={imgSRC}className='w-13.5 h-13.5'alt='LCD Monitor'/>
         <div className=' justify-between px-39'>
          <h2>Price</h2>
          <h2>$650</h2>
         </div>
         
         <div>
          
       <h2>
         <span>{`${name.slice(0,10)}...`}</span>
        
        {price}</h2>

         </div>
     <div>
          <h2>Quantity</h2>
       <div className=' gap-1  items-center flex py-1.5 px-3 border border-gray-300 rounded-sm'>

      
        
        <div>
        <div className='py-1.5 px-2  border border-gray-300 rounded-sm flex gap-1.5 items-center'>
     
        <span>{quan}</span>

        <div>
       <MdKeyboardArrowUp className='cursor-pointer' onClick={handleIncrement} />
         <IoIosArrowDown  className='cursor-pointer' onClick={handleDecrement}/>
          

        </div>
          
          

         

          

        </div>

        
       </div>
      

        </div>
     
       
        


     </div>
















        </div>
    <div className='mr-39'>
    <h1>Subtotal</h1>
    <h2>${(quan* price).toFixed(2)}</h2>

    </div>
    </Flex>
    <div className='flex justify-between'>
    <div className='w-29 h-10 rounded-4 border-1 mt-5'><h3>Return To Shop</h3></div>
    <div className='w-29 h-10 rounded-4 border-1 mt-5 justify-center items-center '><h3>Update Cart</h3></div>

    </div>

    <div className='mt-25 mb-25 flex gap-4'>
      <input type='text' placeholder='Coupon code border-1'></input>
   <div>

   </div>
    <div className='bg-red-600 text-white w-34 h-10 flex justify-center items-center'>
      <button>Apply Coupon</button>
    </div>
    </div>

     <div className='w-59 h-40 border-1 ml-184 absolute top-99'>
      <div>
      <h4>Cart Total</h4>
      <div className='flex justify-between'>
      <h6>Subtotal:</h6>
       <h6>$1750</h6>
       <hr className='text-black'></hr>

      </div>
      <div className='flex justify-between mr-19'><h4>Shipping:</h4>
      <h4>Free</h4>
      
      </div>
      <div className='flex justify-between mr-19'><h6>total:</h6>
      <h6>$1750</h6>
      </div>
      </div>
      <div>

      <div className='bg-primary flex justify-between items-center text-white w-40 h-10'><button>Process to checkout</button></div>
      </div>
     </div>
    <div>


    </div>
    
    </>
  )
}

export default CartItems