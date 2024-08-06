import React, { createContext, useContext, useState } from "react";
import Produto from "@/model/produtos/produtos";

interface ContextCarrinhoProps {
  produtos: Array<Produto>;
  items?: number;
  increment: () => void;
  decrement: () => void;
}


const ContextCarrinho = createContext<ContextCarrinhoProps>({} as any);

export function ProvedorCarrinho(props: any) {
  const [produtos, setProdutos] = useState([
    {
        id: 1,
        title: "Rommeu",
        price: "69,90",
        descount: "10,00",
        descrition: "teste 1",
        img: require('../../assets/Oculos/oculos1.png')
    },
    {
        id: 2,
        title: "Armação",
        price: "89,99",
        descrition: "teste 1",
        descount: "10,00",
        img: require('../../assets/Oculos/oculos2.png')
    },
    {
        id: 3,
        title: "Rayban",
        price: "59,90",
        descount: "10,00",
        descrition: "teste 1",
        img: require('../../assets/Oculos/oculos3.png')
    },
    {
      id: 4,
      title: "Social",
      price: "49,90",
      descount: "10,00",
      descrition: "teste 1",
      img: require('../../assets/Oculos/oculos4.png')
  }
  ]);
  const [total, setTotal] = useState(0);

  return (
    <ContextCarrinho.Provider
      value={{
        produtos,
        increment: () => setTotal(total + 1),
        decrement: () => setTotal(total - 1),
      }}
    >
      {props.children}
    </ContextCarrinho.Provider>
  );
}

export const useCarrinho = () => useContext(ContextCarrinho);

export default ContextCarrinho;
