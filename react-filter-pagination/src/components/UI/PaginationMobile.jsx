import React from 'react';

const PaginationMobile = ({state, changePage}) => {
   return (
      <div className="flex flex-1 justify-between sm:hidden">
         <button
            onClick={() => changePage(--state.currentPage)}
            className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${state.currentPage === 1 ? 'disabled-link' : ''}`}>Oldingi
         </button>
         <button
            onClick={() => changePage(++state.currentPage)}
            className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${state.currentPage === Math.ceil(state.total / state.perPage) ? 'disabled-link' : ''}`}>Keyingi
         </button>
      </div>
   );
};

export default PaginationMobile;
