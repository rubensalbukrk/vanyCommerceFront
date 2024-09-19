import Image from "next/image";
import React, { useState } from "react";
import colors from "tailwindcss/colors";
import { FiImage } from "react-icons/fi";
import Button from "@/components/Header/Button/Button";
import Header from "../../../components/Header/Header";
import ProductList from "../manager/_components/ProductlList";


const Manager = () => {

  return (
    <div className="flex flex-1 h-screen pb-10 px-4 flex-col w-full bg-slate-100 justify-center items-center">
      <Header />
      <h1 className="w-full text-4xl text-start px-8 my-8 mt-36 font-semibold  text-slate-900 drop-shadow-lg ">
        GERENCIAMENTO DA LOJA
      </h1>
      <h2 className="w-full font-semibold text-start text-2xl text-slate-700">LISTA DE PRODUTOS</h2>
      <div className="flex w-full h-screen flex-row flex-wrap-reverse gap-x-10 gap-y-4 px-8">
        <div
          className="flex flex-1 h-96 flex-col p-6 basis-60 gap-y-4
        bg-slate-50 rounded-lg shadow-black/20 shadow-lg"
        >
          <ProductList />
        </div>
        <div
          className="flex flex-1 flex-col p-6 basis-1 justify-between items-center
        bg-slate-50 rounded-lg shadow-black/20 shadow-lg"
        >
          <h1 className="text-slate-700 font-semibold text-3xl">
            CRIAR PRODUTO
          </h1>

          {/* PAINEL ADICIONAR PRODUTO */}
          <div className="w-full flex flex-row gap-x-8">
            <div className="flex flex-col gap-x-2 justify-around items-center">
              <Image
                width={100}
                height={100}
                alt="img"
                className="object-cover rounded-lg shadow-black/30 shadow-md"
                src={require("../../../assets/Oculos/oculos2.png")}
              />
              <div className="flex flex-row gap-x-2">
                <FiImage size={28} color={colors.zinc[600]} />
                <p className="text-zinc-600">Escolha uma imagem</p>
              </div>
              <Button
                className="bg-zinc-400/50 w-52 h-10 rounded-md 
              hover:bg-zinc-400 hover:shadow-black/20 hover:shadow-md 
              text-white"
                title="selecionar"
              ></Button>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 text-lg">Titulo</h1>
              <input
                type="text"
                className="w-60 px-2 bg-slate-100 rounded-md text-black"
                id="title"
              />
              <h1 className="text-slate-900 text-lg">Descrição</h1>
              <input
                type="text"
                className="w-60 px-2 bg-slate-100 rounded-md text-black"
                id="descrition"
              />
              <div className="flex flex-row justify-between">
              <div>
              <h1 className="text-slate-900 text-lg">Preço</h1>
              <input
                type="number"
                defaultValue={0.00}
                className="w-24 px-2 bg-slate-100 rounded-md text-black"
                id="price"
              />
              </div>
              <div>
              <h1 className="text-slate-900 text-lg">Quantidade</h1>
              <input
                type="number"
                defaultValue={1}
                className="w-24 px-2 bg-slate-100 rounded-md text-black"
                id="quantidade"
              />
              </div>
              </div>
              <h1 className="text-slate-900 text-lg">Desconto</h1>
              <input
                type="number"
                className="w-24 px-2 bg-slate-100 rounded-md text-black"
                id="descount"
              />
            </div>
          </div>

          <Button className="bg-blue-500 text-white" title="Adicionar"></Button>
        </div>
      </div>

    </div>
  );
};

export default Manager;
