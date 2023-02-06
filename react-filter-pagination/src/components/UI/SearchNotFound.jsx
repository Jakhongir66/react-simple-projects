import React from 'react';

const SearchNotFound = ({state}) => {
   return (
      <p className="text-center mt-10"><b>"</b>
         <mark>{state.search}</mark>
         <b>"</b> qidiruvi bo'yicha hechnima topilmadi 😒</p>
   );
};

export default SearchNotFound;
