import React, { useState } from 'react'
import  Container  from './Container'
import Flex from './Flex'
import { RiArrowRightWideFill } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Bannerimg from '../assets/Bannerimg.png';
import Slider from 'react-slick';
import { BiCategory } from 'react-icons/bi';


const Banner = () => {
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
 appendDots: dots => (
      <div
     
      >

        
        <ul style={{ margin: "0px" }} className='absolute-top-16.5px left-100'> {dots} </ul>

      </div>
    ),
    customPaging: i => (
      <div
        className='w-3.5 h-3.5 rounded-full bg-gray-700 mt-5'
      >
       
      </div>
    )
  
    
  };
 
     const [show, setShow] = useState(false)

    const handleClick=()=>{

       setShow(!show)

    }
 
    return (
    <>
    <nav className='border-t border-gray-400'>
    <Container>
        <Flex>
          <div onClick={handleClick}className='flex lg:Hidden items-center gap-4'>
      <BiCategory className='text-4xl mt-5 mb-5 border-b border-gray-700' />
      <h3>Categories</h3>

          </div>
        <div className='w-[250px] border-gray-400 pt-10 pb-5'>
         <ul className={`${show  ? "block" : "hidden"} text-center lg:text-justify hidden lg:flex flex-col gap-y-4 pr-10`}>
            <li className='lg:flex gap-4 items-center'>Woman’s Fashion<RiArrowRightWideFill /></li>
            <li className='flex gap-9 items-center'>Men’s Fashion<RiArrowRightWideFill /></li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
         </ul>


        </div>


 <div className='w-full ml-12.5 mt-10 border-b border-gray-400 pt-10'>
   <Slider {...settings}>
     <div className='w-full lg:ml-12.5 mt-10'>
        <img src={Bannerimg}alt='Banner-image'/>
     </div>
     <div>
        <img src={Bannerimg}alt='Banner-image'/>
     </div>
     <div>
        <img src={Bannerimg}alt='Banner-image'/>
     </div>
     <div>
        <img src={Bannerimg}alt='Banner-image'/>
     </div>
     <div>
        <img src={Bannerimg}alt='Banner-image'/>
     </div>
    </Slider>
        </div>
        </Flex>
       
        
        </Container>





    </nav>

    
    </>
  )
}

export default Banner