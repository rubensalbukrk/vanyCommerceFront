"use client";
import React from "react";
import Produto from "@/model/produtos/produtos";
import Image from "next/image";
import ButtonCard from "./button/button";
import { useCart } from "@/contexts/CartContext/cartContext";

const CardItem = (props: Produto) => {
  const { id, title, price, descount, descrition, estoque, img } = props;
  const { items, addItem } = useCart();

  return (
    <div
      key={id}
      className="flex flex-col w-64 h-80 bg-white shadow-black/40 shadow-lg rounded-xl justify-between 
        transition duration-900 ease-linear
        hover:scale-110
        "
    >
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
          {descount.toString() === "0.00" ? "Sem desconto" : `Desconto ${descount.toString().replace("0.", "")}%`}
        </p>
      </div>
      {estoque ? (
        <ButtonCard
          onClick={() => {
            addItem({ produto: props, quantidade: 1 });
          }}
        />
      ) 
      : 
      (
        <div className="flex w-full h-14 items-center justify-center bg-zinc-300 rounded-bl-xl rounded-br-xl">
          <h1 className="text-xl font-bold">Indisponível</h1>
        </div>
      )}
    </div>
  );
};

export default CardItem;
