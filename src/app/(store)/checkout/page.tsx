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
import { OrderItemProps } from "@/model/OrderItem/OrderItem";
import axios from "axios";
import { api } from "@/services/api";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

const Checkout = () => {
  const { items, descount } = useCart();
  const total = descount.toFixed(2).replace(".", ",");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderDetail, setOrderDetail] = useState<OrderItemProps>({
    orderId: Math.floor(Math.random() * 10000),
    name: "",
    address: "",
    city: "",
    phone: "",
    products: items.map((item) => ({
      id: item.produto.id,
      title: `${item.produto.title} x${item.quantidade}`,
    })),
    total: total,
  });

  const handleValueChangeSelect = (value: string) => {
    setOrderDetail({ ...orderDetail, city: value });
  };

  const handleCreateOrder = async () => {
    setFormSubmitted(true);
    try {
      const { name, address, city, phone, products } = orderDetail;

      if (!name || !address || !city || !phone || products.length === 0) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
      }

      setIsLoading(true);
      const response = await axios
        .post(`${api}/orders`, orderDetail)
        .then((response) => [
          alert(JSON.stringify(response.data?.message)),
          window.open(
            "https://wa.me/5583987904804?text=Olá%2C+estou+enviando+meu+pedido%3A%0D%0A%0D%0A📦+N°+PEDIDO:+222222+%0D%0A💳+TOTAL%3A+" +
              `R$ ${total}+ +%0D%0A` +
              "📍+ENDEREÇO%3A+" +
              `${orderDetail.address}` +
              "📍+BAIRRO%3A+" +
              `${orderDetail.city}` +
              "%0A+⏱️+Aguardando%20link%20de%20pagamento...%20obrigado!%0D%0A"
          ),
        ]);
    } catch (error) {
      alert("Tente novamente em alguns instantes!");
    } finally {
      setIsLoading(false);
    }
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
          const descount = item.produto.price * item.produto.descount;
          const totalDescount = descount * item.quantidade;
          const finalPriceProduct =
            item.produto.price * item.quantidade - totalDescount;

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
            value={orderDetail.name}
            onChange={(e) =>
              setOrderDetail({ ...orderDetail, name: e.target.value })
            }
            placeholder=""
            type="text"
            className="w-80 h-8 px-2 bg-slate-200 rounded-md"
          />
          {formSubmitted && !orderDetail.name && (
            <span className="text-red-500">Um nome é obrigatório</span>
          )}
          <label>Endereço</label>
          <input
            value={orderDetail.address}
            onChange={(e) =>
              setOrderDetail({ ...orderDetail, address: e.target.value })
            }
            placeholder="Ex: Rua São José, 495 "
            type="text"
            className="w-80 h-8 px-2 bg-slate-200 rounded-md"
          />
          {formSubmitted && !orderDetail.address && (
            <span className="text-red-500">Um endereço é obrigatório</span>
          )}
          <label>Bairro</label>
          <Select onValueChange={handleValueChangeSelect}>
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
          {formSubmitted && !orderDetail.city && (
            <span className="text-red-500">Um bairro é obrigatório</span>
          )}
          <label>Telefone</label>
          <input
            value={orderDetail.phone}
            onChange={(e) =>
              setOrderDetail({ ...orderDetail, phone: e.target.value })
            }
            placeholder="83 9xxxx-xxxx"
            type="number"
            className="w-80 h-8 px-2 bg-slate-200 rounded-md"
          />
          {formSubmitted && !orderDetail.phone && (
            <span className="text-red-500">
              Um numero de contato é obrigatório
            </span>
          )}
        </div>
        <ButtonGreen
          title={`${isLoading ? "" : "ENVIAR MEU PEDIDO"}`}
          onClick={() => handleCreateOrder()}
          className="flex w-64 my-8 mb-28 text-lg self-center gap-x-0 justify-evenly shadow-lg shadow-green-400"
        >
          {isLoading ? <LoadingSpinner /> : <FaWhatsapp size={28} />}
        </ButtonGreen>
      </div>
    </div>
  );
};

export default Checkout;
