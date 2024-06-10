import React from 'react'
import { useSelector } from 'react-redux'
import './productCard.css'

import StarIcon from '../../../assets/images/icons/star.svg'
import FeedbackIcon from '../../../assets/images/icons/feedback.svg'
import CompareIcon from '../../../assets/images/icons/compare.svg'
import FavoritesIcon from '../../../assets/images/icons/favorites.svg'
import CoffeeImg from '../../../assets/images/coffee.png'

import { CartIcon } from '../../../assets/images/icons/icons'
import PagesText from '../../../content/PagesText.json'

const { home } = PagesText;
const { body } = home;

export default function ProductCard() {
  const { lang } = useSelector((state) => state.baristica);

    console.log(body)
  return (
    <div className='productCard'>

        <div className="productCard-head flex j-between a-center">
            <div className="productCard-info flex a-center">
                <span className='f16 green800 flex a-center'>
                    <img src={StarIcon} alt="" />
                    4.5
                </span>
                <span className='f16 green800 flex a-center'>
                    <img src={FeedbackIcon} alt="" />
                    45
                </span>
            </div>

            <div className="productCard-actions flex">
                <span>
                    <img src={CompareIcon} alt="" />
                </span>
                <span>
                    <img src={FavoritesIcon} alt="" />
                </span>
            </div>
        </div>

        <div className="productCard-img flex a-center j-center">
            <img src={CoffeeImg} alt="" />
        </div>

        <div className="productCard-body">

            <h3 className='blueAccent f18'>для эспрессо</h3>
            <h2 className='green800 f20'>ЭФИОПИЯ СИДАМО</h2>
            <p className='gray600 f16'>Легкий кофе с нотами цветов, желтых фруктов и спелого лимона</p>

            <h4 className='gray400 f16'>24.99 ₼</h4>
            
            <div className="productCard-price flex j-between a-center">
                <span className='green800 f30'>19.99 ₼</span>
                <div className="productCard-mass flex green800 f18">
                    <span className='active'>200</span>
                    <span>1000</span>
                </div>
            </div>
        </div>

        <div className="productCard-foot flex a-center">
            <button className="add-to_cart flex a-center white f16">
                { CartIcon }
                <span>{body[lang]?.products?.btn}</span>
            </button>
            <div className="add-counter flex a-center f24 green800">
                <span className='pointer'>-</span>
                <span>1</span>
                <span className='pointer'>+</span>
            </div>
        </div>
    </div>
  )
}
