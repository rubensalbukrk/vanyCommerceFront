import axios from 'axios';
import { api } from '@/services/api';

export const createProduct = async (formDataToSend: FormData) => {
  try {
    const response = await axios.post(`${api}/products`, formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
    
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    throw new Error("Erro ao criar produto");
  }
};
export default createProduct;