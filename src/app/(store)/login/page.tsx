"use client";
import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { authentication } from '@/services/authentication';
import { useRouter } from 'next/navigation';




export default  function App(){
    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({
        token: "",
        user: {}
    });
    const [formData, setFormData] = useState({
        email: email,
        password: password
    })
    
    const router = useRouter();

    useEffect(() => {
        if (auth) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${user?.token}`;
            router.push('/manager');
          }
    },[auth, router, user]);

    async function handleLogin () {
        const user = await authentication(formData);
        setUser(user);
        setAuth(true);
        if (!user.token){
            setAuth(false);
            setLoading(false);
            alert('Dados Inválidos!')
        }
    }

    return (
        <div className="body-login flex-col w-full h-full bg-slate-200 justify-center items-center">
    { loading ? (
      <div className='flex flex-1 justify-center items-center'>

        <h1 className='text-2xl font-bold'>CARREGANDO ....</h1>
      </div>
    ) : (
    <form className='form-login' action="">

    <div className="titulo-login text-3xl">
    <h1 className='h1-login'>Faça o seu login</h1>
    <div className="barra-horizontal"></div>
    </div>

    <div className=" bg-slate-100 input-login">
    <label id='email'>E-mail*</label>
    <input onChange={(text) => setFormData({...formData, email: text.target.value})} type="email" id="email" className='rounded-lg px-2' />
    </div>

    <div className=" bg-slate-100 input-login">
    <label id="pass">Senha*</label>
    <input onChange={(text) => setFormData({...formData, password: text.target.value})} type="password" id="pass" className='rounded-lg px-2' />
    </div>

    <div className="remember">
    <input type="checkbox" id='checkbox' onChange={() => alert('salvo automaticamente!')} />
    <p>Lembrar-me</p>
    </div>

     <button 
     className='button-login' 
     type="button"
     onClick={() => {handleLogin(), setLoading(true)}}
     >Entrar</button>
     
     <p className="esqueceu-senha">
        Esqueceu sua senha?
     <a href="">Clique aqui</a>
     </p>
    </form> )}
</div>
    )
}