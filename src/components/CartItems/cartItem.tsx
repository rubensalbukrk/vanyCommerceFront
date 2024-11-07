import React from "react";
import Image from "next/image";
import Produto from "@/model/Produtos/produtos";
import ItemCarrinho from "@/model/itemCarrinho/itemCarrinho";
import { MdOutlineAddCircle, MdOutlineRemoveCircle } from "react-icons/md";
import colors from "tailwindcss/colors";

export interface CartItemProps {
  item: ItemCarrinho;
  quantidade?: number;
  adicionar?: (item: ItemCarrinho) => void;
  remover?: (item: Produto) => void;
}

const CartItem = (props: CartItemProps) => {
  return (
    <div
      key={props.item.produto.id}
      className="flex flex-row pr-2 items-center h-auto my-2 bg-white shadow-black/10 shadow-sm rounded-xl
    md:mx-20 lg:mx-32"
    >
      <Image
      width={40}
      height={20}
        src={props.item?.produto.img}
        alt="item product"
        layout="cover"
        className="w-48 h-full rounded-xl"
      />
      <div className="flex w-full h-full px-3 flex-col">
        <p className="text-black text-xl font-bold">
          {props.item?.produto.title}
        </p>
        <p className="text-zinc-500 text-xs text-clip line-clamp-2 sm:text-sm">
          {props.item?.produto.descrition}
        </p>
        <p>
          {props.item.produto.descount.toString() === "0.00" ? "Sem desconto" : `Desconto ${props.item?.produto.descount.toString().replace("0.", "")}%`}
        </p>
        <p className="font-bold">R$: {props.item?.produto.price.toString().replace(".", ",")}</p>
      </div>

      {/* ADICIONAR E REMOVER  */}
      <div className="flex flex-row self-center h-16 items-center justify-between">
        <button onClick={() => props.adicionar?.(props.item)}>
          <MdOutlineAddCircle size={22} color={colors.sky[500]} />
        </button>
        <h1 className="text-zinc-500 text-center flex-1 mx-1">
          {props?.item.quantidade}
        </h1>
        <button onClick={() => props.remover?.(props.item.produto)}>
          <MdOutlineRemoveCircle size={22} color={colors.sky[500]} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
