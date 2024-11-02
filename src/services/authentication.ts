import axios from 'axios';
import { api } from './api';

interface AuthProps {
    email: string
    password: string
}

export const authentication = async ({ email, password }: AuthProps) => {
    try {
        const response = await axios.post(`${api}/authentication`, 
            { email, password },
            {
                headers: {
                     'ngrok-skip-browser-warning': 'true',
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response => response.data)
        if(response.token){
            return response;
        }else{
            return false;
        }
        return true
    } catch (error) {
        return false;
    }
}