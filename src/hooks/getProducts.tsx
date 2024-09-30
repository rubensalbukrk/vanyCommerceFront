"use client";
import axios from "axios";
import { api } from "@/services/api";
import React, { useMemo, useState } from "react";
import Produto from "@/model/produtos/produtos";

function GetProducts() {
  const [products, setProducts] = useState<Produto[]>([]);
  
  // const response = await axios
  //   .get(`${api}/products`)
  //   .then((response) => setProdutos(response?.data?.Products));
  
  const glasses = [
    {
      id: 1,
      avaiable: true,
      title: "oculos 1",
      descrition: "este oculos tem estilo verão este oculos tem estilo verão este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos1.jpg"),
    },
    {
      id: 2,
      avaiable: true,
      title: "oculos 2",
      descrition: "este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos2.jpg"),
    },
    {
      id: 3,
      avaiable: false,
      title: "oculos 3",
      descrition: "este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos3.jpg"),
    },
    {
      id: 4,
      avaiable: false,
      title: "oculos 4",
      descrition: "este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos4.jpg"),
    },
    {
      id: 5,
      avaiable: true,
      title: "oculos 5",
      descrition: "este oculos tem estilo verão este oculos tem estilo verão este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos1.jpg"),
    },
    {
      id: 6,
      avaiable: true,
      title: "oculos 6",
      descrition: "este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos2.jpg"),
    },
    {
      id: 7,
      avaiable: false,
      title: "oculos 7",
      descrition: "este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos3.jpg"),
    },
    {
      id: 8,
      avaiable: false,
      title: "oculos 8",
      descrition: "este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos4.jpg"),
    },
  ]
  return glasses;
}

export default GetProducts;
