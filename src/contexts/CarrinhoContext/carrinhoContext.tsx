import React, { createContext, useContext, useState, useEffect } from "react";
import Produto from "@/model/produtos/produtos";

interface ContextCarrinhoProps {
  items: ItemCart[]
  itemsCount: number
  produtos: Array<Produto>;
  addItem: (item: Produto) => void;
  removerItem: (produto: Produto) => void;
  descount: number
}

interface ItemCart {
  produto: Produto
  quantidade: number
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
  const [items, setItems] = useState<ItemCart[]>([]);
  const [total, setTotal] = useState(0);
  const [descount, setDescount] = useState(0)

  const addItem = (produto: Produto) => {
    const indice = items.findIndex((i) => i.produto.id === produto.id )
    
    if (indice === -1){
      setItems([...items, {produto, quantidade: 1}])
    }else {
      const novoItens = [...items]
      novoItens[indice].quantidade++
      setItems(novoItens)
    }
    calcularDesconto(produto.price, produto.descount)
  }
  const removerItem = (produto: Produto) => {
    const novosItems = items.map((i) => { 
      if(i.produto.id === produto.id){
        i.quantidade--
      }
      return i
    }).filter((i) => i.quantidade > 0)
    setItems(novosItems)
    retirarDesconto(produto.price, produto.descount)
  }
  function calcularDesconto(valor: number, descountItem: number) {
    const desconto = valor * descountItem;
    const valorComDesconto = valor - desconto;
    setDescount(descount + valorComDesconto)
  }
  function retirarDesconto(valor: number, descountItem: number) {
    const desconto = valor * descountItem;
    const valorComDesconto = valor - desconto;
    setDescount(descount - valorComDesconto)
  }


  {useEffect(() => {
    items.map((item: ItemCart) => {
          setTotal(total + item.produto.price)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[items])}

  return (
    <ContextCarrinho.Provider
      value={{
        produtos,
        get itemsCount() {
          return items.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual.quantidade;
          }, 0)
        },
        items,
        addItem,
        removerItem,
        descount      
      }}
    >
      {props.children}
    </ContextCarrinho.Provider>
  );
}

export const useCarrinho = () => useContext(ContextCarrinho);

export default ContextCarrinho;
