import Produto from "../produtos/produtos";

export default interface ItemCarrinho {
  produto: Produto
  quantidade: number
}