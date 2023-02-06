import React from 'react';

const TheFooter = () => {
   return (
      <footer className="mx-auto w-full mb-9 max-w-container px-4 sm:px-6 lg:px-8">
         <div className="border-t border-slate-900/5 pt-10 flex  items-center justify-center">
            <img className="block h-8 w-auto lg:hidden"
                 src="https://devtools.vuejs.org/logo.svg" alt="Your Company"/>
            <img className="hidden h-8 w-auto lg:block"
                 src="https://devtools.vuejs.org/logo.svg" alt="Your Company"/>
         </div>
         <p className="mt-5 text-center text-sm leading-6 text-slate-500">© 2023 Custom DataTable All rights
            reserved.</p>
      </footer>
   );
};

export default TheFooter;
