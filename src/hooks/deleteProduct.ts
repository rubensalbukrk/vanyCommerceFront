import axios from 'axios';
import { api } from '@/services/api';

export const deleteProduct = async (productId: string) => {
  try {
    const response = await axios.delete(`${api}/products/${productId}`);

    return alert(JSON.stringify(response.data));
    
  } catch (error) {
    return ;
  }
};
export default deleteProduct;