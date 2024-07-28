import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { RocketIcon } from '../../../../../assets/images/icons/icons'
import CustomCheckbox from '../../../../../components/form/customCheckbox/CustomCheckBox'
import { calculateTotalDiscount, calculateTotalPrice } from '../../../../../utils/price/price';
import OrdersService from '../../../../../services/orders.service';

import Loading from '../../../../../components/loading/Loading'

export default function CartOrderInfo(props) {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false)
  const { lang, token, cartProducts } = useSelector((state) => state.baristica);

  const { info, cart, cartUserInfo, comment } = props

  const ordersService = new OrdersService()

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  function groupProducts(products) {
    const groupedProducts = {};

    products.forEach(product => {
      const productId = product._id;
      const selectedOptionId = product.selectedOption._id;
      const cartCount = product.cartCount;

      if (!groupedProducts[productId]) {
        groupedProducts[productId] = {
          id: productId,
          options: []
        };
      }

      const existingOption = groupedProducts[productId].options.find(option => option.id === selectedOptionId);

      if (existingOption) {
        existingOption.quantity += cartCount;
      } else {
        groupedProducts[productId].options.push({
          id: selectedOptionId,
          quantity: cartCount
        });
      }
    });

    return {
      items: Object.values(groupedProducts)
    };
  }

  const submitPayment = async () => {
    setLoading(true)
    const orders = groupProducts(cartProducts)

    const data = {
      language: lang,
      order: {
        customer: {
          name: cartUserInfo?.name,
          lastname: cartUserInfo?.lastName,
          phone: cartUserInfo?.phone,
          email: cartUserInfo?.email
        },
        orderFor: cartUserInfo?.orderFor,
        deliveryMethod: 'pickup',
        deliveryHours: {
          from: cartUserInfo?.from,
          to: cartUserInfo?.to
        },
        deliveryDate: cartUserInfo?.deliveryDate,
        deliveryAddress: cartUserInfo?.deliveryAddress,
        deliveryEnterance: cartUserInfo?.deliveryEnterance,
        deliveryApartment: cartUserInfo?.deliveryApartment,
        items: orders.items,
        coupon: 'Baristica',
        comment: comment
      }
    }
    try {
      const response = await ordersService.postOrder(token, data)
      const redirectUrl = response.data.epoint.redirect_url
      window.open(redirectUrl)
      setLoading(false)

    } catch (error) {
      setLoading(false)

    }
  }

  return (
    <div className='cartOrder-info border24'>
      <Loading status={loading} />
      <div className="cartOrder-info_content flex j-between">
        <ul className="cartOrder-info_headings flex column w-48">
          {
            info?.headings?.map((heading, index) => (
              <li className='white f20' key={index}>
                {heading}
              </li>
            ))
          }
        </ul>
        <ul className="cartOrder-info_values flex column">
          <li className='white f20'>{calculateTotalPrice(cart)?.toFixed(2)} AZN</li>
          <li className='white f20'>Бесплатно</li>
          <li className='white f20'>{calculateTotalDiscount(cart)?.toFixed(2)} AZN</li>
          <li className='white f20'>{(calculateTotalPrice(cart) - calculateTotalDiscount(cart))?.toFixed(2)} AZN</li>
        </ul>
      </div>

      <div className="cartOrder-info_orderBtn">
        <button className='flex  pointer a-center j-center f20 green800 border20 w-100' onClick={submitPayment}>
          {RocketIcon}
          <span>{info.orderBtn} - {(calculateTotalPrice(cart) - calculateTotalDiscount(cart))?.toFixed(2)} AZN</span>
        </button>
      </div>

      <div className="cartOrder-info_termsConditions">
        <CustomCheckbox
          checked={checked}
          onChange={handleCheckboxChange}
          label={info?.termsConditions}
        />
      </div>
    </div>
  )
}
