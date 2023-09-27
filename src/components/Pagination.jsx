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
          <button className={`${currentPage !== 1 ? "hover:bg-SETLY-BLUE hover:text-white" : "hover:bg-gray-100 hover:text-slate-500"} flex items-center justify-center px-3 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-500 rounded-l-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
        </li>


        {pageNumbers.map(number => (
          <li key={number}>
            <button type="button" className={`${currentPage === number ? "bg-SETLY-BLUE text-white" : "bg-white" } flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-500 hover:bg-SETLY-BLUE hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
        <li>
          <button className={`${currentPage !== Math.ceil(totalProspects / prospectsPerPage) ? "hover:bg-SETLY-BLUE hover:text-white" : "hover:bg-gray-100 hover:text-slate-500"} flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-500 rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            onClick={nextPage} disabled={currentPage === Math.ceil(totalProspects / prospectsPerPage)}>
            Next
          </button>
          
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;