import axios from 'axios';
import { api } from '@/services/api';

export const updateProduct = async (id: string, count: number, estoque: boolean) => {
  try {
    const response = await axios.put(`${api}/products`, {
        id,
        count,
        estoque
    });

    return alert(JSON.stringify(response.data.message));
    
  } catch (error) {
    console.error("Erro ao remover produto:", error);
    throw new Error("Erro ao remover produto");
  }
};
export default updateProduct;