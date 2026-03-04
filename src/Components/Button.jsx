import React from 'react'

const Button = ({children}) => {
  return (
   
   <div className='relative'>

     <button className={`w-30px bg-red-400 text-white text-xs lg:text-base flex justify-center items-center px-8 py-3 lg:px-12  lg:py-3`}>{children}</button>

   </div>
   
  )
}

export default Button