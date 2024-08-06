'use client'
import { ProvedorCarrinho } from "@/contexts/CarrinhoContext/carrinhoContext"

export default function Layout (props: any) {
    return (
        <ProvedorCarrinho>
  <div className="flex border-4 border-red-600 ">
        {props.children}
    </div>
        </ProvedorCarrinho>
  
)
}