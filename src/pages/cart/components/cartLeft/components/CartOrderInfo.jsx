import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RocketIcon } from '../../../../../assets/images/icons/icons'
import CustomCheckbox from '../../../../../components/form/customCheckbox/CustomCheckBox'
import { calculateTotalDiscount, calculateTotalPrice } from '../../../../../utils/price/price';
import OrdersService from '../../../../../services/orders.service';

import Loading from '../../../../../components/loading/Loading'
import DeliveryService from '../../../../../services/delivery.service';
import { setCart } from '../../../../../redux/slice';

export default function CartOrderInfo(props) {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false)
  const { lang, token, cartProducts,deliveryPrice } = useSelector((state) => state.baristica);

  const { info, cart, cartUserInfo, comment, deliveryMethod } = props

  const ordersService = new OrdersService()
  const deliveryService = new DeliveryService()

  const dispatch = useDispatch()

  const getDeliveryPrice = async () => {
    try {
      const response = await deliveryService.getDeliveryPrice()
    } catch (error) {
      
    }
  }

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  function groupProducts(products) {
    const groupedProducts = {};

    products.forEach(product => {
      const productId = product._id;
      const selectedOptionId = product.selectedOption._id;
      const cartCount = product.cartCount;
      const selectedPreparingType = product.selectedPreparingType

      if (!groupedProducts[productId]) {
        groupedProducts[productId] = {
          id: productId,
          options: []
        };
      }

      const existingOption = groupedProducts[productId].options.find(option => option.id === selectedOptionId);

      if (existingOption) {
        existingOption.quantity += cartCount;
        existingOption.coffeeProcessingType = selectedPreparingType ? selectedPreparingType : product.coffeeProcessingTypes[0]._id
      } else {
        groupedProducts[productId].options.push({
          id: selectedOptionId,
          quantity: cartCount,
          coffeeProcessingType: selectedPreparingType ? selectedPreparingType : product.coffeeProcessingTypes[0]._id
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

    let data = {}
    if (deliveryMethod === 'delivery') {
      data = {
        language: lang,
        order: {
          customer: {
            name: cartUserInfo?.name,
            lastname: cartUserInfo?.lastName,
            phone: cartUserInfo?.phone,
            email: cartUserInfo?.email
          },
          orderFor: cartUserInfo?.orderFor,
          deliveryMethod: deliveryMethod,
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
    } else{
      data = {
        language: lang,
        order: {
          customer: {
            name: cartUserInfo?.name,
            lastname: cartUserInfo?.lastName,
            phone: cartUserInfo?.phone,
            email: cartUserInfo?.email
          },
          orderFor: cartUserInfo?.orderFor,
          deliveryMethod: deliveryMethod,
          items: orders.items,
          coupon: 'Baristica',
          comment: comment
        }
      }
    }

    try {
      const response = await ordersService.postOrder(token, data)
      const redirectUrl = response.data.epoint.redirect_url
      window.open(redirectUrl)
      setLoading(false)
      dispatch(setCart([]))
      localStorage.setItem('cart', [])
    } catch (error) {
      setLoading(false)

    }
  }

  useEffect(() => {
    getDeliveryPrice()
  },[])

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
