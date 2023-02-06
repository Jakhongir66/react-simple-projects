import React from 'react';
import {Link} from "react-router-dom";

const NavbarList = ({location}) => {
   return (
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
         <div className="flex flex-shrink-0 items-center">
            <img className="block h-8 w-auto lg:hidden"
                 src="https://devtools.vuejs.org/logo.svg" alt="Your Company"/>
            <img className="hidden h-8 w-auto lg:block"
                 src="https://devtools.vuejs.org/logo.svg" alt="Your Company"/>
         </div>
         <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
               <Link
                  to="/"
                  className={location.pathname === '/' ? 'bg-gray-900 text-white  px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium'}
                  aria-current="page">
                  Home

               </Link>
               <Link
                  to="/about"
                  className={location.pathname === '/about' ? 'bg-gray-900 text-white  px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium'}
               >
                  About
               </Link>
            </div>
         </div>
      </div>
   );
};

export default NavbarList;
