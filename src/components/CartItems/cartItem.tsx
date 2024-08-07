import React, { ReactNode } from "react";
import Produto from "@/model/produtos/produtos";
import CartIcon from "@/assets/cart.png";
import Image from "next/image";
import { useCarrinho } from "@/contexts/CarrinhoContext/carrinhoContext";
import AddItemIcon from '@/assets/addicon.png'
import RemoveItemIcon from '@/assets/removeItem.png'

const CardItem = (props: Produto) => {
  const { title, price, descount, img, descrition } = props;
  const { addItem } = useCarrinho();

  return (
    <div
      className="flex flex-row px-3 h-36 my-4 bg-white shadow-black/10 shadow-md rounded-xl 
        "
    >
      <Image
        src={img}
        alt="item product"
        className="w-40 h-36 rounded-xl"
      />
      <div className="flex px-3 flex-col mb-2 justify-around">
        <p className="text-black text-xl font-bold">{title}</p>
        <p className="text-zinc-100 text-sm text-clip line-clamp-2">{descrition}</p>
        <p className="text-black">R$: {price.toFixed(2).replace('.', ',')}</p>
        <p className="text-zinc-100 font-bold ">
          Desconto de {descount.toFixed(2).replace('0.', '')}%
        </p>
      </div>
      <div className="flex w-44 justify-between items-center"> 
      <button className="w-7">
        <Image src={AddItemIcon} alt='addicon' />
      </button>
      <h1 className="text-zinc-100 text-center flex-1 mr-2">{props.id}</h1>  
      <button className="w-7">
        <Image src={RemoveItemIcon} alt='addicon' />
      </button>  
      </div>
    </div>
  );
};

export default CardItem;
