import React from 'react'
import './productDetailBody.css'
import ProductDetailBodyLeft from './components/productDetailBodyLeft/ProductDetailBodyLeft'
import ProductDetailBodyMiddle from './components/productDetailBodyMiddle/ProductDetailBodyMiddle'
import ProductDetailBodyRight from './components/productDetailBodyRight/ProductDetailBodyRight'

export default function ProductDetailBody(props) {
  const {info} = props
  return (
    <div className='productDetail-body flex j-between'>
        <ProductDetailBodyLeft info={info?.navigation} />
        <ProductDetailBodyMiddle info={info?.middlePart} />
        <ProductDetailBodyRight info={info?.rightPart} />
    </div>
  )
}
