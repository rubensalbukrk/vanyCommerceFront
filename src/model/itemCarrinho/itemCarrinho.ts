import Produto from "../produtos/produtos";

export default interface ItemCarrinho extends Produto {
    items: Produto
    total?: number
}