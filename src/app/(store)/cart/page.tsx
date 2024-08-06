"use client"
import { useCarrinho } from "@/contexts/CarrinhoContext/carrinhoContext";
import React, {useEffect} from "react";
import CardItem from "@/components/CardItems/cardItems";
import Produto from "@/model/produtos/produtos";
import Header from "@/components/Header/Header";

const Carrinho = () => {

const {items, produtos, total, setTotal} = useCarrinho()


useEffect(() => {
items.map((item: Produto) => {
      setTotal(total + item.price)
  })

// eslint-disable-next-line react-hooks/exhaustive-deps
},[items])

    return(
        <div className="flex flex-1 h-screen py-20 flex-col w-full bg-slate-200 justify-center items-center">
            <Header />
        
        <h1 className="text-4xl text-black/50">QUANTIDADE ITEMS: {items ? items?.length : "Não tem items"}</h1>
        <h1 className="text-4xl text-black/50">Total do pagamento: {total}</h1>
        <div className="flex flex-1 flex-row">
        {items.map((item: Produto) => <CardItem
            key={item.id}
            id={item.id}
            estoque={item.estoque}
            price={item.price}
            title={item.title}
            descount={item.descount}
            descrition={item.descrition}
            img={item.img}
          /> )}
        </div>

        </div>
    )
}

export default Carrinho;