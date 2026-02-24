import React from 'react'
import Products from './Products'

const SectionH = ({title, heading}) => {
  return (
    <div className='mt-6'>
        <h6 className='text-primary flex gap-2.5'><div className='w-5 h-8 bg-primary rounded-2xl mb-7 font-poppins'></div>{title}</h6>
     <h2 className='mb-5 text-3xl font-semibold mt-6 font-Inter'>{heading}</h2>
     <button  className=' absolute bottom-200 w-30px bg-red-400 text-white text-2xl flex justify-center items-center px-11 py-2'>View All</button>
   
 
    </div>
  )
}

export default SectionH