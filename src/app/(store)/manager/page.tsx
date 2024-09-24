"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { IoCreate } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { FaRectangleList } from "react-icons/fa6";
import Button from "@/components/Header/Button/Button";
import Header from "../../../components/Header/Header";
import ProductList from "../manager/_components/ProductlList";

const Manager = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Permite null ou string

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImagePreview(reader.result); // Armazena a URL da imagem se for string
        }
      };
      reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    }
  };

  return (
    <div className="w-screen bg-slate-100 justify-center items-center">
      <Header />
      <h1
        className="w-full flex flex-row gap-x-2 px-2 text-2xl mt-20 font-semibold items-center text-slate-900 drop-shadow-lg
      bg-white rounded-lg sm:mt-28 sm:text-4xl"
      >
        <MdManageAccounts />
        GERENCIAMENTO DA LOJA
      </h1>

      <div className="flex flex-col sm:flex-row">
        {/*LISTA DOS PRODUTOS */}
        <div
          className="flex flex-col px-2 py-2 gap-x-10 gap-y-4 mt-8 bg-white rounded-md 
        sm:mx-20"
        >
          <h2 className="flex flex-row gap-x-2 px-2 font-bold text-start items-center text-2xl text-slate-700">
            <FaRectangleList />
            Lista de produtos
          </h2>
          <ProductList />
        </div>

        {/* PAINEL PARA CRIAR PRODUTOS */}
        <div
          className="flex flex-col px-2 py-2 my-8
        bg-white rounded-lg shadow-black/20 shadow-lg
        sm:flex-col"
        >
          <h1 className="flex flex-row px-2 gap-x-2 text-slate-700 font-semibold text-3xl">
            <IoCreate />
            Criar produto
          </h1>

          <div className="w-full flex flex-col gap-x-8 sm:flex-row">
            <div className="flex flex-col gap-x-2 justify-around items-center">
              <div className="w-full flex mt-2 items-center justify-center ">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100"
                >
                  {imagePreview ? (
                    <div className="w-full flex items-center justify-center">
                      <Image
                        src={imagePreview}
                        width={120}
                        height={120}
                        alt="Imagem selecionada"
                        className="object-contain rounded-lg shadow-lg"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <CiImageOn size={28} />
                      <p className="text-sm text-gray-600 mt-2">
                        Clique para selecionar uma imagem
                      </p>
                    </div>
                  )}

                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col my-4">
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
                    defaultValue={0.0}
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

          <Button className="bg-blue-500 text-white self-center" title="Adicionar" />
        </div>
      </div>
    </div>
  );
};

export default Manager;
