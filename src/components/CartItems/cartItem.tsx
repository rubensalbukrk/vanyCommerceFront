import React from "react";
import Image from "next/image";
import Produto from "@/model/produtos/produtos";
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
    <div className="flex flex-row px-2 h-auto my-2 bg-white shadow-black/10 shadow-sm rounded-xl
    md:mx-20 lg:mx-32">
      <Image
        src={props.item?.produto.img}
        alt="item product"
        className="w-20 h-auto rounded-xl sm:w-40"
      />
      <div className="flex w-full px-3 flex-col">
        <p className="text-black text-xl font-bold">
          {props.item?.produto.title}
        </p>
        <p className="text-zinc-500 text-xs text-clip line-clamp-2 sm:text-sm">
          {props.item?.produto.descrition}
        </p>
        <p>
          Desconto de{" "}
          {props.item?.produto.descount.toFixed(2).replace("0.", "")}%
        </p>
        <p className="font-bold">
          R$: {props.item?.produto.price.toFixed(2).replace(".", ",")}
        </p>
      </div>

      {/* ADICIONAR E REMOVER  */}
      <div className="flex flex-row self-center h-16 items-center justify-between">
        <button onClick={() => props.adicionar?.(props.item)}>
          <MdOutlineAddCircle size={22} color={colors.sky[500]} />
        </button>
        <h1 className="text-zinc-500 text-center flex-1 mx-1">
          {props?.item.quantidade}
        </h1>
        <button
          onClick={() => props.remover?.(props.item.produto)}
        >
          <MdOutlineRemoveCircle size={22} color={colors.sky[500]} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
