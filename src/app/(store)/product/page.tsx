'use client'
import React from 'react'
import { useCarrinho } from '@/contexts/CarrinhoContext/carrinhoContext'

const Product = () => {
    const {produtos, increment, decrement} = useCarrinho();

    return (
        <div className='flex w-full h-44 bg-blue-400'>
            <h1>TOTAL PRODUTOS: {produtos.length} </h1>
            <button onClick={() => increment()}>ADICIONAR </button>
            <button onClick={() => decrement()}>REMOVER </button>
        </div>
    )
}

export default Product;