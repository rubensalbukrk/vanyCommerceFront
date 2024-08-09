"use client";
import React from "react";
import { useCarrinho } from "@/contexts/CarrinhoContext/carrinhoContext";
import CardItem from "@/components/CardItems/cardItems";
import Header from '../../../components/Header/Header'


const Product = () => {
  const { produtos } = useCarrinho();
  return (
    <div className="flex-col w-full h-full bg-slate-200 justify-center items-center">

      <Header />


      <div className="flex flex-1 my-16 mt-36">
        <h1 className="text-6xl px-3 font-sans z-10 text-black/70 drop-shadow-lg ">
          CONFIRA NOSSO CATÁLOGO
        </h1>
      </div>

      <div
        className="flex z-10 w-screen flex-row 
             justify-center items-center gap-x-12 gap-y-12 flex-wrap"
      >
        {produtos.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            estoque={item.estoque}
            price={item.price}
            title={item.title}
            descount={item.descount}
            descrition={item.descrition}
            img={item.img}
          />
        ))}
      </div>

      <div className="flex w-full justify-center items-center my-12">
        <button
          className="w-36 h-12 bg-blue-400 shadow-black/40 shadow-lg text-white font-bold 
          drop-shadow-lg hover:text-white text-lg border-0 rounded-2xl
        hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-400 active:bg-sky-300 
          transition-all duration-1000 ease-in-out "
          onClick={() => alert("VER MAIS")}
        >
          VER MAIS
        </button>
      </div>
    </div>
  );
};

export default Product;
