import React, { useState } from 'react'
import CartLeft from './components/cartLeft/CartLeft';
import './cart.css'
import CartRight from './components/cartRight/CartRight';

const Cart = () => {
    const [comment,setComment] = useState('')
    return (
        <div className='cart container flex j-between'>
            <CartLeft comment={comment} />
            <CartRight comment={comment} setComment={setComment} />
        </div>
    )
}

export default Cart