import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './productsCatalog.css'
import ProductCard from '../cards/productCard/ProductCard'

import DotsIcon from '../../assets/images/icons/dots.svg'
import Pagination from '../pagination/Pagination';

export default function ProductsCatalog(props) {
    const { content, products } = props

    const { lang } = useSelector((state) => state.baristica);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className='productsCatalog'>
            <div className="container">
                <div className="productsCatalog-content">
                    <div className="productsCatalog-products flex j-between wrap">
                        {
                            products && products.map((product,key) => (
                                <ProductCard product={product} key={key} />
                            ))
                        }

                    </div>
                </div>
                <div className="flex j-between">
                    <div className="loadMore-btn flex a-center border16">
                        <span className="green800 f18">
                            {lang ? content[lang]?.loadMore_btn : ''}
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
