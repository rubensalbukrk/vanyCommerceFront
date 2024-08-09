import React, { ReactNode } from "react";
import Produto from "@/model/produtos/produtos";
import Image from "next/image";
import AddItemIcon from '@/assets/addicon.png'
import RemoveItemIcon from '@/assets/removeItem.png'
import ItemCarrinho from "@/model/itemCarrinho/itemCarrinho";

export interface CartItemProps{
  item: ItemCarrinho
  adicionar?: (item: ItemCarrinho) => void;
  remover?: (item: ItemCarrinho) => void;
}


const CardItem = (props: CartItemProps) => {
  return (
    <div
      className="flex flex-row px-3 h-36 my-4 bg-white shadow-black/10 shadow-md rounded-xl 
        "
    >
      <Image
        src={props.item?.produto.img}
        alt="item product"
        className="w-40 h-36 rounded-xl"
      />
      <div className="flex px-3 flex-col mb-2 justify-around">
        <p className="text-black text-xl font-bold">{props.item?.produto.title}</p>
        <p className="text-zinc-100 text-sm text-clip line-clamp-2">{props.item?.produto.descrition}</p>
        <p className="text-black">R$: {props.item?.produto.price.toFixed(2).replace('.', ',')}</p>
        <p className="text-zinc-100 font-bold ">
          Desconto de {props.item?.produto.descount.toFixed(2).replace('0.', '')}%
        </p>
      </div>
      <div className="flex w-44 justify-between items-center"> 
      <button className="w-7" onClick={() => props.adicionar?.(props.item)}>
        <Image src={AddItemIcon} alt='addicon' />
      </button>
      <h1 className="text-zinc-100 text-center flex-1 mr-2">{props?.item.quantidade}</h1>  
      <button className="w-7" onClick={() => props.remover?.(props.item)}>
        <Image src={RemoveItemIcon} alt='addicon' />
      </button>  
      </div>
    </div>
  );
};

export default CardItem;
