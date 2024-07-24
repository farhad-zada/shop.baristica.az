import React, { useState } from 'react'
import CartLeft from './components/cartLeft/CartLeft';
import './cart.css'
import CartRight from './components/cartRight/CartRight';

const Cart = () => {
    return (
        <div className='cart container flex j-between'>
            <CartLeft />
            <CartRight />
        </div>
    )
}

export default Cart