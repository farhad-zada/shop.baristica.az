import React from 'react'
import Subscriptions from '../../components/subscriptions/Subscriptions'
import CompareBody from './components/compareBody/CompareBody'
import CompareHead from './components/compareHead/CompareHead'
import { useSelector } from 'react-redux';

export default function Compare() {
  const { compareProducts } = useSelector((state) => state.baristica);

  return (
    <div className='compare'>
        <CompareHead />
        {
          compareProducts.length > 0
          ?
          <CompareBody />
          :
          <></>
        } 
        <Subscriptions />
    </div>
  )
}
