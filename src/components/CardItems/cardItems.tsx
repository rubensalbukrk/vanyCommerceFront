import React, { ReactNode } from "react";
import Produto from "@/model/produtos/produtos";
import CartIcon from "@/assets/cart.png";
import Image from "next/image";
import ButtonCard from "./button/button";
import { useCarrinho } from "@/contexts/CarrinhoContext/carrinhoContext";

const CardItem = (props: Produto) => {
    const {id, title, price, descount, descrition, estoque, img} = props;
    const {items, addItem} = useCarrinho()

  return (
    <div
      className="flex flex-col w-64 h-96 bg-white shadow-black/40 shadow-lg rounded-xl justify-between 
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
        className="w-full h-44 rounded-tl-xl rounded-tr-xl"
      />
      <div className="flex px-3 flex-col mb-2">
      <p className="text-black text-xl font-bold">{title}</p>
      <p className="text-black">R$: {price}</p>
      <p className="text-zinc-100 font-bold line-through ">
        {" "}
        R$: {descount}{" "}
      </p>
      </div>
      <ButtonCard onClick={() => {
        addItem({
            id: id,
            title: title,
            descrition: descrition,
            descount: descount,
            estoque: estoque,
            img: img,
            price: price
        })
        
      }} />
    </div>
  );
};

export default CardItem;
