import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones de menu hambúrguer e fechar
import colors from "tailwindcss/colors";

const CompactMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-30">
      <button
        onClick={toggleMenu}
        className="text-white mt-2 mr-2 focus:outline-none"
      >
        {isOpen ? (
          <div className="flex w-9 h-9 mb-2 rounded-full justify-center items-center bg-blue-500">
            <FaTimes size={26} color="white" />
          </div>
        ) : (
          <FaBars size={30} color={colors.sky[500]} className="mb-1" />
        )}
      </button>

      <nav
        className={`w-72 h-screen absolute top-0 left-14 bg-white/95 backdrop-blur-2xl shadow-black/20 shadow-lg p-4 transition-transform duration-300 ${
          isOpen ? "transform scale-100" : "transform scale-0"
        } origin-top-left md:hidden rounded-lg`}
      >
        <div className="flex w-full h-20 bg-blue-400 rounded-lg mb-8 items-center justify-center">
          <h1 className="text-white font-extrabold text-3xl">MENU</h1>
        </div>
        <ul className="space-y-4 font-bold">
          <li>
            <Link href="/">
              <p className="text-sky-600 text-2xl hover:text-gray-300">
                Inicio
              </p>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <p className="text-sky-600 text-2xl hover:text-gray-300">
                Catálogo
              </p>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <p className="text-sky-600 text-2xl hover:text-gray-300">
                Promoções
              </p>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <p className="text-sky-600 text-2xl hover:text-gray-300">
                Carrinho
              </p>
            </Link>
          </li>
          <li>
            <p
              onClick={() => window.open("https://wa.me/5583987904804")}
              className="text-sky-600 text-2xl hover:text-gray-300"
            >
              Contato
            </p>
          </li>
          <li>
            <Link href="/login">
              <p className="text-sky-600 mt-10 text-2xl hover:text-gray-300">
                Login
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CompactMenu;
