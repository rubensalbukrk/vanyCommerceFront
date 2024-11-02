"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import Header from "../../../components/Header/Header";
import { useCart } from "@/contexts/CartContext/cartContext";
import ButtonGreen from "@/components/ButtonGreen/ButtonGreen";

import Image from "next/image";

const Checkout = () => {
  const { items, itemsCount } = useCart();
  const [address, setAddress] = useState({
    address: "",
    city: ""
  });
  const total = items.reduce(
    (acc, item) => acc + item.produto.price * item?.quantidade,
    0
  ).toFixed(2).replace(".", ",");

  let pedidoDetails = {
    items: [...items]
  }

  return (
    <div className="flex-col w-full h-screen bg-slate-200 justify-center items-center">
      <Header />
      <div className="flex flex-1 my-8 mt-20 sm:mt-36">
        <h1
          className="text-2xl px-3 font-semibold z-10 text-black/70 drop-shadow-lg 
        sm:text-5xl"
        >
          Detalhes do seu pedido
        </h1>
      </div>

      <div
        className="flex flex-col z-10 w-full bg-slate-100
             justify-center items-center gap-x-12 gap-y-4 flex-wrap py-4"
      >
        {items.map((item) => {
          return (
            <div key={item.produto.id} className="flex flex-row gap-3 items-center bg-slate-50 rounded-md pr-2">
              <Image
                width={60}
                height={60}
                src={item.produto.img}
                alt={item.produto.title}
                className="rounded-lg"
              />
              <div>
              <h1>{item.produto.title}</h1>
              <h1>R$ {item.produto.price.toFixed(2).replace(".", ",")}</h1>
              </div>
              <div>
              <h1>{item.quantidade} unidade(s)</h1>
              <h1>
                Desconto {item.produto.descount.toString().replace("0.", "")}%
              </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full bg-slate-50 flex flex-col mt-8 px-4 pt-2 sm:justify-center sm:items-center">
        <div className="flex flex-col my-2 bg-rose-200 border-2 border-dashed rounded-lg p-2">
          <h1 className="font-semibold">
            FRETE FIXO (R$ 10,00)
          </h1>
          <h2>
            Bayeux, Varzea Nova, Tibiri, Marcos Moura, Alto das Populares
          </h2>
        </div>
        
        <div className="flex flex-col">
        <h1 className="text-xl font-semibold text-black/70">
          Informe seu endereço
        </h1>
        <input
        value={address.address}
        onChange={(e) => setAddress({address: e.target.value, city: address.city})}
        placeholder="Ex: Rua São José, 495 " 
        type="text" 
        className="w-80 h-8 bg-slate-200 rounded-md" />
        <h1>
          Bairro
        </h1>
        <input
        value={address.city}
        onChange={(e) => setAddress({city: e.target.value, address: address.address})}
        placeholder="Bayeux" 
        type="text" 
        className="w-80 h-8 bg-slate-200 rounded-md" />
        </div>
        <ButtonGreen
          title="ENVIAR MEU PEDIDO"
          onClick={() =>
            window.open(
              "https://wa.me/5583987904804?text=Olá%2C+estou+enviando+meu+pedido%3A%0D%0A%0D%0A📦+N°+PEDIDO:+222222+%0D%0A💳+TOTAL%3A+" + `R$ ${total}+ +%0D%0A` + "📍+ENDEREÇO%3A+" + `${address.address}` + "📍+BAIRRO%3A+" + `${address.city}` + "%0A+⏱️+Aguardando%20link%20de%20pagamento...%20obrigado!%0D%0A"
            )
          }
          className="flex w-64 my-4 text-lg self-center gap-x-0 justify-evenly shadow-lg shadow-green-400"
        >
          <FaWhatsapp size={28} />
        </ButtonGreen>
      </div>
    </div>
  );
};

export default Checkout;
