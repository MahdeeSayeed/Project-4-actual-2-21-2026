import React from 'react'

const Button = ({Button}) => {
  return (
   
   <div className='relative'>

     <Button  className={`w-30px bg-red-400 text-white text-xs lg:text-base flex justify-center items-center px-8 py-3 lg:px-12  lg:py-3`}>{Button}</Button>

   </div>
   
  )
}

export default Button