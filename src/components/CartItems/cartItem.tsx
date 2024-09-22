import React from "react";
import Image from "next/image";
import Produto from "@/model/produtos/produtos";
import ItemCarrinho from "@/model/itemCarrinho/itemCarrinho";
import { MdOutlineAddCircle, MdOutlineRemoveCircle } from "react-icons/md"
import colors from "tailwindcss/colors";

export interface CartItemProps{
  item: ItemCarrinho
  quantidade?: number
  adicionar?: (item: ItemCarrinho) => void;
  remover?: (item: Produto) => void;
}

const CartItem = (props: CartItemProps) => {
  return (
    <div
      className="flex flex-row px-2 h-auto my-2 bg-white shadow-black/10 shadow-sm rounded-xl"
    >
      <Image
        src={props.item?.produto.img}
        alt="item product"
        className="w-20 h-auto rounded-xl sm:w-40"
      />
      <div className="flex px-3 flex-col mb-2">
        <p className="text-black text-xl font-bold">
          {props.item?.produto.title}
        </p>
        <p className="text-zinc-500 text-sm text-clip line-clamp-2">
          {props.item?.produto.descrition}
        </p>
        <p className="text-black">
          R$: {props.item?.produto.price.toFixed(2).replace('.', ',')}
        </p>
        <p className="text-zinc-500 font-bold ">
          Desconto de {props.item?.produto.descount.toFixed(2).replace('0.', '')}%
        </p>
      </div>
      <div className="flex w-44 justify-between items-center"> 
      <button className="w-7" onClick={() => props.adicionar?.(props.item)}>
      <MdOutlineAddCircle size={22} color={colors.sky[500]} />
      </button>
      <h1 className="text-zinc-500 text-center flex-1 mr-2">
        {props?.item.quantidade}
        </h1>  
      <button className="w-7" onClick={() => props.remover?.(props.item.produto)}>
        <MdOutlineRemoveCircle size={22} color={colors.sky[500]} />
      </button>
      </div>
    </div>
  );
};

export default CartItem;
