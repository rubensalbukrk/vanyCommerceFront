import { useCarrinho } from '@/contexts/CarrinhoContext/carrinhoContext';
import IconCart from '../../assets/cart.svg'
import Button from '../Header/Button/Button';

const Carrinho = () => {
  const {produtos} = useCarrinho();

    return (
        <Button 
        className='flex w-12 mr-3 justify-center items-center bg-blue-500
        hover:shadow-green-400 hover:bg-blue-400 transition duration-1000 ease-in-out
        active:bg-green-200 active:shadow-md
        '
        title="" onClick={() => alert('MEU CARRINHO')}>
          <div className="w-5 h-5 absolute top-1 right-3 bg-red-600 rounded-xl justify-center items-center">
            <p className='text-white text-sm'>{produtos.length}</p>
          </div>
          <IconCart />
        </Button>
    )
}
export default Carrinho;