import Produto from "../Produtos/produtos";

export default interface ItemCarrinho {
  produto: Produto
  quantidade: number
}