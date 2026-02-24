import React from 'react'
import  Container  from './Container'
import Flex from './Flex'


const Header = () => {
  return (
   
   
       
        
    <div className='bg-black py-3'>
      <Container>
         <Flex className='justify-center'>
          <div className='w-[95%] justify-end item-center'>
      <p className='text-white'>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <a href="#">ShopNow</a>
       
      </p>

            
          </div>
      <div className='w-[93%] flex justify-end item-center'>
      <select className='bg-white text-black'name='language'>
        <option value="English">English</option>
        <option value="Chinese">Chinese</option>
        <option value="Japanese">Japanese</option>
        <option value="German">German</option>
      </select>



      </div>



         </Flex>
   



   
       
   



    


        
        
        
        
        
        </Container>  

  </div>
   




        
   
   
   
   
   
    
  )
}

export default Header