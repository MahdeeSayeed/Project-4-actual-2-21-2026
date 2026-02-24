import React from 'react'
import  Playstation from  '../assets/Playstation.png'
import  FashionGirl from  '../assets/Fashion girl.png'
import  Perfume from  '../assets/Perfume.png'
import { FaShuttleVan } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export const Featured = ({title, heading}) => {
  return (
    
  <>

  <div className='mt-28'>
  <h1 className=" absolute top-934 -mt-9   text-primary flex gap-2.5">
        <div className=" w-5 h-8 bg-primary rounded-2xl mb-7 font-poppins mt-1"></div>
        {title}
      </h1>
      <h2 className="absolute top-934  text-3xl font-semibold font-Inter mt-6 ">{heading}</h2>
  
        <div className='flex gap-5 py-5'>< img src={Playstation} alt="PlaySation"/>
        <div className=''> <img src={FashionGirl} alt="Fashion Girl"/>
        <div className='mt-5'>< img src={Perfume} alt="Perfume"/></div>
      
        </div>
        </div>
  
    
     
       <div className='flex justify-center gap-94'>
        <div className='bg-black text-white text-3xl rounded-full outline-6 outline-gray-400 '><FaShuttleVan /></div>
        <div className='bg-black text-white text-3xl rounded-full  outline-6 outline-gray-400  '><CiHeadphones /></div>
        <div className='bg-black text-white text-3xl rounded-full  outline-6 outline-gray-400   '><IoShieldCheckmarkSharp /></div>
        
      
      
      
      
      
      
      
       </div>
<div className='flex justify-center gap-45 mb-50'>
  <div>
 <div className='flex justify-center text-lg/7'><h2>FREE AND FAST DELIVERY</h2></div>
  <p>Free delivery for all orders over $140</p>
  </div>
 <div>
 <div className='flex justify-center text-center  text-lg/7 ' ><h2>FREE AND FAST DELIVERY</h2></div>
 <p>Friendly 24/7 customer support</p>
 </div>
 <div>
 <div  className='flex justify-center text-lg/7'><h2>FREE AND FAST DELIVERY</h2></div>
 <p>We reurn money within 30 day</p>
 </div>

  </div>

</div>

    
      
        






  </>   
 
  )
}

export default Featured 