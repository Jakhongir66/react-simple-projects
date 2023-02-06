import React, {useEffect, useMemo, useState} from 'react';
import ProductFilter from "../components/ProductFilter.jsx";
import ProductItem from "../components/ProductItem.jsx";
import {useFetching} from "../hooks/useFetching.js";
import ProductService from "../API/ProductService.js";
import PaginationControl from "../components/UI/PaginationControl.jsx";
import PaginationMobile from "../components/UI/PaginationMobile.jsx";
import PaginationView from "../components/UI/PaginationView.jsx";
import SearchNotFound from "../components/UI/SearchNotFound.jsx";

const Home = () => {

   const [products, setProducts] = useState([]);
   const [state, setState] = useState({
      search: '',
      filtered: [],
      searchBy: ['brand'],
      total: 0,
      page: 1,
      currentPage: 1,
      perPage: 4
   });

   const [fetchProducts, isLoading, error] = useFetching(async () => {
      const {data} = await ProductService.getAll();
      setProducts([...products, ...data]);
   })

   const filteredProducts = useMemo(() => {
      state.filtered = products.filter(
         (pr) =>
            !state.search ||
            state.searchBy.some((item) => pr[item].toString().toLowerCase().includes(state.search.toLowerCase()))
      );
      state.total = state.filtered.length;
      return state.filtered.slice(state.perPage * state.currentPage - state.perPage, state.perPage * state.currentPage);
   }, [products, state]);

   useEffect(() => {
      fetchProducts();
   }, []);

   return (
      <div className="bg-white">
         <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <ProductFilter state={state} changeInput={event => setState({...state, search: event.trim()})}/>
            {filteredProducts.length
               ?
               <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {filteredProducts.map(product => <ProductItem key={product.id} product={product}/>)}
               </div>
               : <SearchNotFound state={state}/>
            }
            {isLoading && <p className="text-center mt-10">Loading ... 🍕</p>}
            {error && <p className="text-center mt-10">{error} 🤔</p>}
            <div
               className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-20">
               {!!filteredProducts.length &&
                  <PaginationMobile state={state} changePage={page => setState({...state, currentPage: page})}/>}
               <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  {!!filteredProducts.length && <PaginationView state={state} filteredProducts={filteredProducts}/>}
                  {!!filteredProducts.length &&
                     <PaginationControl state={state} changePage={page => setState({...state, currentPage: page})}/>}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
