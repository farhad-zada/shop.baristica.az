import React from 'react'
import Subscriptions from '../../components/subscriptions/Subscriptions'
import CompareBody from './components/compareBody/CompareBody'
import CompareHead from './components/compareHead/CompareHead'

export default function Compare() {
  return (
    <div className='compare'>
        <CompareHead />
        <CompareBody /> 
        <Subscriptions />
    </div>
  )
}
