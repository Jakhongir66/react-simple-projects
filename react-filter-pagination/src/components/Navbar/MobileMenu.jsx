import React from 'react';
import {Link} from "react-router-dom";

const MobileMenu = ({isOpenMenu, location}) => {
   return (
      <div id="mobile-menu" className={!isOpenMenu ? 'sm:hidden hidden' : 'sm:hidden'}>
         <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
               to="/"
               className={location.pathname === '/' ? 'bg-gray-900 text-white  text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white  text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'}
            >Home</Link>
            <Link
               to="/about"
               className={location.pathname === '/about' ? 'bg-gray-900 text-white  text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white  text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'}
            >About</Link>
         </div>
      </div>
   );
};

export default MobileMenu;
