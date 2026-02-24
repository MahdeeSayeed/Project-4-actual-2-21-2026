import React from 'react'
import  Container  from './Container';
import { Card } from 'antd'
import { FaRegEye } from "react-icons/fa";
import Cart from '../assets/Cart.png'
import Speaker2 from '../assets/Speaker2.png'
import Console2 from '../assets/Console2.png'
import Jacket from '../assets/Jacket.png'
import HP from '../assets/HP.png'
import LCD from '../assets/LCD.png'
import Console3 from '../assets/Console3.png'
import Keyboard3 from '../assets/Keyboard2.png'






const WishList = ({children, Flex,imgSRC,percentage,title, discount, price,review, heading}) => {
  
  const handleAddCart = () => {
      dispatch(CartReducer(ProductData));
    };
  
  
  
  
  
  
    return (
    
    <Container >
<h1>WishList(4)</h1>
          
          
          
         <div className='flex mt-14 mb-20'>
                <div className='flex'>
  <div className="relative overflow-hidden">
          <div className='flex'>
           {/* <image-1></image-1> */}
           
            <img
              className="cursor-pointer"
              src={Cart}
              alt="console onClick={handleProductDetails} "
            />
            <div className="flex justify-between absolute">
              <h3 className="bg-primary py-1 px-3 rounded-sm text-white top-0 left-0 w-fit h-fit p-3">
                -{percentage}%{" "}
              </h3>
              <div>
                
                <FaRegEye className="W-8.5 h-8.5 rounded-full bg-white flex justify-center items-center" />
              </div>
              <div></div>
            </div>

            <button
              onClick={handleAddCart}
              className="bg-black text-white py-3 absolute -bottom-6 left-0 group-hover:bottom-0 duration-150 ease-linear cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
          <h2 className="font-poppins font-medium">{title}</h2>
        </div>
        <div>
          <h3 className="text-primary">{discount}</h3>
          <h3 className="line-through">{price}</h3>
        </div>
       
        <div>
          <h3 className=" flex items-center ">({review})</h3>
        </div>
  

                </div>
          
          <div className='flex'>
          <div>
            
            {/* <img-2></img-2> */}
            <img
              className="cursor-pointer"
              src={Speaker2}
              alt="console onClick={handleProductDetails} "
            />
            <div className="flex justify-between absolute">
              <h3 className="bg-primary py-1 px-3 rounded-sm text-white top-0 left-0 w-full h-fit p-3">
                -{percentage}%{" "}
              </h3>
              <div>
                
                <FaRegEye className="W-8.5 h-8.5 rounded-full bg-white flex justify-center items-center" />
              </div>
              <div></div>
            </div>

            <button
              onClick={handleAddCart}
              className="bg-black text-white py-3 absolute -bottom-6 left-0 group-hover:bottom-0 duration-150 ease-linear cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
          <h2 className="font-poppins font-medium">{title}</h2>
        </div>
        <div>
          <h3 className="text-primary">{discount}</h3>
          <h3 className="line-through">{price}</h3>
        </div>
       
        <div>
          <h3 className=" flex items-center ">({review})</h3>
        </div>
          <div className='flex'>
          
          {/* <img-3></img-3> */}
          <div className='flex'>
            <img
              className="cursor-pointer"
              src={Console2}
              alt="console onClick={handleProductDetails} "
            />
            <div className="flex justify-between absolute">
              <h3 className="bg-primary py-1 px-3 rounded-sm text-white top-0 left-0 w-full h-fit p-3">
                -{percentage}%{" "}
              </h3>
              <div>
                
                <FaRegEye className="W-8.5 h-8.5 rounded-full bg-white flex justify-center items-center" />
              </div>
              <div></div>
            </div>

            <button
              onClick={handleAddCart}
              className="bg-black text-white py-3 absolute -bottom-6 left-0 group-hover:bottom-0 duration-150 ease-linear cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
          <h2 className="font-poppins font-medium">{title}</h2>
        </div>
        <div>
          <h3 className="text-primary">{discount}</h3>
          <h3 className="line-through">{price}</h3>
        </div>
    
          <div className='flex'>
          <h3 className=" flex items-center ">({review})</h3>
     
      {/* <image-4></image-4> */}
            <img
              className="cursor-pointer h-64"
              src={Jacket}
              alt="console onClick={handleProductDetails} "
            />
            <div className="flex justify-between absolute">
              <h3 className="bg-primary py-1 px-3 rounded-sm text-white top-0 left-0 w-full h-fit p-3">
                -{percentage}%{" "}
              </h3>
              <div>
                
                <FaRegEye className="W-8.5 h-8.5 rounded-full bg-white flex justify-center items-center" />
              </div>
              <div></div>
            </div>

            <button
              onClick={handleAddCart}
              className="bg-black text-white py-3 absolute -bottom-6 left-0 group-hover:bottom-0 duration-150 ease-linear cursor-pointer"
            >
              Add To Cart
            </button>
        <div className=" absolute top-109 right-294 w-5 h-8 bg-primary rounded-2xl  font-poppins mt-1"></div>
        {heading}
          <h2 className="absolute top-105 right-246 text-3xl font-semibold font-Inter mt-6 ">Just for You</h2>
            </div>
          
          </div>
    
        <div>



   <div className='  flex mb-20 mt-20'>
                <div className='flex'>
  <div className="relative overflow-hidden">
          <div className='flex'>
           {/* <image-1></image-1> */}
           
            <img
              className="cursor-pointer"
              src={HP}
              alt="console onClick={handleProductDetails} "
            />
            <div className="flex justify-between absolute">
              <h3 className="bg-primary py-1 px-3 rounded-sm text-white top-0 left-0 w-fit h-fit p-3">
                -{percentage}%{" "}
              </h3>
              <div>
                
                <FaRegEye className="W-8.5 h-8.5 rounded-full bg-white flex justify-center items-center" />
              </div>
              <div></div>
            </div>

            <button
              onClick={handleAddCart}
              className="bg-black text-white py-3 absolute -bottom-6 left-0 group-hover:bottom-0 duration-150 ease-linear cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
          <h2 className="font-poppins font-medium">{title}</h2>
        </div>
        <div>
          <h3 className="text-primary">{discount}</h3>
          <h3 className="line-through">{price}</h3>
        </div>
       
        <div>
          <h3 className=" flex items-center ">({review})</h3>
        </div>
  

                </div>
          
          <div className='flex'>
          <div>
            
            {/* <img-2></img-2> */}
            <img
              className="cursor-pointer"
              src={LCD}
              alt="console onClick={handleProductDetails} "
            />
            <div className="flex justify-between absolute">
              <h3 className="bg-primary py-1 px-3 rounded-sm text-white top-0 left-0 w-full h-fit p-3">
                -{percentage}%{" "}
              </h3>
              <div>
                
                <FaRegEye className="W-8.5 h-8.5 rounded-full bg-white flex justify-center items-center" />
              </div>
              <div></div>
            </div>

            <button
              onClick={handleAddCart}
              className="bg-black text-white py-3 absolute -bottom-6 left-0 group-hover:bottom-0 duration-150 ease-linear cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
          <h2 className="font-poppins font-medium">{title}</h2>
        </div>
        <div>
          <h3 className="text-primary">{discount}</h3>
          <h3 className="line-through">{price}</h3>
        </div>
       
        <div>
          <h3 className=" flex items-center ">({review})</h3>
        </div>
          <div className='flex'>
          
          {/* <img-3></img-3> */}
          <div className='flex'>
            <img
              className="cursor-pointer"
              src={Console3}
              alt="console onClick={handleProductDetails} "
            />
            <div className="flex justify-between absolute">
              <h3 className="bg-primary py-1 px-3 rounded-sm text-white top-0 left-0 w-full h-fit p-3">
                -{percentage}%{" "}
              </h3>
              <div>
                
                <FaRegEye className="W-8.5 h-8.5 rounded-full bg-white flex justify-center items-center" />
              </div>
              <div></div>
            </div>

            <button
              onClick={handleAddCart}
              className="bg-black text-white py-3 absolute -bottom-6 left-0 group-hover:bottom-0 duration-150 ease-linear cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
          <h2 className="font-poppins font-medium">{title}</h2>
        </div>
        <div>
          <h3 className="text-primary">{discount}</h3>
          <h3 className="line-through">{price}</h3>
        </div>
    
          <div className='flex'>
          <h3 className=" flex items-center ">({review})</h3>
     
      {/* <image-4></image-4> */}
            <img
              className="cursor-pointer"
              src={Keyboard3}
              alt="console onClick={handleProductDetails} "
            />
            <div className="flex justify-between absolute">
              <h3 className="bg-primary py-1 px-3 rounded-sm text-white top-0 left-0 w-full h-fit p-3">
                -{percentage}%{" "}
              </h3>
              <div>
                
                <FaRegEye className="W-8.5 h-8.5 rounded-full bg-white flex justify-center items-center" />
              </div>
              <div></div>
            </div>

            <button
              onClick={handleAddCart}
              className="bg-black text-white py-3 absolute -bottom-6 left-0 group-hover:bottom-0 duration-150 ease-linear cursor-pointer"
            >
              Add To Cart
            </button>
        <div className=" absolute top-109 right-294 w-5 h-8 bg-primary rounded-2xl  font-poppins mt-1"></div>
        {heading}
          <h2 className="absolute top-105 right-246 text-3xl font-semibold font-Inter mt-6 ">Just for You</h2>
            </div>
          
          </div>



        </div>


          
           

       


       



     
           
  

   


   </Container>















  









               
       
  
           
               
    

    
  )
}

export default WishList