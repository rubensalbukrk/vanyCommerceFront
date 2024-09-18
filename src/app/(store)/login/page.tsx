"use client";
import axios from "axios";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import React, { useState, useEffect } from "react";
import { authentication } from "@/services/authentication";

export default function App() {
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    token: "",
    user: {},
  });
  const [formData, setFormData] = useState({
    email: email,
    password: password,
  });

  const router = useRouter();

  useEffect(() => {
    if (auth) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${user?.token}`;
      router.push("/manager");
    }
  }, [auth, router, user]);

  async function handleLogin() {
    const user = await authentication(formData);
    if (!user.token) {
      setAuth(false);
      setLoading(false);
      alert("Dados Inválidos!");
      return;
    }
    setUser(user);
    setAuth(true);
  }

  return (
    <div className="w-screen bg-gradient-to-r from-sky-200 to-sky-500 justify-center items-center">
      <Header />

      <div className="flex flex-1 w-screen h-screen justify-center items-center">
        {loading ? (
          <div className="flex flex-1 justify-center items-center">
            <h1 className="text-2xl font-bold">Loading ...</h1>
          </div>
        ) : (
          <form
            className="flex flex-2 flex-col w-80 gap-y-6 rounded-lg 
                      bg-white/40 drop-shadow-md shadow-black/10 shadow-xl"
            action=""
          >
            <h1 className="text-xl px-4 py-2 border-sky-400 border-b-4 rounded-lg">
              Acesso Restrito
            </h1>

            <div className="flex flex-col roundend-lg mx-4">
              <label id="email">E-mail</label>
              <input
                onChange={(text) =>
                  setFormData({ ...formData, email: text.target.value })
                }
                type="email"
                id="email"
                className="rounded-lg px-2 bg-slate-100"
              />
            </div>

            <div className="flex flex-col roundend-lg mx-4">
              <label id="pass">Senha</label>
              <input
                onChange={(text) =>
                  setFormData({ ...formData, password: text.target.value })
                }
                type="password"
                id="pass"
                className="rounded-lg px-2 bg-slate-100"
              />
            </div>

            <div className="flex gap-x-2 mx-4">
              <input type="checkbox" id="checkbox" onChange={() => null} />
              <p>Lembrar-me</p>
            </div>

            <button
              className="flex w-40 h-12 self-center justify-center items-center
             bg-sky-500 hover:bg-sky-600
             transition-color duration-500 ease-in-out
             font-bold text-lg text-slate-100 rounded-md shadow-black/20 shadow-md"
              type="button"
              onClick={() => {
                handleLogin(), setLoading(true);
              }}
            >
              Entrar
            </button>

            <div className="flex w-80 justify-center gap-x-2 mb-4">
              <p className="text-center">Esqueceu a senha?</p>
              <a href="" className="underline text-blue-500">
                Click aqui
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
