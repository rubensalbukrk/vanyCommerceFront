import React from "react";
import Image from "next/image";
import IconAddCart from "@/assets/CARTADDICON.png";

const ButtonCard = (
    { onClick, className }: { onClick: any; className?: any}) => {
  let style = "flex w-full px-6 h-14 bg-blue-400 justify-between items-center rounded-bl-xl rounded-br-xl hover:bg-blue-500 transition duration-1000 ease-in-out active:bg-blue-700 ";
  return (
    <button onClick={onClick} className={`${style} + ${className}`}>
      <Image src={IconAddCart} alt="icon cart" className="w-8 h-6" />
      <p className="text-white text-2xl">Adicionar</p>
    </button>
  );
};

export default ButtonCard;
