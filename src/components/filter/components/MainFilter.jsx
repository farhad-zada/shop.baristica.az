import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import PageText from '../../../content/PagesText.json'
import MainFilterCard from './MainFilterCard';

const { filter } = PageText
export default function MainFilter() {
  const { lang } = useSelector((state) => state.baristica);
  const [activeFilters,setActiveFilters] = useState([])
  
  
  return (
    <div className='mainFilter flex j-between wrap'>
        {
            lang && filter[lang]?.mainFilter?.simpleFilter?.content.map(
                (content,index) => <MainFilterCard img={content?.img} text={content?.text} index={index} activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
            )
        }
    </div>
  )
}
