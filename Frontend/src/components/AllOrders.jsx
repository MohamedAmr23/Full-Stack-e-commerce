import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext.jsx'

const AllOrders = () => {
  const {clearCart} = useContext(CartContext)
  useEffect(()=>{
    clearCart()
  },[])
  return (
    <div>AllOrders</div>
  )
}

export default AllOrders