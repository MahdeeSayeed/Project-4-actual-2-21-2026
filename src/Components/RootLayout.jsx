import React from 'react'

import { Outlet } from "react-router";
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';
import { Flash } from './Flash';
import Featured from './Featured';
import Categories2 from './Categories2';
import ShopNow from '../Pages/ShopNow';
import About from '../Pages/About';
import Categories from './Categories';
import Products from './Products';
import RelatedItems from './RelatedItems';

const RootLayout = () => {
  return (
    <>
     <Header/>
      <Navbar/>
      <Outlet/>
      <RelatedItems/>
      <Footer/>
    </>
  )
}

export default RootLayout