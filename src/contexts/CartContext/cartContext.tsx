import React, {
  createContext,
  useContext,
  useState,
} from "react";
import Produto from "@/model/produtos/produtos";
import ItemCarrinho from "@/model/itemCarrinho/itemCarrinho";

interface ContextCartProps {
  user: {
    token: string;
    user: {
      name: string;
      avatar: string;
      email: string;
    };
  };
  setUser: (user: any) => void;
  setProducts: (products: any) => void;
  items: ItemCart[];
  itemsCount: number;
  products: Array<Produto>;
  addItem: (item: ItemCarrinho) => void;
  removerItem: (produto: Produto) => void;
  descount: number;
}
interface ItemCart {
  produto: Produto;
  quantidade: number;
}

const ContextCart = createContext<ContextCartProps>({} as any);

export function CartProvider(props: any) {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({
    token: "",
    user: {
      name: "",
      avatar: "",
      email: "",
    },
  });
  const [items, setItems] = useState<ItemCart[]>([]);
  const [descount, setDescount] = useState(0);

  const addItem = (item: ItemCarrinho) => {
    const indice = items.findIndex((i) => i.produto.id === item.produto.id);

    if (indice === -1) {
      setItems([
        ...items,
        { produto: item.produto, quantidade: item.quantidade },
      ]);
    } else {
      const novoItens = [...items];
      novoItens[indice].quantidade++;
      setItems(novoItens);
    }
    calcularDesconto(item.produto.price, item.produto.descount);
  };
  const removerItem = (produto: Produto) => {
    const novosItems = items
      .map((i) => {
        if (i.produto.id === produto.id) {
          i.quantidade--;
        }
        return i;
      })
      .filter((i) => i.quantidade > 0);
    setItems(novosItems);
    retirarDesconto(produto.price, produto.descount);
  };

  function calcularDesconto(valor: number, descountItem: number) {
    const desconto = valor * descountItem;
    const valorComDesconto = valor - desconto;
    setDescount(valorComDesconto + descount);
  }
  function retirarDesconto(valor: number, descountItem: number) {
    const desconto = valor * descountItem;
    const valorComDesconto = valor - desconto;
    setDescount(descount - valorComDesconto);
  }

  return (
    <ContextCart.Provider
      value={{
        products,
        get itemsCount() {
          return items.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual.quantidade;
          }, 0);
        },
        items,
        user,
        setProducts,
        setUser,
        addItem,
        removerItem,
        descount,
      }}
    >
      {props.children}
    </ContextCart.Provider>
  );
}

export const useCart = () => useContext(ContextCart);

export default ContextCart;
