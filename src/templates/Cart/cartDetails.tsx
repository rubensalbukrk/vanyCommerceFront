"use client";
import React from "react";
import Link from "next/link";
import { useCarrinho } from "@/contexts/CarrinhoContext/carrinhoContext";
import ButtonGreen from "./ButtonGreen/ButtonGreen";
import CartCheck from "@/assets/cart-check.png";
import Image from "next/image";

const CartDetails = () => {
  const { items, itemsCount, descount } = useCarrinho();
  const total = items.reduce(
    (acc, item) => acc + item.produto.price * item?.quantidade,
    0
  );

  return (
    <div className="flex flex-col w-96 relative h-32 justify-between items-center gap-y-6">
      <div className="w-64">
        <div className="flex flex-row justify-between">
          <h1 className="text-start text-md justify-start font-bold text-black/80 text-wrap">
            Total
          </h1>
          <h1 className="text-start text-md justify-start font-bold text-black/80 text-wrap">
            {total.toFixed(2)}
          </h1>
        </div>

        <div className="flex flex-row justify-between">
          <h1 className="text-start text-md justify-start font-bold text-black/80 text-wrap">
            Total com desconto
          </h1>
          <h1 className="text-start text-md justify-start font-bold text-black/80 text-wrap">
            R$ {descount.toFixed(2)}
          </h1>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="text-start text-md justify-start font-bold text-black/80 text-wrap">
            FRETE
          </h1>
          <h1 className="text-start text-md justify-start font-bold text-black/80 text-wrap">
            R$ 10,00
          </h1>
        </div>
      </div>

      <button
        className="flex w-40 h-12 text-white text-lg font-bold bg-sky-600 shadow-sky-400 shadow-lg justify-center items-center gap-x-6 
          hover:text-white  hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-400
          active:bg-green-700 rounded-lg transition duration-1000 ease-in-out"
      >
        <Image
          src={CartCheck}
          alt="icon check"
          className="w-12 h-10 object-over"
        /> Finalizar
      </button>
    </div>
  );
};

export default CartDetails;
