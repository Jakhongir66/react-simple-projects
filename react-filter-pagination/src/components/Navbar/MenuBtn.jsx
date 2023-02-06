import React from 'react';

const MenuBtn = ({setIsOpenMenu, isOpenMenu}) => {
   return (
      <button
         onClick={() => setIsOpenMenu(!isOpenMenu)}
         type="button"
         className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
         aria-controls="mobile-menu" aria-expanded="false"
      >
         <span className="sr-only">Open main menu</span>
         <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
         </svg>

         <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
         </svg>
      </button>
   );
};

export default MenuBtn;
