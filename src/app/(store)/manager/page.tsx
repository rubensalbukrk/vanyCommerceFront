"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { IoCreate } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { FaRectangleList } from "react-icons/fa6";
import createProduct from "@/hooks/createProducts";
import Header from "../../../components/Header/Header";
import ProductList from "../manager/_components/ProductlList";

interface ProductFormData {
  estoque: true;
  title: string;
  descrition: string;
  price: number;
  descount: number;
  quantidade: number;
  image: File | null;
}

const Manager = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    estoque: true,
    title: "",
    descrition: "",
    price: 0,
    descount: 0.0,
    quantidade: 1,
    image: null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Exibe a prévia da imagem
      formData.image = file; // Armazena o arquivo no formData
    }
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        [name]: value,
      }));
      console.log({ formData });
    },
    [formData]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append("estoque", formData.estoque.toString());
    formDataToSend.append("title", formData.title);
    formDataToSend.append("descrition", formData.descrition);
    formDataToSend.append("price", formData.price.toString());
    formDataToSend.append("descount", formData.descount.toString());
    formDataToSend.append("quantidade", formData.quantidade.toString());

    formData.image && formDataToSend.append("image", formData.image);

    try {
      const response = await createProduct(formDataToSend);

      console.log("Produto enviado com sucesso");
    } catch (error) {
      console.error("Erro ao enviar produto:", error);
    }
  };

  return (
    <div className="w-screen bg-slate-100 justify-center items-center pb-10">
      <Header />
      <h1
        className="w-full flex flex-row gap-x-2 px-2 text-2xl mt-20 font-semibold items-center text-slate-900 drop-shadow-lg
      bg-white sm:mt-28 sm:text-4xl"
      >
        <MdManageAccounts />
        GERENCIAMENTO DA LOJA
      </h1>

      <div className="flex flex-col sm:flex-row sm:justify-around gap-x-8">
        {/*LISTA DOS PRODUTOS */}
        <div
          className="flex flex-col px-2 py-2 gap-x-10 gap-y-4 mt-8 bg-white rounded-md 
        "
        >
          <h2 className="flex flex-row gap-x-2 px-2 font-bold text-start items-center text-2xl text-slate-700">
            <FaRectangleList />
            Lista de produtos
          </h2>
          <ProductList />
        </div>

        {/* PAINEL PARA CRIAR PRODUTOS */}
        <div
          className="flex flex-col px-2 py-2 mt-8 mx-2 
        bg-white rounded-lg shadow-black/20 shadow-lg
        sm:flex-col sm:h-96 sm:justify-evenly"
        >
          <h1 className="flex flex-row px-2 gap-x-2 text-slate-700 font-semibold text-3xl">
            <IoCreate />
            Criar produto
          </h1>

          <div className="w-full flex flex-col gap-x-8 sm:flex-row ">
            <form
              onSubmit={handleSubmit}
              className="flex p-4 bg-white gap-x-4"
            >
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
                        <p className="text-sm text-center text-gray-600 mt-2">
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
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                  
                >
                  Enviar Produto
                </button>
              </div>

              <div className="flex flex-col my-4">
                <label className="text-slate-900 text-lg">Titulo</label>

                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />

                <label htmlFor="descrition" className="block font-bold">
                  Descrição
                </label>
                <input
                  type="text"
                  id="descrition"
                  name="descrition"
                  value={formData.descrition}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />

                <div className="flex flex-row justify-between gap-x-2">
                  <div>
                    <label htmlFor="price" className="block font-bold">
                      Preço
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="price" className="block font-bold">
                      Quantidade
                    </label>
                    <input
                      type="number"
                      id="quantidade"
                      name="quantidade"
                      value={formData.quantidade}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                </div>
                <label htmlFor="price" className="block font-bold">
                  Desconto
                </label>
                <input
                  type="number"
                  id="descount"
                  name="descount"
                  value={formData.descount}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
