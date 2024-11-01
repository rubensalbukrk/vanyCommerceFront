
import axios from "axios";
import { api } from "@/services/api";
import { useCart } from "@/contexts/CartContext/cartContext";

async function _getProducts() {
  const {setProducts} = useCart();

  const response = await axios
    .get(`${api}/products`)
    .then(response => setProducts(response?.data?.Products));
}

export default _getProducts;
