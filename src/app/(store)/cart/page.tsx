"use client";
import React from "react";
import Image from "next/image";
import noCartItems from "@/assets/noCart.png";
import Logo from "@/assets/logo.png";
import Header from "../../../components/Header/Header";
import CartItem from "@/components/CartItems/cartItem";
import CartDetails from "@/templates/Cart/cartDetails";
import { useCart } from "@/contexts/CartContext/cartContext";
import ItemCarrinho from "@/model/itemCarrinho/itemCarrinho";
import CompactMenu from "@/components/MenuCompact/MenuCompact";

const Cart = () => {
  const { items, itemsCount, addItem, removerItem } = useCart();
  return (
    <div className="flex-col pb-10 w-full min-h-screen bg-slate-200 justify-between items-center">
      <Header />

      {items?.length == 0 ? (
        <div className="flex flex-1 w-full flex-col gap-8 min-h-screen absolute z-20 justify-center items-center bg-slate-200">
          <Image src={noCartItems} alt="cart image" className="w-80 h-40" />
          <h1 className="text-black/60 drop-shadow-lg text-2xl">
            NÃO AH ITEMS NO CARRINHO
          </h1>
        </div>
      ) : null}

      <div className="flex w-full pt-24 px-2 flex-row justify-around items-center bg-slate-100 shadow-sm shadow-black/10">
        <div className="pb-2">
          <h1 className="w-8/12 mt-8 text-start text-4xl justify-start font-bold text-black/80">
            MEU CARRINHO
          </h1>
          <h1 className="w-8/12 mt-8 text-start text-xl justify-start font-bold text-zinc-100">
            Antes de realizar a compra, verifique todos seus items!
          </h1>
        </div>
        <CartDetails />
      </div>

      <div className="flex-1 flex-col w-8/12 px-8 py-8">
        {items?.map((item) => (
          <CartItem
            key={item.produto.id}
            item={item}
            adicionar={(item: ItemCarrinho) => addItem({produto: item?.produto, quantidade: item?.quantidade})}
            remover={(item: ItemCarrinho) => removerItem(item.produto)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
