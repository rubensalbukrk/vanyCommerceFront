"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import Header from "../../../components/Header/Header";
import { useCart } from "@/contexts/CartContext/cartContext";
import ButtonGreen from "@/components/ButtonGreen/ButtonGreen";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";

const Checkout = () => {
  const { items, itemsCount } = useCart();
  const [clientDetail, setClientDetail] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
  });
  const total = items
    .reduce((acc, item) => acc + item.produto.price * item?.quantidade, 0)
    .toFixed(2)
    .replace(".", ",");

  let pedidoDetails = {
    items: [...items],
  };

  const handleValueChange = (value: string) => {
    setClientDetail({ ...clientDetail, city: value });
  };

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
        className="flex flex-col z-10 w-full
             justify-center items-center gap-x-12 gap-y-4 flex-wrap py-4"
      >
        {items.map((item) => {
          // Calcula o desconto apenas para o item atual
          const descount = item.produto.price * (item.produto.descount);
          const totalDescount = descount * item.quantidade;
          const finalPriceProduct = item.produto.price * item.quantidade - totalDescount;

          return (
            <div
              key={item.produto.id}
              className="flex flex-row gap-3 items-center bg-slate-50 rounded-md pr-2 shadow-lg shadow-black/20"
            >
              <Image
                width={60}
                height={60}
                src={item.produto.img}
                alt={item.produto.title}
                className="rounded-lg"
              />
              <div>
                <h1>{item.produto.title}</h1>
                <h1 className="">
                  R$ {finalPriceProduct.toFixed(2).replace(".", ",")}
                </h1>
              </div>
              <div className="flex flex-col justify-end items-end">
                <h1>{item.quantidade} unid.</h1>
                <p className="text-zinc-400 font-bold">
                  {item.produto.descount.toString() === "0.00"
                    ? "Sem desconto"
                    : `Desconto ${item.produto.descount
                        .toString()
                        .replace("0.", "")}%`}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full bg-slate-50 flex flex-col mt-8 px-4 pt-2 sm:justify-center sm:items-center">
        <div className="flex flex-col my-2 bg-rose-200 border-2 border-dashed rounded-lg p-2">
          <h1 className="font-semibold">FRETE FIXO (R$ 10,00)</h1>
          <h2>Bayeux, Varzea Nova, Tibiri, Marcos Moura, Alto das Populares</h2>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-black/70">
            Informe seus dados
          </h1>
          <label>Nome</label>
          <input
            value={clientDetail.name}
            onChange={(e) =>
              setClientDetail({ ...clientDetail, name: e.target.value })
            }
            placeholder=""
            type="text"
            className="w-80 h-8 px-2 bg-slate-200 rounded-md"
          />
          <label>Endereço</label>
          <input
            value={clientDetail.address}
            onChange={(e) =>
              setClientDetail({ ...clientDetail, address: e.target.value })
            }
            placeholder="Ex: Rua São José, 495 "
            type="text"
            className="w-80 h-8 px-2 bg-slate-200 rounded-md"
          />
          <label>Bairro</label>
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-[240px] bg-slate-200">
              <SelectValue placeholder="Bairro" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Alto das Populares">
                Alto das Populares
              </SelectItem>
              <SelectItem value="Bayeux">Bayeux</SelectItem>
              <SelectItem value="Tibiri">Tibiri</SelectItem>
              <SelectItem value="Varzea Nova">Varzea Nova</SelectItem>
              <SelectItem value="João Pessoa">
                João Pessoa (frete a combinar)
              </SelectItem>
            </SelectContent>
          </Select>

          <label>Telefone</label>
          <input
            value={clientDetail.phone}
            onChange={(e) =>
              setClientDetail({ ...clientDetail, phone: e.target.value })
            }
            placeholder="83 9xxxx-xxxx"
            type="number"
            className="w-80 h-8 px-2 bg-slate-200 rounded-md"
          />
        </div>
        <ButtonGreen
          title="ENVIAR MEU PEDIDO"
          onClick={() =>
            window.open(
              "https://wa.me/5583987904804?text=Olá%2C+estou+enviando+meu+pedido%3A%0D%0A%0D%0A📦+N°+PEDIDO:+222222+%0D%0A💳+TOTAL%3A+" +
                `R$ ${total}+ +%0D%0A` +
                "📍+ENDEREÇO%3A+" +
                `${clientDetail.address}` +
                "📍+BAIRRO%3A+" +
                `${clientDetail.city}` +
                "%0A+⏱️+Aguardando%20link%20de%20pagamento...%20obrigado!%0D%0A"
            )
          }
          className="flex w-64 my-8 mb-28 text-lg self-center gap-x-0 justify-evenly shadow-lg shadow-green-400"
        >
          <FaWhatsapp size={28} />
        </ButtonGreen>
      </div>
    </div>
  );
};

export default Checkout;
