import React from 'react'
import { useSelector } from 'react-redux';
import PageText from '../../content/PagesText.json'
import './filters.css'

import FilterIcon from '../../assets/images/icons/filter.svg'
import SellIcon from '../../assets/images/icons/sell.svg'
import CountFilterIcon from '../../assets/images/icons/countFilter.svg'
import ArrowUp from '../../assets/images/icons/arrowUp.svg'
import ArrowDown from '../../assets/images/icons/arrowDown.svg'

const { filter } = PageText
export default function Filters(props) {
    const {
        mainFilter,
        setMainFilter,
        priceFilter,
        setPriceFilter,
        productCountFilter,
        setProductCountFilter
    } = props
    const { lang } = useSelector((state) => state.baristica);

    return (
        <div className="flex a-center">
            <div
                className={mainFilter ? "mainFilter filterHeading flex a-center active" : "mainFilter filterHeading flex a-center"}
                onClick={() => setMainFilter(!mainFilter)}
            >
                <span><img src={FilterIcon} alt="" /></span>
                <span className='f18 green800'>{lang ? filter[lang].mainFilter.heading : ''}</span>
                <span className="arrowIcons">
                    {
                        mainFilter
                            ?
                            <img src={ArrowUp} alt="" />
                            :
                            <img src={ArrowDown} alt="" />
                    }
                </span>
            </div>
            <div
                className={priceFilter ? "priceFilter filterHeading flex a-center active" : "priceFilter filterHeading flex a-center"}
                onClick={() => setPriceFilter(!priceFilter)}
            >
                <span><img src={SellIcon} alt="" /></span>
                <span className='f18 green800'>{lang ? filter[lang].priceFilter.heading : ''}</span>
                {
                    priceFilter
                        ?
                        <img src={ArrowUp} alt="" />
                        :
                        <img src={ArrowDown} alt="" />
                }
            </div>
            <div
                className={productCountFilter ? "productCountFilter filterHeading flex a-center active" : "productCountFilter filterHeading flex a-center"}
                onClick={() => setProductCountFilter(!productCountFilter)}
            >
                <span>
                    <img src={CountFilterIcon} alt="" />
                </span>
                <span className='f18 green800'>{lang ? filter[lang].productCountFilter.heading : ''}</span>
                {
                    productCountFilter
                        ?
                        <img src={ArrowUp} alt="" />
                        :
                        <img src={ArrowDown} alt="" />
                }
            </div>
        </div>
    )
}
