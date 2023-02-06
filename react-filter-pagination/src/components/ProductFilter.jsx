import React, {useRef} from 'react';

const ProductFilter = ({state, changeInput}) => {

   const input = useRef();
   const clearSearch = () => {
      changeInput('');
      input.current.value = '';
   }
   return (
      <div className="flex justify-between">
         <h2 className="text-2xl font-bold tracking-tight text-gray-900">Tovarlar</h2>
         <div>
            <label
               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Izlash</label>
            <div className="relative">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
               </div>
               <input
                  ref={input}
                  onChange={(event) => changeInput(event.target.value)}
                  type="search" id="search"
                  className="input-search block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Izlash" required/>
               {state.search &&
               <button
                  onClick={clearSearch}
                  type="button"
                  className="btn-clear text-white absolute right-1.5 bottom-1.5 bg-red-500
                           hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg
                           text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                  X
               </button>
               }
            </div>
         </div>
      </div>
   );
};

export default ProductFilter;
