import Image from "next/image";
import React from "react";
import ArrowIcon from "../../assets/arrow-right-black.png";

interface CardRecentProps {
  id: number;
  title: string;
  price: string;
  img: any;
  className?: string;
}

const CardRecent: React.FC<CardRecentProps> = ({
  id,
  title,
  price,
  img,
  className,
}) => {
  return (
    <div className="h-72 rounded-lg bg-white shadow-black/40 shadow-xl cursor-pointer
    transform-transition ease-linear duration-1000 hover:scale-125
    ">
      <Image
        src={img}
        alt={title}
        className="h-56 rounded-tl-lg rounded-tr-lg"
      />
      <div className="flex flex-row justify-between px-4">
      <div>
        <h1 className="text-2xl text-black/80">{title}</h1>
        <h1 className="text-xl text-black/80 font-bold">R$ {price}</h1>
      </div>
      <div>
        <a onClick={() => alert(`você escolheu: ${id}`)}>
          <Image
            src={ArrowIcon}
            alt="ARROW ICON"
            className="mt-3 transform transition-transform duration-300 ease-in-out hover:scale-150"
          />
        </a>
      </div>
      </div>
    </div>
  );
};

export default CardRecent;
