import React from 'react'
import './productDetailBodyMiddle.css'
import Tabs from '../../../../../../components/tabs/Tabs'

export default function ProductDetailBodyMiddle(props) {
  const {info} = props
  return (
    <div className='productDetail-body_middle'>
      <Tabs>
            <div label={info?.tabs ? info?.tabs?.about : ''}>
              
            </div>
            <div label={info?.tabs ? info?.tabs?.recipes : ''}></div>
          </Tabs>
    </div>
  )
}
