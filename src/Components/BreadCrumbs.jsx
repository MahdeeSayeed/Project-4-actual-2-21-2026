import React from 'react'
import { useLocation } from 'react-router'
const BreadCrumbs = () => {
 
    let {pathname} = useLocation()

    const Location= pathname.split("/")[1]
 
    return (
    <div className='flex gap-2 mb-3'>

        <h2>Home</h2>
        <h2>/</h2>
        <h2>Shop</h2>
    </div>
  )
}

export default BreadCrumbs