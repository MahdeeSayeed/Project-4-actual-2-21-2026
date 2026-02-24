import React from 'react'
import  Container  from './Container'
import SectionH from './SectionH'
import Slider from "react-slick";
import Console from '../assets/console.png';
import Counter from './Counter';
import Flex from './Flex';
import Card from './Card';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Categories from './Categories';
import Months from './Months';
import Button from './Button';
import Categories2 from './Categories2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from './Products';
import { Featured } from './Featured';
import RelatedItems from './RelatedItems';
import WishList from './WishList';



function SampleNextArrow(props) {
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  const { className, style, onClick } = props;
  return (
    <div
      className="hidden absolute -top-20 right-8 w-10.5 h-10 bg-gray-400 rounded-b-full lg:flex justify-center items-center"
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
      
    >
      <FaArrowLeft className='bg-gray-400 flex justify-center items-center'/>
      </div>
    
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="hidden absolute top-20 right-0 w-10.5 h-10 bg-gray-400 rounded-b-full lg:flex justify-center"
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
      
    >
      <FaArrowRight />
      </div>
  );
}

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    
    
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
       
        }
      },
   
    ]
  };

















export const Flash = () => {
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4


    
  };
 
 
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
 
  const sett = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
 
  const sett2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
    return (
    <div>
   
     <Container className="mt-10 lg:mt-38.5 lg:pb-15 pb-5">
       <div className=' items-end lg:gap-x-21.75 flex-wrap gap-8 justify-center lg:start '>
        <SectionH title='Todays'heading='Flash Sales'/>
       

     <Counter/>



       </div>
       <div className='w-500px'>
    <Slider {...settings} className='mt-10'>
        <Card
        imgSRC={Console}
        title='HAVIT HV-G92 Gamepad'
           price='$120'
           discountprice='$160'
           review= '88'
           percentage= '40'
        />
        
       <Flex>
        <Card
        imgSRC={Console}
        title='HAVIT HV-G92 Gamepad'
           price='$120'
           discountprice='$160'
           review= '88'
           percentage= '40'
        />
        </Flex>    
       <Flex>
        <Card
        imgSRC={Console}
        title='HAVIT HV-G92 Gamepad'
           price='$120'
           discountprice='$160'
           review= '88'
           percentage= '40'
        />
        </Flex>    
       <Flex>
        <Card
        imgSRC={Console}
        title='HAVIT HV-G92 Gamepad'
           price='$120'
           discountprice='$160'
           review= '88'
           percentage= '40'
        />
        </Flex>    



    </Slider>

       </div>
   
      
     <Categories title='Categories'heading='Browse Your Categories'/>
       <Months title='This Month'heading='Best Selling Products'/>
       <Button Button='View All Products'/>
       <Products title='Our Products'heading='Explore Our Products'/>
  
     <Featured title='Featured' heading='New Arrival'/>
     <RelatedItems title ='Relateditem'/>
     <WishList heading='Just For You'/>
     </Container>
     
    </div>

  )
}
