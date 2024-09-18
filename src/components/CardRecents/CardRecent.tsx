import Image from "next/image";
import React from "react";
import ArrowIcon from "../../assets/arrow-right-black.png";
import Produto from "@/model/produtos/produtos";

interface CardRecentProps extends Produto {
  className?: string;
}

const CardRecent: React.FC<CardRecentProps> = ({
  id,
  title,
  price,
  descount,
  descrition,
  avaiable,
  img,
  className,
}) => {
  return (
    <div
      className="flex w-56 flex-col flex-wrap my-4 h-40
    "
    >
      <Image src={img} alt={title} className="w-64 h-40 object-cover rounded-lg" />
      <div className="flex-2 flex-row justify-between px-4">
        <div className="w-full">
          <h1 className="text-2xl text-black/80">{title}</h1>
          <h1 className="text-md text-zinc-100 text-ellipsi line-clamp-2 ">{descrition}</h1>
        </div>
        <div
          className="flex w-24 flex-row justify-start items-center gap-x-2
      transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer
      "
        >
          <h1 className="text-blue-400 text-lg font-bold underline">ver mais</h1>
          <a onClick={() => alert(`você escolheu: ${id}`)}>
            <Image src={ArrowIcon} alt="ARROW ICON" className="w-3 h-4 object-fill" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardRecent;
