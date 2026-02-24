import React from 'react'
import stereo from '../assets/Categories.png';
import Slider from 'react-slick';
import Card from './Card';
import dogs from '../assets/Dog-2.png'
import camera from '../assets/Camera-2.png'
// import Laptop from '../assets/Laptop-2.png'


const Categories2 = ({title,heading}) => {
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
 
 
 
 
 
 
 
 
 
 
 
 
 
  return (
    <div><img src={stereo}alt='image'/>
    <h6 className=' mt-15 text-primary flex gap-2.5 '><div className='w-5 h-8 bg-primary rounded-2xl mb-7 font-poppins'></div>{title}</h6>
      <h2 className='mb-5 text-3xl font-semibold mt-6 font-Inter'>{heading}</h2>

  
 
  
  
 
   <Slider {...settings}>
    
    
        <div>
           <Card
        img src={dogs}alt='dog'
        title='Breed Dry Dog Food'
        
        review= '$35'
        
        />
        </div>
        <div>
         <Card
        img src={camera}alt='dog'
        title='CANON EOS DSLR Camer'
          
        percentage= '$360'
        />


        </div>
        <div>
          <Card
        img src={Laptop}alt='dog'
        title='ASUS FHD Gaming Laptop'
       
           review= '$700'
           
        />


        </div>
        <div>
        
 <Card
        img src={dogs}alt='dog'
        title='ASUS FHD Gaming Laptop'
         
        review= '$500$'
        
        />


        </div>
        
       
        
     
      </Slider>

        <div>
   </div>










































       </div>

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
  )
}

export default Categories2