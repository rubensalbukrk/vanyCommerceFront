"use client";
import Image from "next/image";
import { SiQt } from "react-icons/si";
import React, { useState } from "react";
import colors from "tailwindcss/colors";
import ReactPaginate from "react-paginate";
import GetProdutos from "@/hooks/getProducts";
import Produto from "@/model/produtos/produtos";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbCirclePercentage } from "react-icons/tb";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlinePriceChange } from "react-icons/md";
import { LuTextSelect } from "react-icons/lu";

const itemsPerPage = 5;

const ProductList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const products = GetProdutos() || [];

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);

  return (
    <div className="flex flex-col w-full">
      <ul>
        {currentItems.map((item: Produto, index: number) => (
          <div
            key={index}
            className="flex my-2 flex-row bg-white/40 rounded-md justify-center items-center
          shadow-black/20 shadow-sm"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={20}
              height={20}
              className="object-cover rounded-lg w-20 h-20 shadow-black/20 shadow-sm"
            />
            <div className="flex-col w-full px-2">
              <div className="flex flex-col w-full  justify-center items-start">
                <div className="flex flex-row w-full justify-between">
                  <p className="flex flex-row text-md text-slate-700 font-bold items-center gap-x-2">
                    <IoPricetagsOutline size={16} color={colors.slate[700]} />
                    {item.title}
                  </p>
                  <RiDeleteBinLine size={16} color={colors.slate[700]} />
                </div>
                <p className="text-sm line-clamp-1">{item.descrition}</p>
              </div>

              <div className="flex flex-row justify-between items-start mt-2">
                <div className="flex flex-row">
                  <TbCirclePercentage
                    size={16}
                    color={colors.slate[700]}
                    opacity={0.6}
                  />
                  <p className="text-slate-700 text-xs font-bold">
                    Desconto: {item.descount}%
                  </p>
                </div>

                <div className="flex flex-row gap-x-2 items-start justify-start">
                  <MdOutlinePriceChange size={16} color={colors.green[700]} />
                  <p className="text-green-700 text-xs font-bold">
                    {item.price}
                  </p>
                </div>
                <div className="flex relative flex-row gap-x-2 items-start justify-start">
                  <SiQt size={16} color={colors.slate[700]} />
                  <p className="text-slate-700 text-xs font-bold">2 uni.</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>

      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Proxima"}
        breakLabel={"..."}
        pageCount={Math.ceil(products.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        className="flex flex-row text-black gap-x-4 self-center"
      />
    </div>
  );
};

export default ProductList;
