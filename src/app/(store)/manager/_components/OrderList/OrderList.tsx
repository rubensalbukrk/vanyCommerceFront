import React, { useState } from "react";
import axios from "axios";
import { api } from "@/services/api";
import OrderItem, { OrderItemProps } from "./OrderItem";
import ReactPaginate from "react-paginate";

const OrderList = () => {
  const orders: OrderItemProps[] = [
    {
      orderId: 1111,
      name: "Rubens Albuquerque",
      address: "Rua do colégio, 495",
      city: "Bayeux",
      phone: "83986731696",
      total: "294.57",
      products: [
        {
          id: "312312",
          title: "RAYBAN VERÃO",
        },
        {
          id: "33123",
          title: "ARMAÇÃO SPORT",
        },
        {
            id: "11567",
            title: "AVIADOR CLASSICO",
        },
      ],
    },
    {
      orderId: 2222,
      name: "Vanessa Albuquerque",
      address: "Rua do colégio, 495",
      city: "Bayeux",
      phone: "83986731696",
      total: "294.57",
      products: [
        {
          id: "33123",
          title: "ARMAÇÃO SPORT CLASSICO",
        },
        {
            id: "11567",
            title: "AVIADOR CLASSICO",
        },
        {
          id: "312312",
          title: "RAYBAN VERÃO",
        },
      ],
    },
    {
      orderId: 3333,
      name: "Vanessa Albuquerque",
      address: "Rua do colégio, 495",
      city: "Bayeux",
      phone: "83986731696",
      total: "294.57",
      products: [
        {
          id: "312312",
          title: "RAYBAN VERÃO",
        },
      ],
    },
    {
      orderId: 4444,
      name: "Vanessa Albuquerque",
      address: "Rua do colégio, 495",
      city: "Bayeux",
      phone: "83986731696",
      total: "294.57",
      products: [
        {
          id: "312312",
          title: "RAYBAN VERÃO",
        },
      ],
    },
    {
      orderId: 5555,
      name: "Vanessa Albuquerque",
      address: "Rua do colégio, 495",
      city: "Bayeux",
      phone: "83986731696",
      total: "294.57",
      products: [
        {
          id: "312312",
          title: "RAYBAN VERÃO",
        },
      ],
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const itemsPerPage = 1;
  const offset = currentPage * itemsPerPage;

  let currentItems = orders?.slice(offset, offset + itemsPerPage);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      {currentItems.map((item) => {
        return (
          <OrderItem
            key={item.orderId}
            orderId={item.orderId}
            name={item.name}
            address={item.address}
            city={item.city}
            phone={item.phone}
            products={item.products}
            total={item.total}
          />
        );
      })}

      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Proxima"}
        breakLabel={"..."}
        pageCount={Math.ceil(orders?.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        className="flex flex-row text-black gap-x-4 self-center"
      />
    </div>
  );
};

export default OrderList;
