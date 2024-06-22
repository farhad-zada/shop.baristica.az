import React from 'react';
import './pagination.css'; // Подключение стилей

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`page-number ${i === currentPage ? 'active' : ''}`}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push(<span key={i}>...</span>);
      }
    }
    return pages;
  };

  return (
    <div className="pagination">
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;
