"use client";
import React, {useState} from "react";
import axios from 'axios';
import CardItem from "@/components/CardItems/cardItems";
import Header from '../../../components/Header/Header'
import { api } from "@/services/api";
import Produto from "@/model/produtos/produtos";

const Manager = () => {
    const [produtos, setProdutos] = useState<Produto[]>();

    async function getProdutos() {
        const response = await axios.get(`${api}/products`)
        .then(response => setProdutos(response?.data?.Products))
    }
    
  return (
    <div className="flex-col w-full h-full bg-slate-200 justify-center items-center">

      <Header />

      <div className="flex flex-1 my-16 mt-36">
        <h1 className="text-2xl px-3 font-sans z-10 text-black/70 drop-shadow-lg ">
          GERENCIAMENTO DE LOJA
        </h1>
      </div>

        <button className="w-40 h-12 bg-red-500 justify-center items-center" onClick={() => getProdutos()}>
            <p>CARREGAR TODOS</p>
        </button>
      <div
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
      </div>

      
    </div>
  );
};

export default Manager;
