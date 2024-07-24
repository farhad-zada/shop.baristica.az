import React from 'react'
import { useSelector } from 'react-redux';

import './cartRight.css'
import PagesText from '../../../../content/PagesText.json'
import CartMain from './components/cartMain/CartMain';
import OrderComment from './components/OrderComment';

const { cart } = PagesText

export default function CartRight() {
  const { lang, cartProducts } = useSelector((state) => state.baristica);
  return (
    <div className='cartRight w-48'>
        <CartMain info={cart[lang]?.cartMain} lang={lang} cart={cartProducts} />
        <OrderComment info={cart[lang]?.orderComment} />
    </div>
  )
}
