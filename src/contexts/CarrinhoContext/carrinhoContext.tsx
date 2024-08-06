import React, { createContext, useContext, useState } from "react";
import Produto from "@/model/produtos/produtos";
import ItemCarrinho from "@/model/itemCarrinho/itemCarrinho";

interface ContextCarrinhoProps {
  produtos: Array<Produto>;
  items?: any
  increment: () => void;
  decrement: () => void;
  addItem: (produto: Produto) => void;
  total: number
  setTotal: (total: number) => void;
}
const ContextCarrinho = createContext<ContextCarrinhoProps>({} as any);

export function ProvedorCarrinho(props: any) {
  const [produtos, setProdutos] = useState([
    {
        id: 1,
        estoque: true,
        title: "Rommeu",
        price: 69.90,
        descount: "10,00",
        descrition: "teste 1",
        img: require('../../assets/Oculos/oculos1.png')
    },
    {
        id: 2,
        estoque: true,
        title: "Armação",
        price: 89.99,
        descrition: "teste 1",
        descount: "10,00",
        img: require('../../assets/Oculos/oculos2.png')
    },
    {
        id: 3,
        estoque: false,        
        title: "Rayban",
        price: 59.90,
        descount: "10,00",
        descrition: "teste 1",
        img: require('../../assets/Oculos/oculos3.png')
    },
    {
      id: 4,
      estoque: false,
      title: "Social",
      price: 49.90,
      descount: "10,00",
      descrition: "teste 1",
      img: require('../../assets/Oculos/oculos4.png')
    },
    {
      id: 5,
      estoque: false,
      title: "Rommeu",
      price: 69.90,
      descount: "10,00",
      descrition: "teste 1",
      img: require('../../assets/Oculos/oculos1.png')
  },
  {
      id: 6,
      estoque: true,
      title: "Armação",
      price: 99.99,
      descrition: "teste 1",
      descount: "10,00",
      img: require('../../assets/Oculos/oculos2.png')
  },
  {
      id: 7,
      estoque: true,
      title: "Rayban",
      price: 59.90,
      descount: "10,00",
      descrition: "teste 1",
      img: require('../../assets/Oculos/oculos3.png')
  },
  {
    id: 8,
    estoque: true,
    title: "Social",
    price: 49.90,
    descount: "10,00",
    descrition: "teste 1",
    img: require('../../assets/Oculos/oculos4.png')
}
  ]);
  const [items, setItems] = useState<any | undefined>([]);
  const [total, setTotal] = useState(0);


  const addItem = (produto: Produto) => {
    setItems([...items, {
      id: produto.id,
      title: produto.title,
      descrition: produto.descrition,
      descount: produto.descount,
      price: produto.price,
      img: produto.img,
      estoque: produto.estoque
    }])

  }


  return (
    <ContextCarrinho.Provider
      value={{
        produtos,
        items,
        increment: () => setTotal(total + 1),
        decrement: () => setTotal(total - 1),
        addItem,
        total,
        setTotal
      }}
    >
      {props.children}
    </ContextCarrinho.Provider>
  );
}

export const useCarrinho = () => useContext(ContextCarrinho);

export default ContextCarrinho;
