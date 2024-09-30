"use client";
import Image from "next/image";
import { SiQt } from "react-icons/si";
import React, { useState, useMemo } from "react";
import colors from "tailwindcss/colors";
import { BiDetail } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import GetProdutos from "@/hooks/getProducts";
import Produto from "@/model/produtos/produtos";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbCirclePercentage } from "react-icons/tb";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlinePriceChange } from "react-icons/md";

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
              className="object-cover rounded-lg w-20 h-20"
            />
            <div className="flex-col w-full px-2">
              <div className="flex flex-col w-full  justify-center items-start">
                <div className="flex flex-row w-full justify-between">
                  <p className="flex flex-row text-sm text-slate-700 items-center gap-x-2">
                    <IoPricetagsOutline size={16} color={colors.slate[500]} />
                    {item.title}
                  </p>
                  <RiDeleteBinLine size={16} color={colors.slate[700]} />
                </div>
                <div className="flex flex-row overflow-hidden items-center gap-x-2">
                  <BiDetail size={16} color={colors.slate[500]} />
                  <p className="w-full text-sm line-clamp-2 overflow-y-scroll">
                    {item.descrition}
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-between items-start">
                <p className="flex flex-row items-center text-slate-500 text-xs font-bold gap-x-2 ">
                  <TbCirclePercentage size={16} color={colors.slate[500]} />
                  Desconto: {item.descount}%
                </p>

                <div className="flex flex-row gap-x-2 items-start justify-start">
                  <MdOutlinePriceChange size={16} color={colors.green[700]} />
                  <p className="text-green-700 text-xs font-bold">
                    R$ {item.price}
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
