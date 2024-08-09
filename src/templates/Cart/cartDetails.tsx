"use client";
import React from "react";
import Link from "next/link";
import { useCarrinho } from "@/contexts/CarrinhoContext/carrinhoContext";

const CartDetails = () => {
    const {items, itemsCount, descount} = useCarrinho();
    const total = items.reduce((acc, item) => acc + item.produto.price * item?.quantidade, 0)

  return (
    <div className="w-96 relative h-32 justify-between items-center">
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

    </div>
  );
};

export default CartDetails;
