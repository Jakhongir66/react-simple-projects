import React from 'react';

const UserMenu = () => {
   return (
      <div
         className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         <button type="button"
                 className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">View notifications</span>

            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor" aria-hidden="true">
               <path strokeLinecap="round" strokeLinejoin="round"
                     d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
            </svg>
         </button>
         <div className="relative ml-3">
            <div>
               <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <a target="_blank" href="https://www.linkedin.com/in/jahongir-bektemirov-82621a246/">
                     <img
                        className="h-8 w-8 rounded-full"
                        src="https://media.licdn.com/dms/image/D4D35AQHly0kR7IJ9sg/profile-framedphoto-shrink_200_200/0/1673525065721?e=1676181600&v=beta&t=je_b8CASfMyUQvp695gU0i9YqZTfzxqRJgt6I72xCzY"
                        alt=""/>
                  </a>
               </button>
            </div>
         </div>
      </div>
   );
};

export default UserMenu;
