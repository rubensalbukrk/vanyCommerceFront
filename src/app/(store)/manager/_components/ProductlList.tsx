"use client"
import Image from 'next/image';
import { SiQt } from "react-icons/si";
import React, { useState } from 'react';
import colors from 'tailwindcss/colors';
import ReactPaginate from 'react-paginate';
import GetProdutos from '@/hooks/getProducts';
import Produto from '@/model/produtos/produtos';
import { RiDeleteBinLine } from "react-icons/ri";
import { TbCirclePercentage } from "react-icons/tb";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlinePriceChange } from "react-icons/md";
import { LuTextSelect } from 'react-icons/lu';

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
    <div className='flex flex-col w-full'>
      <ul>
        {currentItems.map((item: Produto, index: number) => (
          <div
          key={index}
          className="flex w-full h-14 my-2 flex-row bg-white/40 rounded-md justify-center items-center
          shadow-black/20 shadow-sm
          "
        >
          <Image
            src={item.img}
            alt={item.title}
            width={40}
            height={20}
            className="object-cover rounded-lg w-40 h-16 shadow-black/20 shadow-sm"
          />
          <div className="flex-col w-full px-4">
            <div className="flex flex-1 w-full  flex-row justify-between items-start">
              <div className="flex flex-1 flex-row gap-x-2">
                <IoPricetagsOutline size={22} color={colors.slate[700]} />
                <p className="flex-1 text-slate-700 font-bold">
                  {item.title}
                </p>
              </div>

         
              <div className="flex w-72 flex-row gap-x-2 pr-4">
                <LuTextSelect size={22} color={colors.slate[700]} />
                <p className="flex-1 text-slate-700 text-sm line-clamp-1 font-bold pr-4">
                {item.descrition}
              </p>
              </div>
              
            </div>
            <div className="flex flex-1 w-full  flex-row justify-between items-start">
              <div className="flex flex-1 flex-row gap-x-2">
                <TbCirclePercentage size={22} color={colors.orange[500]} opacity={0.6} />
                <p className="text-orange-500/60 font-bold">
                  Desconto: {item.descount}%
                </p>
              </div>

              <div className="flex flex-1 flex-row gap-x-2 items-start justify-start">
                <MdOutlinePriceChange size={22} color={colors.green[700]} />
                <p className="text-green-700 font-bold">{item.price}</p>
              </div>
              <div className="flex flex-2 mr-4 relative right-4 flex-row gap-x-2 items-start justify-start">
                <SiQt size={22} color={colors.slate[700]} />
                <p className="text-slate-700 font-bold">2 uni.</p>
              </div>
              <div className="flex flex-3 relative bottom-3 flex-row gap-x-2 items-start justify-start">
                <RiDeleteBinLine size={22} color={colors.slate[700]} />
              </div>
            </div>
          </div>
        </div>
        ))}
      </ul>
      
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(products.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        className='flex flex-row text-black gap-x-4 self-center'
      />
    </div>
  );
};

export default ProductList;