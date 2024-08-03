import React, { useState } from 'react'
import './cartMain.css'

import { calculateTotalDiscount, calculateTotalPrice } from '../../../../../../utils/price/price'

import { CartIcon, ArrowRightCart } from '../../../../../../assets/images/icons/icons'
import CartMainProduct from './cartMainProduct/CartMainProduct'
import CustomInput from '../../../../../../components/form/customInput/CustomInput'

export default function CartMain(props) {
    const { info, lang, cart } = props

    const [couponText, setCouponText] = useState('')
    const [changeProduct,setChangeProduct] = useState('')


    const [repeatOrder, setRepeatOrder] = useState(false);

    const handleCheckboxChange = () => {
        setRepeatOrder(!repeatOrder);
    };

    const onInputChange = (e) => {
        const { value } = e.target
        setCouponText(value)
    }

    const handleOptionSelect = (value) => {

    };

    const applyCoupon = () => {

    }

    return (
        <div className='cartMain border36 cartActions'>
            <h2 className='f24 green800 flex a-center actionHeading'>
                <span className="iconBgGreen">
                    {CartIcon}
                </span>
                <span>{info?.heading}</span>
            </h2>

            <div className="cartMain-order_info flex j-between a-center">
                <div className="cartMain-order_info-element border12  w-100">
                    <h3 className='f12 green600'>{info?.deliveryDetails?.roasting}</h3>
                    <h2 className='f20 green800'>7 Февраля 13:00</h2>
                </div>
                {ArrowRightCart}
                <div className="cartMain-order_info-element border12 w-100">
                    <h3 className='f12 green600'>{info?.deliveryDetails?.forwarding}</h3>
                    <h2 className='f20 green800'>8 Февраля</h2>
                </div>
            </div>
            {/* products from cart  */}
            <div className="cartMain-products">
                {
                    cart && cart.map((product,key) => (
                        <CartMainProduct product={product} key={key} lang={lang} changeProduct={changeProduct} setChangeProduct={setChangeProduct} />
                    ))
                }
            </div>

            <div className="cartMain-order_info">
                <div className="flex j-between">
                    <ul className="flex column g8 w-48">
                        {
                            info?.orderInfo?.map((heading, index) => (
                                <li className='green800 f20' key={index}>
                                    {heading}
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="flex column g8">
                        <li className='green800 f20'>{calculateTotalPrice(cart)?.toFixed(2)} AZN</li>
                        <li className='green800 f20'>Бесплатно</li>
                        <li className='green800 f20'>{calculateTotalDiscount(cart)?.toFixed(2)} AZN</li>
                        <li className='green800 f20'>{(calculateTotalPrice(cart) - calculateTotalDiscount(cart))?.toFixed(2)} AZN</li>
                    </ul>
                </div>
            </div>

            <h3 className="cartActionSubheading green800 f20">
                {info?.coupon?.heading}
            </h3>

            <div className="flex j-between a-center cartMain-coupon">
                <div className="cartMain-coupon_input">
                    <CustomInput
                        name='coupon'
                        placeholder={info?.coupon?.couponInput}
                        onChange={onInputChange}
                        value={couponText}
                    />
                </div>
                <div className="cartMain-submit_coupon">
                    <span className='f20 white border20 pointer' onClick={applyCoupon}>
                        {info?.coupon?.couponBtn}
                    </span>
                </div>
            </div>

            {/* <div className="cartMain-repeat_order">
                <div className="flex j-between a-center">
                    <div className="cartMain-repeat_order-checkbox">
                        <CustomCheckbox
                            checked={repeatOrder}
                            onChange={handleCheckboxChange}
                            label={info?.repeatOrder?.checkbox}
                        />
                    </div>
                    <div className="cartMain-repeat_order-select">
                        <CustomSelect options={info?.repeatOrder?.selectValues} onOptionSelect={handleOptionSelect} />
                    </div>
                </div>
                <p className='f18 gray600 text-center'>{info?.repeatOrder?.hint}</p>
            </div> */}
        </div>
    )
}
