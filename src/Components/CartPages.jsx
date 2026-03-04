import React from 'react'
import  Container  from './Container'
import BreadCrumbs from './BreadCrumbs'
import { Flex } from 'antd'
import CartItems from './CartItems'
// import Laptop from '../assets//Laptop-2.png'
import Console from '../assets/console.png';
import { useSelector } from 'react-redux'


const CartPages = () => {

  const data= useSelector((state)=>state.AllProducts.Cart)

  let Subtotal= useSelector((state)=>state.AllProducts.Subtotal)







  return (
    <div>
  
      <>
      
      <Container className='pb-355'>
        
       <BreadCrumbs />

       <div className='mt-19 mb-23'>
  
        <Flex className='justify-between py-6 px-10 shadow-sm'>
            <h4>Product</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>${Subtotal}</h4>
        </Flex>

       </div>
     {
         data.map((item,index)=>{
           
          return <CartItems  id={item.id} key={index}imgSrc={item.thumbail} title={item.title} price={item.price} subtotal={item.price} quan={item.quan}/>



   })
     }


         <div>



         </div>
         <div className='mt-10'>

          <CartItems   imgSrc={Console} title='LCD Monitor' price='650' subtotal='$650'/>


         </div>
        
        </Container>
        
        </>

    </div>
  )
}

export default CartPages