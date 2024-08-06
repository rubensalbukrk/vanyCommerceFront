'use client'
import Logo from "../../assets/logo.svg";
import Button from "./Button/Button";
import Carrinho from '../Carrinho/Carrinho';
import Link from "next/link";

const Header = () => {

  return (
    <header className="flex w-full h-20 px-2 top-0 z-40 fixed justify-between items-center bg-slate-100/70 backdrop-blur-md shadow-black/20 shadow-md">
      <Logo className="ml-2" />
        <Button title="Inicio" onClick={() => alert('PAGINA HOME')} />
        <Link href='/product'>
        <Button title="Produtos" onClick={() => null}/>
        </Link>
        <Button title="Promoções" onClick={() => alert('PAGINA DE PROMOÇÕES')} />
        <Button title="Nós" onClick={() => alert('PAGINA DE NÓS')} />
      
        <Carrinho />
    </header>
  );
};

export default Header;