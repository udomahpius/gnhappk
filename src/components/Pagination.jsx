import React from 'react';

const Pagination = ({ prospectsPerPage, totalProspects, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProspects / prospectsPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if(currentPage !== Math.ceil(totalProspects / prospectsPerPage)) paginate(currentPage + 1)
  }
  const prevPage = () => {
    if(currentPage !== 1) paginate(currentPage - 1)
  }

  return (
    <nav aria-label="Page navigation example" className="mx-auto w-[50%] flex justify-center mt-8">
      <ul className="flex items-center -space-x-px h-8 text-sm ">
        <li>
          <button className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={prevPage}>
            Previous
          </button>
        </li>

        {pageNumbers.map(number => (
          <li key={number}>
            <button type="button" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
        <li>
          <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={nextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;