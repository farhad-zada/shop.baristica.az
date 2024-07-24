import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './productCard.css'


import CompareIcon from '../../../assets/images/icons/compare.svg'
import FavoritesIcon from '../../../assets/images/icons/favorites.svg'

import { CartIcon } from '../../../assets/images/icons/icons'
import PagesText from '../../../content/PagesText.json'

import { addToCart } from '../../../utils/cartActions/cartActions'
import { getPrice } from '../../../utils/price/price'
import { editCompareArray } from '../../../utils/compare/compare.util'
import { changeCompare, setCart } from '../../../redux/slice'
import { useNavigate } from 'react-router-dom'
import { OptionsBlock } from './components/OptionsBlock'

const { home } = PagesText;
const { body } = home;

export default function ProductCard(props) {
    const { favorite, product } = props
    const { lang } = useSelector((state) => state.baristica);

    const [productForCart, setProductForCart] = useState({ ...product, cartCount: 1 })


    const [options, setOptions] = useState(product?.options)
    const [selectedOption, setSelectedOption] = useState(null)
    const [price, setPrice] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const counter = (e, type) => {
        e.stopPropagation()
        if (type === 'inc') {
            setProductForCart(state => {
                return { ...state, cartCount: state.cartCount + 1 }
            })
        } else {
            if (productForCart.cartCount > 1) {
                setProductForCart(state => {
                    return { ...state, cartCount: state.cartCount - 1 }
                })
            }
        }
    }

    const dispatchCart = (e, product) => {
        const cart = addToCart(e, product)
        dispatch(setCart(cart))
    }

    const addToCompare = (e) => {
        e.stopPropagation()
        editCompareArray(product)
        dispatch(changeCompare(product))
    }

    return (
        <div className='productCard pointer' onClick={() => { navigate(`/products/${product?._id}`) }}>

            <div className="productCard-head flex j-between a-center">
                <div className="productCard-info flex a-center">

                </div>

                <div className="productCard-actions flex">
                    <span onClick={(e) => addToCompare(e)} className='pointer'>
                        <img src={CompareIcon} alt="" />
                    </span>
                    <span className={favorite ? 'productCard-favorite_icon pointer active' : 'productCard-favorite_icon pointer'}>
                        <img src={FavoritesIcon} alt="" />
                    </span>
                </div>
            </div>

            <div className="productCard-img flex a-center j-center">
                <img src={product?.image} alt="" />
            </div>

            <div className="productCard-body">

                <h3 className='blueAccent f18'>для эспрессо</h3>
                {/* product name  */}
                <h2 className='green800 f20'>{product?.name[lang]}</h2>
                {/* product description  */}
                <p className='gray600 f16'>{product?.description[lang]}</p>
                {/* actual price  */}
                {
                    product?.discount > 0
                        ?
                        <h4 className='gray400 f16'>{(selectedOption?.price / 100).toFixed(2)} ₼</h4>
                        :
                        <></>
                }

                <div className="productCard-price flex j-between a-center">
                    {/* price with discount  */}
                    <span className='green800 f30'>
                        {getPrice(price, product?.discountType, +product?.discount).toFixed(2)} ₼
                    </span>

                    <OptionsBlock
                        options={options}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        setPrice={setPrice}
                    />

                </div>
            </div>

            <div className="productCard-foot flex a-center" onClick={(e) => {e.stopPropagation()}}>
                <button type='button' className="add-to_cart flex a-center white f16" onClick={(e) => dispatchCart(e, { ...productForCart, selectedOption: selectedOption })}>
                    {CartIcon}
                    <span >{body[lang]?.products?.btn}</span>
                </button>
                <div className="add-counter flex a-center f24 green800" >
                    <span className='pointer' onClick={(e) => counter(e, 'dec')}>-</span>
                    <span>{productForCart?.cartCount}</span>
                    <span className='pointer' onClick={(e) => counter(e, 'inc')}>+</span>
                </div>
            </div>
        </div>
    )
}
