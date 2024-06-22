import React, { useState } from 'react'
import './favoritesBody.css'
import PageText from '../../../../content/PagesText.json'
import ProductCard from '../../../../components/cards/productCard/ProductCard'
import Pagination from '../../../../components/pagination/Pagination';

import DotsIcon from '../../../../assets/images/icons/dots.svg'
import { useSelector } from 'react-redux';

const { favorites } = PageText

export default function FavoritesBody() {
  const { lang } = useSelector((state) => state.baristica);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className='favoritesBody'>
        <div className="container">
            <div className="favoritesBody-content">
                <div className="favoritesBody-products flex j-between wrap">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>
            </div>
            <div className="flex j-between">
              <div className="loadMore-btn flex a-center border16">
                <span className="green800 f18">
                {favorites[lang]?.loadMore_btn}
                </span>
                <span >
                    <img src={DotsIcon} alt="" />
                </span>
              </div>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
        </div>
    </div>
  )
}
