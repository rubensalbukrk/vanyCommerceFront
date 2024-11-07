"use client";
import React, { useState, useEffect, useCallback } from "react";
import Header from "../../../components/Header/Header";
import CardItem from "@/components/CardItems/cardItems";
import { useCart } from "@/contexts/CartContext/cartContext";
const Product = () => {
  const { products } = useCart();
  const [displayedProducts, setDisplayedProducts] = useState(products.slice(0, 10));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  


  const loadMoreProducts = useCallback(() => {
    if (loading || !hasMore) return; 
    setLoading(true);

    setTimeout(() => {
      const newPage = page + 1;
      const newProducts = products.slice(0, newPage * 10);

      if (newProducts.length >= products.length) {
        setHasMore(false); // Não há mais produtos para carregar
      }
      setDisplayedProducts(newProducts);
      setPage(newPage);
      setLoading(false);
    }, 1000);
  }, [page, products, loading, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !loading) {
        loadMoreProducts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreProducts, loading]);

  return (
    <div className="flex-col w-full h-full bg-slate-200 justify-center items-center">
      <Header />
      <h1 className="w-screen my-20 text-center text-3xl px-3 font-sans z-10 text-black/70 drop-shadow-lg sm:text-4xl sm:mt-36">
        CONFIRA NOSSO CATÁLOGO
      </h1>

      <div
        className="flex z-10 w-screen flex-row 
             justify-center items-center gap-x-12 gap-y-12 flex-wrap"
      >
        {displayedProducts.map((item, index) => (
          <div key={index}>
            <CardItem
            key={item.id}
            id={item.id}
            estoque={item.estoque}
            price={item.price}
            title={item.title}
            descount={item.descount}
            descrition={item.descrition}
            img={item.img}
            count={item.count}
          />
          </div>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center items-center my-12">
          <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-2 text-blue-400 font-bold">Carregando...</span>
        </div>
      )}

       {!hasMore && (
        <div className="flex justify-center items-center my-12">
          <span className="text-gray-500 font-bold">Todos os produtos foram carregados.</span>
        </div>
      )}

    </div>
  );
};

export default Product;