import React from 'react'

const Flex =({children,className})=>{
  return (
    <div className='{`${className}Flex`}'>
     {children}

    </div>
  )
}

export default Flex