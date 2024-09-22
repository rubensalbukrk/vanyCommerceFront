"use client";
import React from "react";
import Image from "next/image";
import noCartItems from "@/assets/noCart.png";
import Produto from "@/model/produtos/produtos";
import { TbAlertSquareRounded } from "react-icons/tb";
import Header from "../../../components/Header/Header";
import CartItem from "@/components/CartItems/cartItem";
import CartDetails from "@/templates/Cart/cartDetails";
import { useCart } from "@/contexts/CartContext/cartContext";
import ItemCarrinho from "@/model/itemCarrinho/itemCarrinho";

const Cart = () => {
  const { items, addItem, removerItem } = useCart();
  return (
    <div className="flex-col-reverse pb-10 bg-slate-200 justify-between items-center
    sm:flex-col">
      <Header />

      {items?.length == 0 ? (
        <div className="flex flex-col gap-4 w-screen h-screen absolute z-20 justify-center items-center bg-slate-200">
          <Image src={noCartItems} alt="cart image" className="w-80 h-40" />
          <h1 className="text-black/60 drop-shadow-lg text-2xl">
            NÃO AH ITEMS NO CARRINHO
          </h1>
        </div>
      ) : null}

      <div
        className="flex w-full pt-14 px-4 flex-col justify-around items-center bg-slate-100 shadow-sm shadow-black/10
            sm:pt-24 sm:flex-row"
      >
        <div className="flex flex-col justify-start pb-2 sm:flex-col">
          <h1
            className="text-start text-2xl justify-start font-bold text-black/80
            sm:text-4xl sm:flex-row"
          >
            MEU CARRINHO
          </h1>
          <h1 className="flex flex-row mt-2 pr-1 text-start text-xs items-center rounded-md font-bold text-orange-400
                        sm:text-base">
            <TbAlertSquareRounded size={22}/>
            Antes de realizar a compra,
            verifique todos seus items!
          </h1>
        </div>

        <CartDetails />
      </div>

      <div className="flex flex-col px-2 py-4 pb-24 sm:px-14">
        {items?.map((item) => (
          <CartItem
            key={item.produto.id}
            item={item}
            quantidade={item.quantidade}
            adicionar={(item: ItemCarrinho) => addItem(item)}
            remover={(item: Produto) => removerItem(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
