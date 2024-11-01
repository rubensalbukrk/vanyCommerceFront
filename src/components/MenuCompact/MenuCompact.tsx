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
          <div className="flex w-8 h-8 rounded-full justify-center items-center bg-blue-400">
            <FaTimes size={28} color="white" />
          </div>
        ) : (
          <FaBars size={34} color={colors.sky[400]} />
        )}
      </button>

      <nav
        className={`w-48 absolute top-2 left-12 bg-sky-600 p-4 transition-transform duration-300 ${
          isOpen ? "transform scale-100" : "transform scale-0"
        } origin-top-left md:hidden rounded-lg`}
      >
        <ul className="space-y-4 font-bold">
          <li>
            <Link href="/">
              <p className="text-white hover:text-gray-300">Inicio</p>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <p className="text-white hover:text-gray-300">Produtos</p>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <p className="text-white hover:text-gray-300">Carrinho</p>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <p className="text-white hover:text-gray-300">Login</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CompactMenu;
