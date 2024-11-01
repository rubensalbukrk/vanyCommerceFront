"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button/Button";
import Logo from "@/assets/logo.svg";
import ButtonCart from "@/components/Cart/Cart";
import CompactMenu from "../MenuCompact/MenuCompact";

const Header = () => {
  return (
    <header>
      {/**MENU COMPACTO */}
      <nav className="flex fixed z-50 w-screen flex-row items-center justify-between px-4 sm:hidden
                bg-white/30 backdrop-blur-md shadow-black/10 shadow-md">
        <CompactMenu />
        <p className="text-2xl font-bold text- text-black/60">VANNY ÓCULOS</p>
        <Link href="/cart">
          <ButtonCart />
        </Link> 
      </nav>

      <nav
        className="w-full h-20 px-2 top-0 z-30 fixed justify-between items-center 
                bg-slate-100/80 backdrop-blur-lg shadow-black/20 shadow-md hidden sm:flex"
      >
        <Logo className="ml-4" />

        <Link href="/">
          <Button title="Inicio" />
        </Link>

        <Link href="/product">
          <Button title="Catálogo" />
        </Link>

        <Link href="/login">
          <Button title="Acesso" />
        </Link>

        <Link href="/cart">
          <ButtonCart />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
