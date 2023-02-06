import React from 'react';

const PaginationView = ({state, filteredProducts}) => {
   return (
      <div>
         <p className="text-sm text-gray-700"> Ko'rinish
            <span className="font-medium"> 1</span> dan
            <span className="font-medium"> {filteredProducts.length}</span> gacha
            <span className="font-medium"> {state.total}</span> natijadan
         </p>
      </div>
   );
};

export default PaginationView;
