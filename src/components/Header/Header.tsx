"use client";
import React from "react";
import Logo from "../../assets/logo.svg";
import Button from "./Button/Button";
import Carrinho from "@/components/Carrinho/Carrinho";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex w-full h-20 px-2 top-0 z-40 fixed justify-between items-center bg-slate-100/80 backdrop-blur-lg shadow-black/20 shadow-md">
      <Logo className="ml-4" />

      <Link href="/">
      <Button title="Inicio" />
      </Link>

      <Link href="/product">
        <Button title="Catálogo" />
      </Link>

      <Button title="Promoções" />

      <Button title="Nós" />

      <Link href="/cart">
        <Carrinho />
      </Link>
    </nav>
  );
};

export default Header;
