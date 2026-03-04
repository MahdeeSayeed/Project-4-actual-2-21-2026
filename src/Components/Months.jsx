import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from './Card';
import Coat from '../assets/Coat.png';
import Cart2 from '../assets/purse.png';
import Cart3 from '../assets/Speaker.png';
import Cart4 from '../assets/Desk.png';
import Flex from './Flex';
const Months = ({title,heading}) => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
 
 var set = {
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 
 
    return (
   <>
  
   <h1 className=" mt-12 border-t border-black  text-primary flex gap-2.5"><div className="  w-5 h-8 bg-primary rounded-2xl mb-7 font-poppins"></div>
    {title}
   </h1>
   <h2 className="mb-4 text-3xl font-semibold mt-6 font-Inter">{heading}</h2>
  

  <Flex>

    {/* <Slider {...settings}> */}
    <di className='flex justify-between'>
      <Flex>
       <Card
        imgSRC={Coat}
        title='The north coat'
           price='260'
           discountprice='$360'
           review= '88'
         
        />

      </Flex>
        
       <Flex>
        <Card
        imgSRC={Cart2}
        title='Gucci duffle bag'
           price='$960'
           discountprice='$116'
           review= '85'
       
        />
        </Flex>    
       <Flex>
        <Card
        imgSRC={Cart3}
        title='RGB liquid CPU Coole'
           price='$160'
           discountprice='$170'
           review= '66'
       
        />
        </Flex>    
      
        <Card
        imgSRC={Cart4}
        title='Small BookSelf'
           price='$360'
      
        />

    </di>



  </Flex>
    {/* </Slider> */}
 
  
  
  
   </>
   
  )
}

export default Months