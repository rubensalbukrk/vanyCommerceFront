import React, {createContext, useContext, useState} from 'react';

interface ContextCarrinhoProps {
    total: number;
    items?: number;
    increment: () => void;
    decrement: () => void;
}

const ContextCarrinho = createContext<ContextCarrinhoProps>({} as any);

export function ProvedorCarrinho (props: any) {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)

    return <ContextCarrinho.Provider value={{
        total,
        increment: () => setTotal(total + 1),
        decrement: () => setTotal(total - 1)
    }} >
        {props.children}
    </ContextCarrinho.Provider>
}

export const useCarrinho = () => useContext(ContextCarrinho)

export default ContextCarrinho;