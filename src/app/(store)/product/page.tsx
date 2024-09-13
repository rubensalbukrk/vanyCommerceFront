"use client";
import React from "react";
import Image from "next/image";
import Logo from '@/assets/logo.png'
import Header from "../../../components/Header/Header";
import CardItem from "@/components/CardItems/cardItems";
import { useCart } from "@/contexts/CartContext/cartContext";
import CompactMenu from "@/components/MenuCompact/MenuCompact";

const Product = () => {
  const { products } = useCart();
  return (
    <div className="flex-col w-full h-full bg-slate-200 justify-center items-center">
      <nav className="flex w-screen flex-row items-center justify-between px-4">
        <Image
          className="object-contain"
          src={Logo}
          alt="logo"
          width={40}
          height={10}
        />
        <p className="text-2xl font-bold text- text-black/60">VANNY ÓCULOS</p>
        <CompactMenu />
      </nav>
      <header>
        <Header />
      </header>

      <div className="flex flex-1 my-16 mt-36">
        <h1 className="text-6xl px-3 font-sans z-10 text-black/70 drop-shadow-lg ">
          CONFIRA NOSSO CATÁLOGO
        </h1>
      </div>

      <div
        className="flex z-10 w-screen flex-row 
             justify-center items-center gap-x-12 gap-y-12 flex-wrap"
      >
        {products.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            avaiable={item.avaiable}
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
