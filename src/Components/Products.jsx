import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from './Card';
import Flex from './Flex';
import dogs from '../assets/Dog-2.png';
import camera from '../assets/Camera-2.png';
import Laptop from '../assets/laptop3.png';


const Products = ({children,title,heading}) => {
 

 
 
    return (

      <div>
        
      
    <h6 className=' mt-15 text-primary flex gap-2.5 '><div className='w-5 h-8 bg-primary rounded-2xl mb-7 font-poppins'></div>{title}</h6>
      <h2 className='mb-5 text-3xl font-semibold mt-6 font-Inter'>{heading}</h2>

  
 
  
  
 
  
    
    
        <div className='flex'>
          <div className='flex'>
           <Card
        imgSRC={dogs}
        title='Breed Dry Dog Food'
        review='$35'
        />
        </div>
        <div>
         <Card
        imgSRC={camera}
        title='CANON EOS DSLR Camera'
        percentage='$360'
        />
        </div>
        <div>
          <Card
        imgSRC={Laptop}
        title='ASUS FHD Gaming Laptop'
        review='$700'
        />
        </div>
        <div>
        <Card
        imgSRC={dogs}
        title='ASUS FHD Gaming Laptop'
        review='$500'
        />
        </div>
        
       
        
     
 

   </div>
        <div className='flex mt-9'>
          <div>
           <Card
        imgSRC={dogs}
        title='Breed Dry Dog Food'
        review='$35'
        />
        </div>
        <div>
         <Card
        imgSRC={camera}
        title='CANON EOS DSLR Camera'
        percentage='$360'
        />
        </div>
        <div>
          <Card
        imgSRC={Laptop}
        title='ASUS FHD Gaming Laptop'
        review='$700'
        />
        </div>
        <div>
        <Card
        imgSRC={dogs}
        title='ASUS FHD Gaming Laptop'
        review='$500'
        />
        </div>
        
       
        
     
 

   </div>
  <div className='relative'>

     <button className={`w-40   h-9 bg-red-400 text-white text-xs lg:text-base flex justify-center items-center relative left-109 px-8 py-3 lg:px-12  lg:py-3`}>View All Products</button>

   </div>
 </div>
 
 
  )
}

export default Products