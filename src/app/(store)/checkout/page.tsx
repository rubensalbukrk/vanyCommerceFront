"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import Header from "../../../components/Header/Header";
import CardItem from "@/components/CardItems/cardItems";
import { useCart } from "@/contexts/CartContext/cartContext";
import ButtonGreen from "@/components/ButtonGreen/ButtonGreen";

const Checkout = () => {
  const { items, itemsCount } = useCart();
  return (
    <div className="flex-col w-full h-full bg-slate-200 justify-center items-center">
      <Header />
      <div className="flex flex-1 my-16 mt-36">
        <h1 className="text-6xl px-3 font-sans z-10 text-black/70 drop-shadow-lg ">
          Detalhes do seu pedido
        </h1>
      </div>

      <div
        className="flex z-10 w-screen flex-row 
             justify-center items-center gap-x-12 gap-y-12 flex-wrap"
      >
        {items.map((item) => (
          <CardItem
            key={item.produto.id}
            id={item.produto.id}
            avaiable={item.produto.avaiable}
            price={item.produto.price}
            title={item.produto.title}
            descount={item.produto.descount}
            descrition={item.produto.descrition}
            img={item.produto.img}
          />
        ))}
      </div>

      <div className="flex w-full justify-center items-center my-12">
        <ButtonGreen title="ENVIAR MEU PEDIDO">
          <FaWhatsapp size={32} />
        </ButtonGreen>
      </div>
    </div>
  );
};

export default Checkout;
