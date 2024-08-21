"use client";

import axios from "axios";
import Image from "next/image";
import { api } from "@/services/api";
import React, { useState } from "react";
import { FiImage } from "react-icons/fi";
import Produto from "@/model/produtos/produtos";
import Button from "@/components/Header/Button/Button";
import Header from "../../../components/Header/Header";
import colors from "tailwindcss/colors";

const oculos = [
  {
    id: 1,
    estoque: true,
    title: "oculos 1",
    descrition: "este oculos tem estilo verão",
    descount: 20,
    price: 80.99,
    img: require("../../../assets/Oculos/oculos1.jpg"),
  },
  {
    id: 2,
    estoque: true,
    title: "oculos 2",
    descrition: "este oculos tem estilo verão",
    descount: 20,
    price: 80.99,
    img: require("../../../assets/Oculos/oculos2.jpg"),
  },
  {
    id: 3,
    estoque: false,
    title: "oculos 3",
    descrition: "este oculos tem estilo verão",
    descount: 20,
    price: 80.99,
    img: require("../../../assets/Oculos/oculos3.jpg"),
  },
  {
    id: 4,
    estoque: false,
    title: "oculos 4",
    descrition: "este oculos tem estilo verão",
    descount: 20,
    price: 80.99,
    img: require("../../../assets/Oculos/oculos4.jpg"),
  },
];

const Manager = () => {
  const [produtos, setProdutos] = useState<Produto[]>();

  async function getProdutos() {
    const response = await axios
      .get(`${api}/products`)
      .then((response) => setProdutos(response?.data?.Products));
  }
  // (() => getProdutos())();

  return (
    <div className="flex flex-1 h-screen pb-10 flex-col w-full bg-slate-200 justify-center items-center">
      <Header />

      <h1 className="text-2xl px-3 my-16 mt-36 font-sans z-10 text-black/70 drop-shadow-lg ">
        GERENCIAMENTO DE LOJA
      </h1>

      <div className="flex w-full h-screen flex-row flex-wrap-reverse gap-x-10 gap-y-4 px-8">
        <div
          className="flex flex-1 h-96 flex-col p-6 basis-60 gap-y-4 overflow-y-scroll bg-scroll
        bg-slate-300 rounded-lg shadow-black/20 shadow-lg"
        >
          <h2>Todos os produtos</h2>
          {oculos?.map((item: Produto, index: number) => (
            <div
              key={index}
              className="flex w-80 h-28 flex-row bg-slate-300 rounded-md"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={40}
                height={20}
                className="object-fill w-40 h-20"
              />
              <div className="flex-col">
                <p className="text-slate-700 font-bold">{item.title}</p>
                <p className="text-slate-700 font-bold">{item.descrition}</p>
                <p className="text-slate-700 font-bold">{item.descount}</p>
                <p className="text-slate-700 font-bold">{item.price}</p>
                <p>{item.estoque ? "Em estoque" : "Esgotado"} </p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex flex-1 flex-col p-6 basis-1 justify-between items-center
        bg-slate-300 rounded-lg shadow-black/20 shadow-lg"
        >
          <h1 className="text-zinc-600 text-bold text-2xl">
            Adicionar produto
          </h1>

          <div className="w-full flex flex-row gap-x-8">
            <div className="flex flex-col gap-x-2 justify-around items-center">
             
              <Image
                width={100}
                height={100}
                alt="img"
                className="object-cover rounded-lg"
                src={require("../../../assets/Oculos/oculos2.png")}
              />
               <div className="flex flex-row gap-x-2">
              <FiImage size={28} color={colors.zinc[600]} />
              <p className="text-zinc-600">Escolha uma imagem</p>
              </div>
              <Button className="bg-zinc-400/50 w-52 h-10 rounded-md 
              hover:bg-zinc-400 hover:shadow-black/20 hover:shadow-md 
              text-white" title="selecionar"></Button>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 text-lg">Titulo</h1>
              <input
                type="text"
                className="w-60 px-2 bg-white rounded-md text-black"
                id="title"
              />
              <h1 className="text-slate-900 text-lg">Descrição</h1>
              <input
                type="text"
                className="w-60 px-2 bg-white rounded-md text-black"
                id="descrition"
              />
              <h1 className="text-slate-900 text-lg">Preço</h1>
              <input
                type="number"
                className="w-24 px-2 bg-white rounded-md text-black"
                id="price"
              />
              <h1 className="text-slate-900 text-lg">Desconto</h1>
              <input
                type="number"
                className="w-24 px-2 bg-white rounded-md text-black"
                id="descount"
              />
            </div>
          </div>

          <Button className="bg-blue-500 text-white" title="Adicionar"></Button>
        </div>
      </div>

      {/* <div
        className="flex z-10 w-screen flex-row 
             justify-center items-center gap-x-12 gap-y-12 flex-wrap"
      >
        {produtos?.map((item: Produto) => (
          <CardItem
            key={item.id}
            id={item.id}
            estoque={item.estoque}
            price={item.price}
            title={item.title}
            descount={item.descount}
            descrition={item.descrition}
            img={item.img}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Manager;
