import React from 'react';

const ProductItem = ({product}) => {
   return (
         <div key="product.id" className="group relative product-card">
            <div
               className="min-h-30 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none lg:h-30 border product-card-image">
               <img
                  src={product.imageSrc}
                  alt="product.name"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
            <div className="product-card-items mt-2 text-center">
               <div className="truncate text-sm font-medium text-indigo-600">{product.name}</div>
               <p className="text-gray-900 font-medium text-sm">Narxi: <b>{product.price}</b> som</p>
            </div>
         </div>
   );
};

export default ProductItem;
