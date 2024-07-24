import React from 'react'
import './interested.css'
import ProductCard from '../../../../components/cards/productCard/ProductCard'

export default function Interested(props) {
    const { info } = props
    return (
        <div className='interested'>
            <h2 className='f30 green800 interestedHeading'>{info?.heading}</h2>
            <div className="interested-cards flex j-between">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}
