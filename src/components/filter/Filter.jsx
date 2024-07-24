import React from 'react'
import { useSelector } from 'react-redux';
import PagesText from '../../content/PagesText.json'
import Tabs from '../tabs/Tabs'
import MainFilter from './components/MainFilter';
import './filter.css'

import ArrowUpward from '../../assets/images/icons/arrowUpward.svg'


const { filter } = PagesText;
export default function Filter({status,setStatus}) {
  const { lang } = useSelector((state) => state.baristica);

  return (
    <div className={status ? 'filter active' : 'filter'}>
        <div className="container">
        <Tabs>
            <div label={lang ? filter[lang]?.mainFilter.simpleFilter.heading : ''} activeColor={'white'}>
              <MainFilter />
            </div>
            <div label={lang ? filter[lang]?.mainFilter.advancedFilter.heading : ''} activeColor={'white'}>
              
            </div>
        </Tabs>
        <span className="closeFilter" onClick={() => setStatus(false)}>
          <img src={ArrowUpward} alt="" />
        </span>
        </div>
    </div>
  )
}
