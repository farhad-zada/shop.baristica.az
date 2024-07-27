import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './cartLeft.css'
import PagesText from '../../../../content/PagesText.json'

import OrderIcon from '../../../../assets/images/icons/order.svg'
import CartAuthorization from './components/CartAuthorization';
import CartUserInfo from './components/CartUserInfo';
import CartDelivery from './components/CartDelivery';
import CartOrderInfo from './components/CartOrderInfo';

const { cart } = PagesText
export default function CartLeft() {
  const { lang, token, user } = useSelector((state) => state.baristica);

  const [cartUserInfo, setCartUserInfo] = useState({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    orderTo: 'me'
  })
  return (
    <div className='cartLeft'>
      <h2 className='f16 green600 cartPage-head'>Baristica / {cart[lang]?.head?.pageName ? cart[lang]?.head.pageName : ''}</h2>
      <h3 className='cartPage-subhead flex a-center f30 green800'>
        <img src={OrderIcon} alt="" />
        <span>{cart[lang]?.head?.pageName ? cart[lang]?.head.pageName : ''}</span>
      </h3>

      {
        token ? <></> : <CartAuthorization authorization={lang ? cart[lang]?.authorization : {}} />
      }
      <CartUserInfo
        info={lang ? cart[lang]?.userInfo : {}}
        user={user}
        cartUserInfo={cartUserInfo}
        setCartUserInfo={setCartUserInfo}
        token={token}
      />
      <CartDelivery info={lang ? cart[lang]?.delivery : {}} />
      <CartOrderInfo info={lang ? cart[lang]?.orderInfo : {}} />
      
    </div>
  )
}
