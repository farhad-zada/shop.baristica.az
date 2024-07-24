import React from 'react'
import './productDetailBodyRight.css'
import { Fire, Vector } from '../../../../../../assets/images/icons/icons'

export default function ProductDetailBodyRight(props) {
  const { info } = props
  return (
    <div className='productDetail-body_right'>
      <div className="productDetail-body_right-component border20">
        <div className="productDetail-body_right-icon">
          <span className="iconBgGreen flex j-center a-center">
            {Fire}
          </span>
        </div>
        <div className="text-block">
          <h3 className='f18 gray500'>{info?.roasterForRoasting}</h3>
          <h2 className='f20 green800'>Loring S70 Peregrine</h2>
        </div>

        <div className="text-block">
          <h3 className='f18 gray500'>{info?.roastingLevel}</h3>
          <h2 className='f20 green800'>Loring S70 Peregrine</h2>
        </div>
      </div>

      <div className="productDetail-body_right-component border20">
        <div className="productDetail-body_right-icon">
          <span className="iconBgGreen">
            {Vector}
          </span>
        </div>
        <div className="text-block">
          <h3 className='f18 gray500'>{info?.region}</h3>
          <h2 className='f20 green800'>Loring S70 Peregrine</h2>
        </div>

        <div className="text-block">
          <h3 className='f18 gray500'>{info?.processingMethod}</h3>
          <h2 className='f20 green800'>Loring S70 Peregrine</h2>
        </div>

        <div className="text-block">
          <h3 className='f18 gray500'>{info?.grainSize}</h3>
          <h2 className='f20 green800'>Loring S70 Peregrine</h2>
        </div>

        <div className="text-block">
          <h3 className='f18 gray500'>{info?.growingHeight}</h3>
          <h2 className='f20 green800'>Loring S70 Peregrine</h2>
        </div>
      </div>

      <div className="productDetail-body_right-component border20">
        <div className="text-block">
          <h3 className='f18 gray500'>{info?.qGrader}</h3>
          <h2 className='f36 green800'>80</h2>
        </div>
      </div>
    </div>
  )
}
