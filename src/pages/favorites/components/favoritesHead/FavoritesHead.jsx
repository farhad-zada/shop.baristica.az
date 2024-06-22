import React, { useState } from 'react'
import { useSelector } from "react-redux";
import './favoritesHead.css'
import PageText from '../../../../content/PagesText.json'

import FilterIcon from '../../../../assets/images/icons/filter.svg'
import SellIcon from '../../../../assets/images/icons/sell.svg'
import CountFilterIcon from '../../../../assets/images/icons/countFilter.svg'
import ArrowUp from '../../../../assets/images/icons/arrowUp.svg'
import ArrowDown from '../../../../assets/images/icons/arrowDown.svg'
import Filter from '../../../../components/filter/Filter';

const { favorites } = PageText
const { filter } = PageText
export default function FavoritesHead() {
  const [mainFilter,setMainFilter] = useState(false)
  const [priceFilter,setPriceFilter] = useState(false)
  const [productCountFilter,setProductCountFilter] = useState(false)
  const { lang } = useSelector((state) => state.baristica);

  return (
    <div className='favoritesHead'>
        <div className="container">
            <div className="favoritesHead-content flex j-between a-center">
                <div className="favoritesHead-content_left">
                    <h3 className='gray600 f16 flex a-center'>
                        <span>Baristica</span>
                        <span>/</span>
                        <span>{favorites[lang]?.head?.pageName}</span>
                    </h3>
                    <h2 className='green800 f36'>{favorites[lang]?.head?.pageName}</h2>
                </div>
                <div className="favoritesHead-content_right flex a-center">
                    <div 
                        className={mainFilter ? "mainFilter filterHeading flex a-center active" : "mainFilter filterHeading flex a-center"}
                        onClick={() => setMainFilter(!mainFilter)}
                    >
                        <span><img src={FilterIcon} alt="" /></span>
                        <span className='f18 green800'>{filter[lang].mainFilter.heading}</span>
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
                        <span className='f18 green800'>{filter[lang].priceFilter.heading}</span>
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
                        <span className='f18 green800'>{filter[lang].productCountFilter.heading}</span>
                        {
                                productCountFilter 
                                ?
                                <img src={ArrowUp} alt="" />
                                :
                                <img src={ArrowDown} alt="" />
                            }
                    </div>
                </div>
            </div>
        </div>
        <Filter status={mainFilter} setStatus={setMainFilter} />
    </div>
  )
}
