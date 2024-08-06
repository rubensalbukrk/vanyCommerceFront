import { useCarrinho } from "@/contexts/CarrinhoContext/carrinhoContext";
import IconCart from "../../assets/cart.svg";
import Button from "../Header/Button/Button";

const Carrinho = () => {
  const { items } = useCarrinho();

  return (
    <button
      className="flex w-14 h-14 mr-3 rounded-xl justify-center items-center bg-blue-500
        hover:bg-blue-400 hover:shadow-sky-300 hover:shadow-lg transition duration-1000 ease-in-out
        active:bg-sky-600 active:shadow-md
        "
      title=""
    >
      <div className="w-5 h-5 absolute top-1 right-3 bg-red-600 rounded-xl justify-center items-center">
        <p className="text-white text-sm">{items ? items?.length : 0}</p>
      </div>
      <IconCart />
    </button>
  );
};
export default Carrinho;
