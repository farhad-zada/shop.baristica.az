import React, { useEffect, useState } from 'react'
import Subscriptions from '../../components/subscriptions/Subscriptions'
import FavoritesHead from './components/favoritesHead/FavoritesHead'

import PageText from '../../content/PagesText.json'
import ProductsCatalog from '../../components/productsCatalog/ProductsCatalog'
import { useDispatch, useSelector } from 'react-redux'

import FavoritesService from '../../services/favories.service'
import Loading from '../../components/loading/Loading'
import { setFavorites } from '../../redux/slice'


const { favorites } = PageText
export default function Favorites() {
  const { favoritesProducts, token } = useSelector((state) => state.baristica);
  const [loading,setLoading] = useState(false)

  const favoritesService = new FavoritesService()
  const dispatch = useDispatch()
  
  const getFavorites = async (token) => {
    setLoading(true)
    try {
      const response = await favoritesService.getFavorites(token)
      const data = response.data
      dispatch(setFavorites(data))
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(token){
      getFavorites(token)
    }
  },[token])

  return (
    <div className='favorites'>
      <Loading status={loading} />
        <FavoritesHead content={favorites} />
        <ProductsCatalog content={favorites} products={favoritesProducts}/>
        <Subscriptions />
    </div>
  )
}
