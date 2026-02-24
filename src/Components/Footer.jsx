import React from 'react'
import { BiSolidRightArrow } from "react-icons/bi";
import QRcode from '../assets/Qr Code.png'
import Googlecode from '../assets/GooglePlay.png'
import Applestore from '../assets/download-appstore.png'
import { IoMdArrowDropright } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import  Container  from './Container';




const Footer = () => {
  return (
    <div className='bg-black w-306 h-101 text-white lg:flex py-10 justify-center justify-start'>
  
    <div>
      <h6 className='text-base/9'>Exclusive</h6>
      <h5 className='text-base/9'>Subscribe</h5>
      <p className='text-base/10'>Get 10% off your first order</p>
     
     
     
     
      <div className=' relative'>
      <input className="outline-2 outline-gray-500"type="email"placeholder='Enter your email'/>
      <IoMdArrowDropright className='absolute left-40 text-3xl -top-1 lg:flex items-center justify-center'/>

   
      </div>
    </div>

      <div className='py-2 pl-18'>
        <h3>Support</h3>
        <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
        <div>
       

        </div>
      </div>

     <div className='py-2 pl-20'>
        <h2>Account</h2>
        <p>My Account</p>
        <p>Login/Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>


      
     </div>

     <div className='py-2 pl-13'>
      <h2>Quick Link</h2>
      <p>Privacy Policy</p>
      <p>FAQ</p>
      <p>Contact</p>
     </div>
     <div className='pt-2 pl-5'>
      <h5>Download App</h5>


      <p>Save $3 with App New User OnlY</p>
    <div className='flex'>
      <img src={QRcode}alt='QR-code'/>
      <div>
      <img src={Googlecode}alt='Googlecode'/>
      <img src={Applestore}alt='Googlecode'/>


      </div>

    </div>
    <div className='flex mt-5 gap-5'>
    <RiFacebookFill className='text-2xl'/>
    <TiSocialTwitter  className='text-2xl'  />
    <IoLogoInstagram   className='text-2xl'     />
    <FaLinkedinIn className='text-2xl'  />


    </div>
     </div>
    
    </div>
   
  )
}

export default Footer