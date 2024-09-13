"use client";
import axios from "axios";
import Image from "next/image";
import Logo from "@/assets/logo.png"
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import React, { useState, useEffect } from "react";
import { authentication } from "@/services/authentication";
import CompactMenu from "@/components/MenuCompact/MenuCompact";

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
    setUser(user);
    setAuth(true);
    if (!user.token) {
      setAuth(false);
      setLoading(false);
      alert("Dados Inválidos!");
    }
  }

  return (
    <div className="body-login flex-col w-full h-full bg-slate-200 justify-center items-center">
      <nav className="flex w-screen flex-row items-center justify-between px-4">
        <Image
          className="object-contain"
          src={Logo}
          alt="logo"
          width={40}
          height={10}
        />
        <p className="text-2xl font-bold text- text-black/60">VANNY ÓCULOS</p>
        <CompactMenu />
      </nav>
      <header>
        <Header />
      </header>
      {loading ? (
        <div className="flex flex-1 justify-center items-center">
          <h1 className="text-2xl font-bold">Loading ....</h1>
        </div>
      ) : (
        <form className="form-login" action="">
          <div className="flex flex-col text-3xl">
            <h1 className="text-xl border-green-600 border-b-4 rounded-lg">
            Log in now
            </h1>
          </div>

          <div className="flex flex-col roundend-lg">
            <label id="email">E-mail*</label>
            <input
              onChange={(text) =>
                setFormData({ ...formData, email: text.target.value })
              }
              type="email"
              id="email"
              className="rounded-lg px-2 bg-slate-100"
            />
          </div>

          <div className="flex flex-col roundend-lg">
            <label id="pass">Password*</label>
            <input
              onChange={(text) =>
                setFormData({ ...formData, password: text.target.value })
              }
              type="password"
              id="pass"
              className="rounded-lg px-2 bg-slate-100"
            />
          </div>

          <div className="flex gap-x-2">
            <input type="checkbox" id="checkbox" onChange={() => null} />
            <p>Remenber</p>
          </div>

          <button
            className="button-login"
            type="button"
            onClick={() => {
              handleLogin(), setLoading(true);
            }}
          >
            Sign in
          </button>

          <div className="flex w-80 justify-center gap-x-2">
          <p className="text-center">
          Forgot your password?
          </p>
          <a href="" className="underline text-blue-500">Click here</a>
          </div>
        </form>
      )}
    </div>
  );
}
