import React from "react";
import IconCart from '@/assets/cart.png'
import Image from "next/image";
import IconAddCart from "@/assets/CARTADDICON.png"

const ButtonCard = (props: any) => {
    return (
        <button onClick={props.onClick} className="flex w-full px-6 h-14 bg-blue-400 
        justify-between items-center rounded-bl-xl rounded-br-xl
        hover:bg-blue-500 transition duration-1000 ease-in-out
        active:bg-blue-700
         ">
            <Image src={IconAddCart} alt='icon cart' />
            <p className="text-white text-2xl">Adicionar</p>
        </button>
    )
}

export default ButtonCard;