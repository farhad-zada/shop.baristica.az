import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './productsCatalog.css'
import ProductCard from '../cards/productCard/ProductCard'

import DotsIcon from '../../assets/images/icons/dots.svg'
import Pagination from '../pagination/Pagination';
import Loading from '../loading/Loading';
import SuccessModal from '../successModal/SuccessModal';

export default function ProductsCatalog(props) {
    const { content, products, setProducts } = props

    const { lang } = useSelector((state) => state.baristica);

    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [successData, setSuccessData] = useState({})
    const totalPages = 20;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className='productsCatalog'>
            <Loading status={loading} />
            <SuccessModal status={successModal} setStatus={setSuccessModal} data={successData} />

            <div className="container">
                <div className="productsCatalog-content">
                    <div className="productsCatalog-products flex j-between wrap">
                        {
                            products && products.map((product, key) => (
                                <ProductCard
                                    product={product}
                                    key={key}
                                    setProducts={setProducts}
                                    setSuccessData={setSuccessData}
                                    setSuccessModal={setSuccessModal}
                                    setLoading={setLoading}
                                />
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
