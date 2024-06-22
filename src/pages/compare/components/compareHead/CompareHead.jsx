import React from 'react'
import { useSelector } from 'react-redux';
import PageText from '../../../../content/PagesText.json'
import './compareHead.css'

const { compare } = PageText

export default function CompareHead() {
  const { lang } = useSelector((state) => state.baristica);

  return (
    <div className='compareHead'>
        <div className="container">
            <div className="compareHead-content flex j-between a-center">
                <div className="compareHead-content_left">
                    <h3 className='gray600 f16 flex a-center'>
                        <span>Baristica</span>
                        <span>/</span>
                        <span>{compare[lang]?.head?.pageName}</span>
                    </h3>
                    <h2 className='green800 f36'>{compare[lang]?.head?.pageName}</h2>
                </div>
                <div className="compareHead-content_right flex">
                <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"> </div>
                </div>
            </div>
        </div>
    </div>
  )
}
