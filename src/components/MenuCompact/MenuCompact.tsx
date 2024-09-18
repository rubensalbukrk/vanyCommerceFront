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
          <FaTimes size={34} color={colors.green[400]} />
        ) : (
          <FaBars size={34} color={colors.green[400]} />
        )}
      </button>

      <nav
        className={`absolute top-2 right-12 bg-gray-800 w-48 p-4 transition-transform duration-300 ${
          isOpen ? "transform scale-100" : "transform scale-0"
        } origin-top-right md:hidden`}
      >
        <ul className="space-y-4">
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
