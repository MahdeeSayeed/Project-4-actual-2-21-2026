import React, { useEffect, useState } from 'react'
import  Container  from './Container'
import BreadCrumbs from './BreadCrumbs'
import Gamepad1 from '../assets/Gamepad1.png';
import Gamepad from '../assets/Gamepad.png';
import { Button, Flex } from 'antd';
import { Rate } from 'antd';
import axios from "axios";
import { useParams } from "react-router";
import Products from './Products';
import { CiHeart } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import images from '../assets/Frame 911.png'
import { GiCycle } from "react-icons/gi";

const ProductDetails = () => {
  const [ProductData, setProductData] = useState([])
  const [ProductImages, setProductImages] = useState([])
  const [ProductReview, setProductReview] = useState([])
  let {id} = useParams();

      console.log(id)

     async function  getdata(){

      await  axios.get(`https://dummyjson.com/products/${id}`)
      .then((data)=>{
      
        setProductData(data.data);
      
        setProductImages(ProductData.data.images);
        setProductReview(data.data.reviews || []);
     

  

    })
  



}



 useEffect(()=>{

      getdata()



      
 },[])
 
  
  
  
  
  
  
  
  return (
    <div className='mt-20 mb-35'>

         <Container>
            <BreadCrumbs/>
            <Flex className='justify-between'>
            <div className='flex mt-20 gap-17.5 w-[190%]'>
                <div className='flex flex-col gap-4'>
                    {
                      ProductImages.map((item)=>{
                        return <img key={item} src={item} className='w-[42.5]'alt=''/>
                      })
                    }
                </div>
                <div>
                    <img src={ProductData.thumbnail}alt='Gamepad'/>
                </div>
            </div>
            <div className='w-36px mt-20'>
              <h1 className='text-2xl font-semibold'>{ProductData.title}</h1>
              <div className='gap-4'>

           <Rate allowHalf defaultValue={ProductData?.rating || 0}/>
                <div className='flex'>
                <h5 className='text-gray-500'>({ProductData.reviews?.length || 0})</h5>
                <h5 className='text-lime-400'>in Stock</h5></div></div><h2 className='text-2xl'>{ProductData.price}</h2>
              <p className='border-b border-gray-500 pb-10 pt-6'>PlayStation 5 
                Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & 
                mess free removal Pressure 
                sensitive.</p>
          
              <h3 className='font-Inter flex gap-6 mt-6 items-center'>Colours:
                
                <div className='flex gap-2'>
                <div className='h-5 w-5 rounded-full bg-[#A0BCE0] border-'></div>
                <div className='h-5 w-5 rounded-full bg-[#E07575] border-'></div>
                </div>
                <div>

                </div>
                </h3>
                <h3 className='flex gap-6 text-xl mt-6 items-center'>
                  Size:
                </h3>
                     <div className='flex gap-2'>
                <div className=' border-1 h-8 w-8 text-sm rounded-sm bg-white font-medium  text-black hover:bg-primary hover:text-white py-6 px-7 flex justify-center items-center'>
                  xs
                </div>
          
                <div className=' border-1 h-8 w-8 text-sm rounded-sm bg-white font-medium text-black  hover:bg-primary hover:text-white py-6 px-7 flex justify-center items-center'>
                  sm
                </div>
                <div className=' border-1 h-8 w-8 text-sm rounded-sm bg-white font-medium text-black  hover:bg-primary hover:text-white py-6 px-7 flex justify-center items-center'>
                  md
                </div>
               
                <div className=' border-1 h-8 w-8 text-sm rounded-sm   bg-white font-medium text-black   hover:bg-primary hover:text-white py-6 px-7 flex justify-center items-center'>
                  lg
                </div>
                <div className=' border-1 h-8 w-8 text-sm rounded-sm   bg-white font-medium text-black      hover:bg-primary hover:text-white py-6 px-7 flex justify-center items-center'>
                  xl
                </div>
                  
                </div>
               
               <Flex>
               <div className=' w-39.75 border border-gray-300 mt-6'>
                <button className='px-2.5 py-2  text-2xl font-medium'>-</button>
                <span className='text-xl px-8.5 py-2 border-right border-gray-300'>0</span>
                <button className='px-2.5 py-2  text-2xl font-medium'>+</button>
                
               </div>
                
               <div className='mt-6  gap-4'> 

                <button  className='bg-red-600 py-2.5 px-12 text-white'>Buy Now</button>

               </div>
               <div className='  flex justify-center items-center text-[20px] border border-gray-300 rounded-sm px-1.75 py-1.5'>
                <CiHeart className='mt-5 lg-mt-0 text-[20]    '/>
               </div>
               </Flex>
               <div className='border border-gray-300 rounded-sm mt-6'>
                <div className='flex gap-4 items-center pt-4 pl-4 pb-4 pr-12.75'>
                  <div>
                   <FaTruckFast className='text-[40px]'/>

                  </div>
                  <div><h3>Free Delivery</h3>
                  <p>Enter your postal code for Delivery Availability</p>
                  </div>

                </div>
                
               </div>
               <div className='border border-gray-300 rounded-sm '>
                <div className=' border-t border-gray-300 flex gap-4 items-center pt-4 pl-4 pb-4 pr-12.75'>
                  <div className='text-3xl'>
                  
                  <GiCycle />
                  </div>
                  <div><h3>Return Delivery</h3>
                  <p>Free 30 Days Delivery Returns. Details</p>
                  </div>

                </div>
                
               </div>
               
              
            </div>

            </Flex>
         </Container>
    </div>
  )
}

export default ProductDetails