import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

const Pagination = ({ currentPage, totalPages, setCurrentPage }: any) => {
  const handlePageChange = (page: any) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const renderPaginationItems = () => {
    const pageNumbers = []
    const maxPagesToShow = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    return pageNumbers.map((page) => (
      <button
        key={page}
        className={page === currentPage ? 'active' : 'text-gray-200'}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </button>
    ))
  }

  return (
    <>
      <div className="mt-5 flex justify-end">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1 ? 'text-gray-200' : 'text-priamry'
          } mr-2 px-4 py-2 `}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <div className="flex space-x-4 font-semibold">
          {' '}
          {renderPaginationItems()}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages ? 'text-gray-200' : 'text-priamry'
          } mr-2 px-4 py-2 `}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </>
  )
}

export default Pagination
