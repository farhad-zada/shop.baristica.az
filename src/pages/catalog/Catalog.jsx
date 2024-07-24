import React, { useEffect, useState } from 'react'
import Subscriptions from '../../components/subscriptions/Subscriptions'

import PageText from '../../content/PagesText.json'
import ProductsCatalog from '../../components/productsCatalog/ProductsCatalog'
import CatalogHead from './components/catalogHead/CatalogHead'

import ProductsService from '../../services/products.service'
import Loading from '../../components/loading/Loading'

const { catalog } = PageText
export default function Catalog() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const productsService = new ProductsService()

  const getProducts = async () => {
    setLoading(state => state = true)
    try {
      const response = await productsService.getProducts()
      setProducts(response.data)
      setLoading(state => state = false)
    } catch (error) {
      setLoading(state => state = false)
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='favorites'>
      <Loading status={loading} />
      <CatalogHead content={catalog} />
      <ProductsCatalog content={catalog} products={products} />
      <Subscriptions />
    </div>
  )
}
