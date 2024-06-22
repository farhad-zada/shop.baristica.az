import React from 'react'
import Subscriptions from '../../components/subscriptions/Subscriptions'
import FavoritesBody from './components/favoritesBody/FavoritesBody'
import FavoritesHead from './components/favoritesHead/FavoritesHead'

export default function Favorites() {
  return (
    <div className='favorites'>
        <FavoritesHead />
        <FavoritesBody />
        <Subscriptions />
    </div>
  )
}
