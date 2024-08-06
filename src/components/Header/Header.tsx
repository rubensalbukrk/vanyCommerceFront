import Image from 'next/image'
import Cart from "../../assets/cart.svg";
import Logo from "../../assets/logo.svg";
import Button from "./Button/Button";


const Header = () => {
  return (
    <div className="flex w-full h-20 px-2 top-0 z-40 fixed justify-between items-center bg-slate-100/70 backdrop-blur-md shadow-black/20 shadow-md">
      <Image
        src={Logo}
        alt="vannyOculos logo"
        className="w-16 h-12 bg-transparent"
      />
        <Button title="Inicio" onClick={() => alert('PAGINA INICIAL')} />
        <Button title="Produtos" onClick={() => alert('PAGINA DE PRODUTOS')} />
        <Button title="Promoções" onClick={() => alert('PAGINA DE PROMOÇÕES')} />

        <button className="w-36 h-12 text-gray-400 bg-transparent 
        hover:text-white text-lg hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400 
        active:bg-sky-500 
        transition-all border-0 rounded-2xl">
          Promoções
        </button>

        <button className="w-32 h-12  text-gray-400 bg-transparent 
        hover:text-white text-lg hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400 
        active:bg-sky-500
        transition-all border-0 rounded-2xl">
          Nós
        </button>
      
      <button className="w-20 h-16 bg-transparent justify-center items-center rounded-2xl">
        <Image src={Cart} alt="cart icon" />
      </button>
    
    </div>
  );
};

export default Header;