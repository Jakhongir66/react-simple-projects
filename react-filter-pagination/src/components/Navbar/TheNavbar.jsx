import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import MobileMenu from "./MobileMenu.jsx";
import NavbarList from "./NavbarList.jsx";
import MenuBtn from "./MenuBtn.jsx";
import UserMenu from "./UserMenu.jsx";

const TheNavbar = () => {

   const location = useLocation();
   const [isOpenMenu, setIsOpenMenu] = useState(false);

   return (
      <nav className="bg-gray-800">
         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <MenuBtn setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu}/>
               </div>
               <NavbarList location={location}/>
               <UserMenu/>
            </div>
         </div>
         <MobileMenu isOpenMenu={isOpenMenu} location={location}/>
      </nav>
   );
};

export default TheNavbar;
