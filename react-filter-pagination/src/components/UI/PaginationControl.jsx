import React from 'react';

const PaginationControl = ({state, changePage}) => {

   function createElements(n) {
      const elements = [];
      for (let i = 1; i < n + 1; i++) {
         elements.push(
            <button
               key={i}
               onClick={() => changePage(i)}
               data-id={i}
               aria-current="page"
               className={`relative inline-flex items-center border border-gray-300
                     bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 ${state.currentPage === i
                  ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}
            >{i}</button>
         );
      }
      return elements;
   }

   return (
      <div>
         <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="PaginationControl">
            <button
               onClick={() => changePage(--state.currentPage)}
               className={`relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 ${state.currentPage === 1 ? 'disabled-link' : ''}`}
            >
               <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true">
                  <path fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clipRule="evenodd"/>
               </svg>
            </button>
            {createElements(Math.ceil(state.total / state.perPage))}
            <button
               onClick={() => changePage(++state.currentPage)}
               className={`relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 ${state.currentPage === Math.ceil(state.total / state.perPage) ? 'disabled-link' : ''}`}>
               <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true">
                  <path fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"/>
               </svg>
            </button>
         </nav>
      </div>
   );
};

export default PaginationControl;
