"use client";
import React from "react";
import { useCarrinho } from "@/contexts/CarrinhoContext/carrinhoContext";
import CardItem from "@/components/CardItems/cardItems";
import Header from "@/components/Header/Header";
import Image from "next/image";
import BackgroundProducts from "@/assets/BackgroundProducts.png";
import Button from "@/components/Header/Button/Button";

const Product = () => {
  const { produtos, increment, decrement } = useCarrinho();
  return (
    <div className="flex flex-col w-full h-full bg-slate-200 justify-center items-center">
      <Header />

      <div className="flex flex-1 my-16 mt-36">
        <h1 className="text-6xl font-sans z-10 text-black/70 drop-shadow-lg ">
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
        <Button
          className="bg-blue-600 text-white shadow-black/40 shadow-lg"
          title="VER MAIS"
          onClick={() => alert("VER MAIS")}
        ></Button>
      </div>
    </div>
  );
};

export default Product;
