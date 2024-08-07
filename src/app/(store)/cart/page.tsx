"use client";
import React from "react";
import Image from "next/image";
import noCartItems from "@/assets/noCart.png";
import Header from '../../../components/Header/Header'
import Produto from "@/model/produtos/produtos";
import CartItem from "@/components/CartItems/cartItem";
import CartDetails from "@/templates/Cart/cartDetails";
import { useCarrinho } from "@/contexts/CarrinhoContext/carrinhoContext";

const Carrinho = () => {
  const { items } = useCarrinho();

  return (
    <div className="flex flex-col pb-10 w-full min-h-screen bg-slate-200 justify-between items-center">

      <Header />


      {items.length == 0 ? (
        <div className="flex flex-1 w-full flex-col gap-8 min-h-screen absolute z-40 justify-center items-center bg-slate-200">
          <Image src={noCartItems} alt="cart image" className="w-80 h-40" />
          <h1 className="text-black/60 drop-shadow-lg text-2xl">
            NÃO AH ITEMS NO CARRINHO
          </h1>
        </div>
      ) : null}
      
      <div className="flex w-full pt-24  flex-row justify-around items-center bg-slate-100 shadow-sm shadow-black/10">
        <div className="pb-2">
        <h1 className="w-8/12 mt-8 text-start text-4xl justify-start font-bold text-black/80">
          MEU CARRINHO
        </h1>
        <h1 className="w-8/12 mt-8 text-start text-xl justify-start font-bold text-zinc-100">
          Antes de realizar a compra, verifique todos seus items!
        </h1>
        </div>
        <CartDetails />
      </div>
      <div className="flex-1 flex-col w-8/12 px-8 py-8">
        {items.map((item: Produto) => (
          <CartItem
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
      
    </div>
  );
};

export default Carrinho;
