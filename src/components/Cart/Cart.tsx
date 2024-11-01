import { useCart } from "@/contexts/CartContext/cartContext";
import { HiOutlineShoppingCart } from "react-icons/hi";


const ButtonCart = () => {
  const { items, itemsCount } = useCart();

  return (
    <button
      className="flex w-10 h-10 mr-3 rounded-xl justify-center items-center bg-blue-500
        hover:bg-blue-400 hover:shadow-sky-300 hover:shadow-lg transition duration-1000 ease-in-out
        active:bg-sky-600 active:shadow-md
        sm:w-14 sm:h-14"
      title=""
    >
      <div className="flex w-4 h-4 absolute bottom-1 mr-9 bg-red-600 shadow-sm shadow-red-600 rounded-xl justify-center items-center
                    sm:w-5 sm:h-5 sm:top-1 sm:right-3 sm:mr-0">
        <p className="text-white text-sm">{itemsCount}</p>
      </div>
      <HiOutlineShoppingCart color="white" className="size-7 sm:size-10" />
    </button>
  );
};
export default ButtonCart;
