import React, { createContext, useContext, useState, useEffect } from "react";
import Produto from "@/model/produtos/produtos";

interface ContextCarrinhoProps {
  produtos: Array<Produto>;
  items?: any
  increment: () => void;
  decrement: () => void;
  addItem: (produto: Produto) => void;
  total: number
  descount: number
  setTotal: (total: number) => void;
}
const ContextCarrinho = createContext<ContextCarrinhoProps>({} as any);

export function ProvedorCarrinho(props: any) {
  const [produtos, setProdutos] = useState([
    {
        id: 1,
        estoque: true,
        title: "Rommeu",
        price: 80.86,
        descount: 0.10,
        descrition: "Perfeitos para atividades ao ar livre, os óculos de sol esportivo apresentam armação emborrachada e lentes espelhadas anti-reflexo. Oferecem proteção total contra raios UV e são extremamente duráveis.",
        img: require('../../assets/Oculos/oculos1.png')
    },
    {
        id: 2,
        estoque: true,
        title: "Armação",
        price: 90.99,
        descrition: "Os óculos de sol aviador clássico são um ícone de estilo intemporal. Com armação metálica dourada e lentes polarizadas, oferecem proteção UV400, garantindo segurança e elegância em qualquer ocasião.",
        descount: 0.10,
        img: require('../../assets/Oculos/oculos2.png')
    },
    {
        id: 3,
        estoque: false,        
        title: "Rayban",
        price: 35.00,
        descount: 0.20,
        descrition: "Com design elegante e feminino, os óculos de sol gatinho são ideais para quem busca estilo e sofisticação. A armação de acetato preto com detalhes dourados e lentes escuras completam o visual chique.",
        img: require('../../assets/Oculos/oculos3.png')
    },
    {
      id: 4,
      estoque: false,
      title: "Social",
      price: 45.00,
      descount: 0.15,
      descrition: "Os óculos de grau quadrado moderno são a escolha perfeita para um look contemporâneo. Com armação em metal leve e lentes antirreflexo, oferecem conforto durante o uso prolongado e um visual elegante.",
      img: require('../../assets/Oculos/oculos4.png')
    },
    {
      id: 5,
      estoque: false,
      title: "Rommeu",
      price: 69.00,
      descount: 0.10,
      descrition: "Adicione um toque de cor ao seu estilo com os óculos de sol espelhado colorido. As lentes espelhadas refletem a luz, protegendo seus olhos, enquanto a armação resistente garante durabilidade.",
      img: require('../../assets/Oculos/oculos1.png')
  },
  {
      id: 6,
      estoque: true,
      title: "Armação",
      price: 110.00,
      descrition: "Os óculos de grau clássico tartaruga combinam tradição e sofisticação. A armação em padrão tartaruga é leve e confortável, e as lentes de alta precisão oferecem uma visão clara e sem distorções.",
      descount: 0.10,
      img: require('../../assets/Oculos/oculos2.png')
  },
  {
      id: 7,
      estoque: true,
      title: "Rayban",
      price: 85.00,
      descount: 0.10,
      descrition: "Os óculos de grau quadrado moderno são a escolha perfeita para um look contemporâneo. Com armação em metal leve e lentes antirreflexo, oferecem conforto durante o uso prolongado e um visual elegante",
      img: require('../../assets/Oculos/oculos3.png')
  },
  {
    id: 8,
    estoque: true,
    title: "Social",
    price: 75.00,
    descount: 0.20,
    descrition: "Os óculos de sol redondo vintage trazem um charme retrô para o seu visual. Com armação metálica fina e lentes polarizadas, oferecem proteção UV400 e um estilo autêntico e descontraído.",
    img: require('../../assets/Oculos/oculos4.png')
}
  ]);
  const [items, setItems] = useState<any | undefined>([]);
  const [total, setTotal] = useState(0);
  const [descount, setDescount] = useState(0)

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
    calcularDesconto(produto.price, produto.descount)
  }
  function calcularDesconto(valor: number, descountItem: number) {
    const desconto = valor * descountItem;
    const valorComDesconto = valor - desconto;
    setDescount(descount + valorComDesconto)
  }

  useEffect(() => {
    items.map((item: Produto) => {
          setTotal(total + item.price)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[items])

  return (
    <ContextCarrinho.Provider
      value={{
        produtos,
        items,
        increment: () => setTotal(total + 1),
        decrement: () => setTotal(total - 1),
        addItem,
        total,
        descount,
        setTotal
      }}
    >
      {props.children}
    </ContextCarrinho.Provider>
  );
}

export const useCarrinho = () => useContext(ContextCarrinho);

export default ContextCarrinho;
