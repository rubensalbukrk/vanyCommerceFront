'use client'
import React from 'react'
import { useContext } from 'react';
import ContextCarrinho from '@/contexts/CarrinhoContext/carrinhoContext';

const Product = () => {
    const {total, increment, decrement} = useContext(ContextCarrinho)

    return (
        <div className='flex w-full h-44 bg-blue-400'>
            <h1>TOTAL PRODUTOS: {total} </h1>
            <button onClick={() => increment()}>ADICIONAR </button>
            <button onClick={() => decrement()}>REMOVER </button>
        </div>
    )
}

export default Product;