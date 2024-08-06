"use client";
import Logo from "../../assets/logo.svg";
import Button from "./Button/Button";
import Carrinho from "../Carrinho/Carrinho";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full h-20 px-2 top-0 z-40 fixed justify-between items-center bg-slate-100/70 backdrop-blur-md shadow-black/20 shadow-md">
      <Logo className="ml-2" />

      <Link href="/">
      <Button title="Inicio" />
      </Link>

      <Link href="/product">
        <Button title="Produtos" />
      </Link>

      <Button title="Promoções" />

      <Button title="Nós" />

      <Link href="/cart">
        <Carrinho />
      </Link>
    </header>
  );
};

export default Header;
