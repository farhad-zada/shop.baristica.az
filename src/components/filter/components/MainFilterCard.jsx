import React from 'react'
import '../filter.css'

export default function MainFilterCard(props) {
    const { img, text, index ,activeFilters,setActiveFilters} = props

    const changeActiveFilters = (index) => {
        const activeFilter = activeFilters.find((filter) => filter.id === index)
        if(activeFilter){
            const filteredActiveFilters = activeFilters.filter((filter) => filter.id !== index)
            setActiveFilters(filteredActiveFilters)
            return;
        }
        setActiveFilters([...activeFilters,{id: index}])
    }

  return (
    <div 
        className={
            activeFilters?.find((filter) => filter.id === index)
             ? 
             'mainFilter-card flex column a-center w-16 active' 
             : 
             'mainFilter-card flex column a-center w-16'
        }
        onClick={() => changeActiveFilters(index)}
    >
        <span className='mainFilter-card_img'>
            <img src={img} alt="" />
        </span>
        <span 
            className={
                activeFilters?.find((filter) => filter.id === index)
                 ?
                 'f14 text-center green800'
                 : 
                 'f14 text-center blue100'
                }
            >
            {text}
        </span>
    </div>
  )
}
