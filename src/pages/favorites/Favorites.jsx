import React from 'react'
import Subscriptions from '../../components/subscriptions/Subscriptions'
import FavoritesHead from './components/favoritesHead/FavoritesHead'

import PageText from '../../content/PagesText.json'
import ProductsCatalog from '../../components/productsCatalog/ProductsCatalog'


const { favorites } = PageText
export default function Favorites() {
  return (
    <div className='favorites'>
        <FavoritesHead content={favorites} />
        <ProductsCatalog content={favorites} />
        <Subscriptions />
    </div>
  )
}
