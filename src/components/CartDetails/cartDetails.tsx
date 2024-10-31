"use client";
import React from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { useCart } from "@/contexts/CartContext/cartContext";
import Link from "next/link";

const CartDetails = () => {
  const { items, itemsCount, descount } = useCart();
  const total = items.reduce(
    (acc, item) => acc + item.produto.price * item?.quantidade,
    0
  );

  return (
    <div
      style={{ border: "1px solid #d6d6d6" }}
      className="flex flex-col w-full fixed bottom-0 py-2 gap-y-2 rounded-t-md bg-slate-50 items-center
                sm:relative sm:w-64 sm:my-4 sm:rounded-lg"
    >
      <div className="w-full px-2">
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

    {/**BOTÃO FINALIZAR COMPRA - ENVIAR PARA WHATSAPP */}
      {/* <button
        onClick={() =>
          window.open(
            "https://wa.me/5583986731696?text=Olá%2C+estou+enviando+meu+pedido%3A%0D%0A%0D%0A%0D📩+/+NUMERO+DO+PEDIDO:+222222+%0D%0A💰+/+VALOR+TOTAL++%3A++12%2C90++%0D%0A+%F0%9F%91%8D+/+ENDEREÇO+%3A+Rua+do+Colégio%2C+123++/++BAIRRO+%3A+POPULAR%0D%0A+/+Aguardando%20link%20de%20pagamento...%20obrigado!"
          )
        }
        className="flex w-44 h-10 text-white text-lg font-bold bg-emerald-600 shadow-emerald-400 shadow-lg justify-center items-center gap-x-6 
          hover:text-white  hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-400
          active:bg-green-700 rounded-lg transition duration-1000 ease-in-out"
      >
        <BsCartCheckFill size={24} /> Finalizar
      </button> */}

    

      <Link href="/checkout">
      <button
        className="flex w-44 h-10 text-white text-lg font-bold bg-emerald-600 shadow-emerald-400 shadow-lg justify-center items-center gap-x-6 
          hover:text-white  hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-400
          active:bg-green-700 rounded-lg transition duration-1000 ease-in-out"
      >
        
        <BsCartCheckFill size={24} /> Finalizar
        
      </button>
      </Link>
    </div>
  );
};

export default CartDetails;
