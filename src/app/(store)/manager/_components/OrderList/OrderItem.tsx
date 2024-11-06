import React from "react";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { TbShoppingCartDown } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";

export interface OrderItemProps {
  orderId: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  total: string;
  products: {
    id: string;
    title: string;
  }[];
}

const colors = [
  "red-300",
  "blue-300",
  "green-300",
  "yellow-300",
  "purple-300",
  "pink-300",
  "indigo-300",
  "cyan-300",
  "orange-300",
  "lime-300",
];

const OrderItem = (props: OrderItemProps) => {
  return (
    <div className="w-full self-center px-4 py-2 my-2 bg-slate-100 rounded-lg">
      <div className="flex flex-row items-center bg-">
        <AiOutlineFieldNumber size={30} />
        <p className="font-bold text-xl"> - {props.orderId}</p>
      </div>
      <div className="flex flex-row gap-x-2 items-center">
        <FaRegUser size={20} />
        <p className="font-bold text-xl"> {props.name}</p>
      </div>
      <div className="flex flex-row gap-x-2 items-center">
        <MdOutlineLocationOn size={20} />
        <p className="font-bold text-xl"> {props.address}</p>
      </div>
      <div className="flex flex-row gap-x-2 items-center">
        <GrMapLocation size={20} />
        <p className="font-bold text-xl"> {props.city}</p>
      </div>
      <div className="flex flex-row gap-x-2 items-center">
        <FiPhone size={20} />
        <p className="font-bold text-xl"> {props.phone}</p>
      </div>
      <div className="flex w-full flex-col mt-2 gap-x-2">
        <div className="flex flex-row gap-x-2">
          <TbShoppingCartDown size={20} />
          <p className="font-bold text-xl">Produtos</p>
        </div>
        <div className="flex flex-row mt-1 mb-4 flex-wrap gap-2">
          {props?.products?.map((item) => {
            const randomColor =
              colors[Math.floor(Math.random() * colors.length)];
            return (
              <div key={item.id} className="flex min-w-min">
                <p className={`px-2 bg-${randomColor} rounded-lg shadow-${randomColor} shadow-md`}>{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="flex w-full justify-between my-2">
          <div className="flex flex-row gap-x-2 items-center">
            <BiMoneyWithdraw size={20} />{" "}
            <h1 className="font-bold text-xl">
              {props.total.replace(".", ",")}
            </h1>
          </div>

          <button className="flex flex-row px-2 h-10 gap-x-2 font-semibold items-center justify-evenly
             text-white bg-green-500 rounded-lg shadow-green-500 shadow-md">
            <GiConfirmed color="white" size={18} />
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
