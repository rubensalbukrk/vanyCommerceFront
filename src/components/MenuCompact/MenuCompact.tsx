import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones de menu hambúrguer e fechar
import colors from 'tailwindcss/colors';

const CompactMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-30">
      {/* Botão para abrir/fechar o menu */}
      <button onClick={toggleMenu} className="text-white focus:outline-none">
        {isOpen ? <FaTimes size={34} color={colors.green[400]} /> : <FaBars size={34} color={colors.green[400]} />}
      </button>

      {/* Menu expansível */}
      <nav className={`absolute top-2 right-12 bg-gray-800 w-48 p-4 transition-transform duration-300 ${isOpen ? 'transform scale-100' : 'transform scale-0'} origin-top-right md:hidden`}>
        <ul className="space-y-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Inicio</a>
          </li>
          <li>
            <a href="/product" className="text-white hover:text-gray-300">Produtos</a>
          </li>
          <li>
            <a href="/cart" className="text-white hover:text-gray-300">Carrinho</a>
          </li>
          <li>
            <a href="/login" className="text-white hover:text-gray-300">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CompactMenu;