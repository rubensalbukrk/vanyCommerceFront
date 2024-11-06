"use client";
import Image from "next/image";
import axios from "axios";
import { SiQt } from "react-icons/si";
import React, { useEffect, useState } from "react";
import colors from "tailwindcss/colors";
import { BiDetail } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import { Switch } from "@/components/ui/switch";
import Produto from "@/model/produtos/produtos";
import { RiDeleteBinLine } from "react-icons/ri";
import deleteProduct from "@/hooks/deleteProduct";
import { TbCirclePercentage } from "react-icons/tb";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlinePriceChange } from "react-icons/md";
import { useCart } from "@/contexts/CartContext/cartContext";
import updateProduct from "@/hooks/updateProduct";
import { api } from "@/services/api";

const itemsPerPage = 5;

const ProductList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { products, setProducts } = useCart();

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;

  let currentItems = products?.slice(offset, offset + itemsPerPage);
   
  async function _getProducts() {
      const response = await axios
        .get(`${api}/products`)
        .then((response) => setProducts(response?.data?.Products));
    }

  return (
    <div className="flex flex-col sm:w-full">
      <ul>
        {currentItems
          ?.filter((item: Produto) => item) // Filtra itens que não são nulos/indefinidos
          .map((item: Produto, index: number) => (
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
                    <RiDeleteBinLine
                    className="cursor-pointer"
                      onClick={() => [
                        deleteProduct(item.id),
                        _getProducts()]}
                      size={16}
                      color={colors.slate[700]}
                    />
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
                    <p className="text-slate-700 text-xs font-bold">
                      {item.count} uni.
                    </p>
                  </div>
                  <div className="flex relative flex-row gap-x-2 items-start justify-start">
                    <p className="text-slate-700 text-xs font-bold">
                      Estoque
                    </p>
                    <Switch 
                    checked={item.estoque} 
                    onCheckedChange={() => [
                      updateProduct(item.id, item.count, !item.estoque),
                      _getProducts()]} />
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
        pageCount={Math.ceil(products?.length / itemsPerPage)}
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
