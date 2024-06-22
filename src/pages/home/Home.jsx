import React from 'react'
import HomeBanner from './components/homeBanner/HomeBanner'
import HomeProducts from './components/homeProducts/HomeProducts'
import HomeInstagram from './components/homeInstagram/HomeInstagram'
import HomeBlogs from './components/homeBlogs/HomeBlogs'
import HomeBonuses from './components/homeBonuses/HomeBonuses'
import HomeSubscriptions from './components/homeSubscriptions/HomeSubscriptions'
import HomeGuides from './components/homeGuides/HomeGuides'
import Subscriptions from '../../components/subscriptions/Subscriptions'

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeProducts />
      <Subscriptions />
      <HomeGuides />
      <HomeInstagram />
      <HomeBlogs />
      {/* <HomeBonuses /> */}
    </div>
  )
}
