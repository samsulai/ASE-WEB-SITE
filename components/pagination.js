import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        className="mr-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`mx-1 px-3 py-2 rounded-md ${
            pageNumber === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'
          } hover:bg-blue-500 hover:text-white focus:outline-none`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
