"use client";
import axios from "axios";
import Image from "next/image";
import { api } from "@/services/api";
import React, { useCallback, useState, useEffect } from "react";
import { CiImageOn } from "react-icons/ci";
import { IoCreate } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { MdManageAccounts } from "react-icons/md";
import { FaRectangleList } from "react-icons/fa6";
import createProduct from "@/hooks/createProducts";
import Header from "../../../components/Header/Header";
import ProductList from "../manager/_components/ProductlList";
import { useCart } from "@/contexts/CartContext/cartContext";

interface ProductFormData {
  estoque: true;
  title: string;
  descrition: string;
  price: string;
  descount: number;
  count: number;
  image: File | null;
}

const Manager = () => {
  const { user, products, setProducts } = useCart();
  const [valor, setValor] = useState('');
  const [formData, setFormData] = useState<ProductFormData>({
    estoque: true,
    title: "",
    descrition: "",
    price: valor,
    descount: 0.0,
    count: 1,
    image: null,
  });
  const [productUpdated, setProductUpdated] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const router = useRouter();

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
    },
    []
  );

  function handleInputChangeMoeda(e: React.ChangeEvent<HTMLInputElement>) {
    const valorDigitado = e.target.value;
    const valorSemFormatacao = valorDigitado.replace(/[^\d]/g, '');
    if (valorSemFormatacao === '') {
      setValor('');
      return;
    }
    setFormData({...formData, price: formatarParaReal(valorSemFormatacao)})
    // Formatar o valor para moeda e atualizar o estado
    setValor(formatarParaReal(valorSemFormatacao));
  }

  function formatarParaReal(valor: string): string {
    const valorNumerico = parseFloat(valor.replace(/[^\d]/g, '')) / 100;

    if (isNaN(valorNumerico)) {
      return '';
    }

    return valorNumerico.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append("estoque", formData.estoque.toString());
    formDataToSend.append("title", formData.title);
    formDataToSend.append("descrition", formData.descrition);
    formDataToSend.append("price", formData.price.toString());
    formDataToSend.append("descount", formData.descount.toString());
    formDataToSend.append("count", formData.count.toString());

    formData.image && formDataToSend.append("image", formData.image);

    try {
      const response = await createProduct(formDataToSend);

      response && alert(JSON.stringify(response?.message));
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  };

  const handleUpdateProduct = () => {
    setProductUpdated(prev => !prev)
  }

  useEffect(() => {
    if (!user?.token) {
      router.push("/login");
      alert("ACESSO RESTRITO");
    }
  }, [user, router]);

  useEffect(() => {
    async function _getProducts() {
      const response = await axios
        .get(`${api}/products`)
        .then((response) => setProducts(response?.data?.Products));
    }
    _getProducts();
  }, [productUpdated, setProducts]);

  return (
    <div className="w-screen bg-slate-100 justify-center items-center pb-10">
      <Header />

      {/** LOADER */}
      {!user.token ? (
        <div className="flex flex-col z-50 absolute w-screen h-screen bg-blue-100 items-center justify-center">
          <div className="w-8 h-8 border-4 my-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          <h1 className="text-xl text-slate-900 font-bold">
            VERIFICANDO ACESSO
          </h1>
        </div>
      ) : (
        <div className="w-screen">
          <div
            className="flex max-w-sm h-12 items-end px-4 gap-x-2 mt-20 shadow-lg shadow-black/20
              bg-white rounded-lg sm:mt-28"
          >
            <Image
              src={user.user.avatar}
              alt={user.user.name}
              width={80}
              height={80}
              className="rounded-full self-center"
            />
            <div>
              <h1 className="w-52">Bem vindo(a)</h1>
              <h1 className="w-52">{user.user.name} </h1>
            </div>
          </div>
          <h1
            className="w-full flex flex-row gap-x-2 px-2 text-2xl mt-10 font-semibold items-center text-slate-900 
                        sm:mt-18 sm:text-4xl"
          >
            <MdManageAccounts />
            GERENCIAMENTO DA LOJA
          </h1>
          <div className="flex flex-col sm:flex-row sm:justify-around">
            {/*LISTA DOS PRODUTOS */}
            <div
              className="flex flex-col px-2 py-2 gap-y-4 mt-8 bg-white rounded-md shadow-lg shadow-black/20 
                        sm:w-6/12"
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
                      onClick={() => handleUpdateProduct()}
                      className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                      Criar
                    </button>
                  </div>

                  <div className="flex flex-col my-4">
                    <label className="block font-bold">Titulo</label>

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
                    <div className="w-full">
                      <label htmlFor="price" className="block font-bold">
                        Preço
                      </label>
                      <input
                        id="price"
                        name="price"
                        type="text"
                        value={valor}
                        onChange={handleInputChangeMoeda}
                        placeholder="Digite o valor"
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>

                    <div className="flex flex-row justify-between gap-x-2">
                      <div>
                        <label htmlFor="descount" className="block font-bold">
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
                      <div>
                        <label htmlFor="price" className="block font-bold">
                          Qnt.
                        </label>
                        <input
                          type="number"
                          id="count"
                          name="count"
                          value={formData.count}
                          onChange={handleInputChange}
                          className="w-12 p-2 border rounded-md "
                          required
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manager;
