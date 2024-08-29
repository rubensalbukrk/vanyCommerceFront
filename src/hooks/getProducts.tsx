"use client";
import axios from "axios";
import React, { useState } from "react";
import { api } from "@/services/api";
import Produto from "@/model/produtos/produtos";

function GetProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  
  // const response = await axios
  //   .get(`${api}/products`)
  //   .then((response) => setProdutos(response?.data?.Products));
  const oculos = [
    {
      id: 1,
      estoque: true,
      title: "oculos 1",
      descrition: "este oculos tem estilo verão este oculos tem estilo verão este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos1.jpg"),
    },
    {
      id: 2,
      estoque: true,
      title: "oculos 2",
      descrition: "este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos2.jpg"),
    },
    {
      id: 3,
      estoque: false,
      title: "oculos 3",
      descrition: "este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos3.jpg"),
    },
    {
      id: 4,
      estoque: false,
      title: "oculos 4",
      descrition: "este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos4.jpg"),
    },
    {
      id: 5,
      estoque: true,
      title: "oculos 5",
      descrition: "este oculos tem estilo verão este oculos tem estilo verão este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos1.jpg"),
    },
    {
      id: 6,
      estoque: true,
      title: "oculos 6",
      descrition: "este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos2.jpg"),
    },
    {
      id: 7,
      estoque: false,
      title: "oculos 7",
      descrition: "este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos3.jpg"),
    },
    {
      id: 8,
      estoque: false,
      title: "oculos 8",
      descrition: "este oculos tem estilo verão",
      descount: 20,
      price: 80.99,
      img: require("../../src/assets/Oculos/oculos4.jpg"),
    },
  ];
  
  return oculos;
}

export default GetProdutos;
