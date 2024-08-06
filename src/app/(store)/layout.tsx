'use client'
import { ProvedorCarrinho } from "@/contexts/CarrinhoContext/carrinhoContext"

export default function Layout (props: any) {
    return (
        <ProvedorCarrinho>
  <div className="flex">
        {props.children}
    </div>
        </ProvedorCarrinho>
  
)
}