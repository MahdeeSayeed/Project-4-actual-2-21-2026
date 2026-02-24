import React from 'react'
import Header from '../Components/Header' 
import Flex from '../Components/Flex'
import  Container  from '../Components/Container.jsx'
import Banner from '../Components/Banner.jsx'
import { Flash } from '../Components/Flash.jsx'
import Categories from '../Components/Categories.jsx'
import Months from '../Components/Months.jsx'
import Categories2 from '../Components/Categories2.jsx'
import Counter from '../Components/Counter.jsx'
import Products from '../Components/Products.jsx'
import Button from '../Components/Button.jsx'
import  Featured  from '../Components/Featured.jsx'
import Footer from '../Components/Footer.jsx'
import { TbLayoutNavbar } from 'react-icons/tb'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar.jsx'


const Home = () => {
  return (
    <>

   
   
   <Banner/>
   <Outlet/>
    
    </>
  )
}

export default Home