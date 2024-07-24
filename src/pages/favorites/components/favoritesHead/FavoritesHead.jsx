import React, { useState } from 'react'
import './favoritesHead.css'

import Filter from '../../../../components/filter/Filter';
import Filters from '../../../../components/filters/Filters';
import PageHeadingLeft from '../../../../components/pageHeadingLeft/PageHeadingLeft';

export default function FavoritesHead(props) {
    const  { content } = props
    const [mainFilter, setMainFilter] = useState(false)
    const [priceFilter, setPriceFilter] = useState(false)
    const [productCountFilter, setProductCountFilter] = useState(false)

    return (
        <div className='favoritesHead'>
            <div className="container">
                <div className="favoritesHead-content flex j-between a-center">
                    <PageHeadingLeft content={content} />

                    <Filters
                        mainFilter={mainFilter}
                        setMainFilter={setMainFilter}
                        priceFilter={priceFilter}
                        setPriceFilter={setPriceFilter}
                        productCountFilter={productCountFilter}
                        setProductCountFilter={setProductCountFilter}
                    />
                </div>
            </div>
            <Filter status={mainFilter} setStatus={setMainFilter} />
        </div>
    )
}
