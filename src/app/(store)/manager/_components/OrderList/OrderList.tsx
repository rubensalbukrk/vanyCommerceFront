"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { api } from "@/services/api";
import ReactPaginate from "react-paginate";
import { OrderItemProps } from "@/model/OrderItem/OrderItem";

const OrderList = (props: {order?: Array<OrderItemProps>}) => {
    const [order, setOrder] = useState([]);
  //   const orders: OrderItemProps[] = [
  //     {
  //       orderId: 1111,
  //       name: "Rubens Albuquerque",
  //       address: "Rua do colégio, 495",
  //       city: "Bayeux",
  //       phone: "83986731696",
  //       total: "294.57",
  //       products: [
  //         {
  //           id: "312312",
  //           title: "RAYBAN VERÃO",
  //         },
  //         {
  //           id: "33123",
  //           title: "ARMAÇÃO SPORT",
  //         },
  //         {
  //             id: "11567",
  //             title: "AVIADOR CLASSICO",
  //         },
  //       ],
  //     },
  //     {
  //       orderId: 2222,
  //       name: "Vanessa Albuquerque",
  //       address: "Rua do colégio, 495",
  //       city: "Bayeux",
  //       phone: "83986731696",
  //       total: "294.57",
  //       products: [
  //         {
  //           id: "33123",
  //           title: "ARMAÇÃO SPORT CLASSICO",
  //         },
  //         {
  //             id: "11567",
  //             title: "AVIADOR CLASSICO",
  //         },
  //         {
  //           id: "312312",
  //           title: "RAYBAN VERÃO",
  //         },
  //       ],
  //     },
  //     {
  //       orderId: 3333,
  //       name: "Vanessa Albuquerque",
  //       address: "Rua do colégio, 495",
  //       city: "Bayeux",
  //       phone: "83986731696",
  //       total: "294.57",
  //       products: [
  //         {
  //           id: "312312",
  //           title: "RAYBAN VERÃO",
  //         },
  //       ],
  //     },
  //     {
  //       orderId: 4444,
  //       name: "Vanessa Albuquerque",
  //       address: "Rua do colégio, 495",
  //       city: "Bayeux",
  //       phone: "83986731696",
  //       total: "294.57",
  //       products: [
  //         {
  //           id: "312312",
  //           title: "RAYBAN VERÃO",
  //         },
  //       ],
  //     },
  //     {
  //       orderId: 5555,
  //       name: "Vanessa Albuquerque",
  //       address: "Rua do colégio, 495",
  //       city: "Bayeux",
  //       phone: "83986731696",
  //       total: "294.57",
  //       products: [
  //         {
  //           id: "312312",
  //           title: "RAYBAN VERÃO",
  //         },
  //       ],
  //     },
  //   ];
  const [currentPage, setCurrentPage] = useState(0);

useEffect(() => {
    async function _getOrders() {
        const orders = await axios
          .get(`${api}/orders`)
          .then((response) => setOrder(response?.data?.Orders));
      }
      _getOrders();
},[])

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const itemsPerPage = 1;
  const offset = currentPage * itemsPerPage;

  let currentItems = order?.slice(offset, offset + itemsPerPage);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      {currentItems.length > 0 ? currentItems.map((item: OrderItemProps) => {
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
      })
      :
      <h1 className="my-8 font-semibold">Não ah pedidos no momento</h1>
      }

      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Proxima"}
        breakLabel={"..."}
        pageCount={Math.ceil(order?.length / itemsPerPage)}
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
