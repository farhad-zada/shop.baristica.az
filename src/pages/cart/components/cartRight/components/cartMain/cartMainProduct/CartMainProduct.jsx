import React, { useEffect, useState } from 'react'
import './cartMainProduct.css'

import { getPrice, getDiscountSign } from '../../../../../../../utils/price/price'

import { Delete } from '../../../../../../../assets/images/icons/icons'
import CustomSelect from '../../../../../../../components/form/customSelect/CustomSelect'
import CustomCounter from '../../../../../../../components/form/customCounter/CustomCounter'
import { deleteFromCart } from '../../../../../../../utils/cartActions/cartActions'
import { useDispatch } from 'react-redux'
import { setCart } from '../../../../../../../redux/slice'

export default function CartMainProduct(props) {

    const { product, key, lang } = props

    const [productTypes, setProductTypes] = useState({
        "az": [
            { "text": "Fincan üçün (orta)", "value": "forCupMiddle" },
            { "text": "Cezvə üçün (incə)", "value": "forTurkMiddle" },
            { "text": "French Press üçün (iri)", "value": "forFrenchPress" },
            { "text": "Kafel kofenanı üçün (iri)", "value": "forTileMachine" },
            { "text": "Kemeks üçün (iri)", "value": "forKemeks" },
            { "text": "Pour Over üçün (orta)", "value": "forPourover" },
            { "text": "AeroPress üçün (orta)", "value": "forAeropress" },
            { "text": "Dənələrdə", "value": "forAeropress" }
        ],
        "en": [
            { "text": "For cup (medium)", "value": "forCupMiddle" },
            { "text": "For cezve (fine)", "value": "forTurkMiddle" },
            { "text": "For French press (coarse)", "value": "forFrenchPress" },
            { "text": "For tile coffee maker (coarse)", "value": "forTileMachine" },
            { "text": "For Chemex (coarse)", "value": "forKemeks" },
            { "text": "For pour over (medium)", "value": "forPourover" },
            { "text": "For AeroPress (medium)", "value": "forAeropress" },
            { "text": "In beans", "value": "forAeropress" }
        ],
        "ru": [
            { "text": "Для чашки (средний)", "value": "forCupMiddle" },
            { "text": "Для турки (мелкий)", "value": "forTurkMiddle" },
            { "text": "Для френч пресса (крупный)", "value": "forFrenchPress" },
            { "text": "Для кафельной кофеварки (крупный)", "value": "forTileMachine" },
            { "text": "Для кемекса (крупный)", "value": "forKemeks" },
            { "text": "Для пуровера (средний)", "value": "forPourover" },
            { "text": "Для аэропресса (средний)", "value": "forAeropress" },
            { "text": "В зернах", "value": "forAeropress" }
        ]
    })


    const dispatch = useDispatch()

    const handleCounterChange = (value) => {
        if (product && product.cartCount) {
            if (value !== +product.cartCount) {
                let cart = JSON.parse(localStorage.getItem('cart'))

                let productIndex = cart.findIndex((cartProduct) => cartProduct._id === product._id &&
                    product.selectedOption._id === product.selectedOption._id)
                cart[productIndex] = { ...product, cartCount: value }

                dispatch(setCart(cart))
                localStorage.setItem('cart', JSON.stringify(cart))
            }
        }
    };

    const handleOptionSelect = (value) => {

    };

    const deleteProduct = (product) => {
        const cart = deleteFromCart(product)
        dispatch(setCart(cart))
    }

    useEffect(() => {

    }, [])
    return (
        <div className='cartMain-product' key={key}>

            <div className="cartMain-product_head flex j-between a-center">

                <div className="cartMain-product_head-left flex a-center">
                    <div className="cartMain-product_head-img border16">
                        <img src={product?.image} alt="" />
                    </div>
                    <div className="cartMain-product_head-info">
                        {/* product name  */}
                        <h2 className='f18 green800'>{product?.name[lang] ? product?.name[lang] : ''}</h2>
                        <h3 className='flex j-between'>
                            {/* product type  */}
                            <span className='blueAccent f14'>{product?.productType[lang] ? product?.productType[lang] : 'Кофе'}</span>
                            {/* <span className='gray600 f14'>ID: {product?._id ? product?._id : ''} </span> */}
                        </h3>
                    </div>
                </div>

                <div className="cartMain-product_head-right flex a-center">
                    <p className='flex a-center'>
                        <span className='f18 green800'>{getPrice(+product?.selectedOption?.price, product?.discountType, +product?.discount, +product?.cartCount).toFixed(2)} AZN</span>
                        <span className='f14 gray600'>{getDiscountSign(product?.discountType, +product?.discount)}</span>
                    </p>
                    <span className='pointer' onClick={() => deleteProduct(product)}>{Delete}</span>
                </div>
            </div>

            <div className="cartMain-product_body mt12 flex j-between">
                <div className="cartMain-product_type w-48">
                    <CustomSelect options={lang ? productTypes[lang] : []} onOptionSelect={handleOptionSelect} />
                </div>
                <div className="cartMain-product_counter">
                    <CustomCounter initialValue={product?.cartCount} onChange={handleCounterChange} />
                </div>
                <div className="cartMain-product_weight">
                    {/* <CustomSelect options={weight} onOptionSelect={handleOptionSelect} selected={product?.selectedOption} /> */}
                    {
                        product?.selectedOption
                            ?
                            <span className='green600 f18'>{product?.selectedOption.weight}г</span>
                            :
                            <></>
                    }

                </div>
            </div>
        </div>
    )
}
