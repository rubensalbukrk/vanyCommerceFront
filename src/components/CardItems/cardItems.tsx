"use client"
import React from "react";
import Produto from "@/model/produtos/produtos";
import Image from "next/image";
import ButtonCard from "./button/button";
import { useCart } from "@/contexts/CartContext/cartContext";

const CardItem = (props: Produto) => {
    const {id, title, price, descount, descrition, estoque, img} = props;
    const {items, addItem} = useCart()

  return (
    <div
      key={id}
      className="flex flex-col w-64 h-80 bg-white shadow-black/40 shadow-lg rounded-xl justify-between 
        transition duration-900 ease-linear
        hover:scale-110
        "
    >
      <div className="relative w-44 left-4 top-2 text-black text-xl">
        <p>{estoque ? "Disponível" : "Esgotado"}</p>
      </div>

      <Image
          src={img}
         alt="item product"
         width={80}
         height={40}
         className="w-full h-40 rounded-tl-xl rounded-tr-xl"
      />
      <div className="flex px-3 flex-col mb-2">
      <p className="text-black text-xl font-bold">{title}</p>
      <p className="text-black">R$: {price.toString().replace(".", ",")}</p>
      <p className="text-zinc-400 font-bold">
        Desconto {descount.toString().replace("0.", "")}%
      </p>
      </div>
      <ButtonCard onClick={() => {
        addItem({produto: props, quantidade: 1})

      }} />
    </div>
  );
};

export default CardItem;
