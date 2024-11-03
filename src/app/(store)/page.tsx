sese"use client";
import "../globals.css";
import Image from "next/image";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import Payments from "@/assets/payments.png";
import Card from "../../components/Cards/Cards";
import Slider from "@/components/Slider/Slider";
import Header from "../../components/Header/Header";
import CardImage from "../../assets/Cards/card1.png";
import CardImage2 from "../../assets/Cards/card2.png";
import BannerWoman from "../../assets/Banner-home.png";
import Separator from "@/components/Separator/Separator";
import Button from "../../components/Header/Button/Button";
import HeaderBackground from "../../assets/header-background.png";
import Container from "../../components/Container/Container";
import { useCart } from "@/contexts/CartContext/cartContext";
import axios from "axios";
import { api } from "@/services/api";
import { useEffect } from "react";

function App() {
  const { products, setProducts } = useCart();

  useEffect(() => {
    async function _getProducts() {
      const response = await axios
        .get(`${api}/products`)
        .then((response) => setProducts(response?.data?.Products));
    }
    _getProducts();
  }, [setProducts]);

  return (
    <div className="w-screen justify-center items-center bg-slate-200">
      <Header />

      <Container>
        <Image
          width={16}
          height={9}
          className="flex object-cover w-full h-40 sm:h-full sm:w-9/16 rounded-bl-xl rounded-br-xl"
          alt="background"
          src={HeaderBackground}
        />
        <h1
          className="absolute top-20 text-white font-mono text-lg sm:top-44 sm:text-5xl
                    animate-scalePulse"
        >
          O futuro está à sua vista!
        </h1>
      </Container>

      <Container className="w-flex flex-1 flex-col mt-2">
        <p className="text-4xl font-bold text-black/80 sm:text-6xl ml-4 mb-4">
          Ofertas
        </p>
        <div className="w-full flex-row flex-wrap px-4 justify-center items-center">
          <Slider />
        </div>
        <Separator />
      </Container>

      <Container
        className="w-screen flex flex-col my-4 justify-center px-8 gap-x-8
                          sm:flex-col md:flex-row lg:flex-row "
      >
        <Card className="flex flex-1 w-full bg-sky-300/20 flex-col mb-8 md:flex-1">
          <div className="flex flex-row h-full w-full px-3 justify-between items-center cursor-pointer sm:flex-row">
            <div className="flex flex-col mt-8 justify-center items-center">
              <h1 className="text-6xl">50%</h1>
              <h1 className="text-black/50 font-bold text-4xl">DESCONTO</h1>
              <h1 className="text-black/70 text-2xl my-2">
                Selecionamos para você!
              </h1>
            </div>

            <div className="h-full self-end">
              <Image
                width={220}
                height={80}
                className="h-full self-end object-cover"
                alt="Card item"
                src={CardImage}
              />
            </div>
          </div>
        </Card>

        <Card className="flex flex-1 w-full bg-sky-200 flex-row">
          <div className="flex w-full h-full px-4 flex-row justify-evenly cursor-pointer">
            <Image
              width={220}
              height={80}
              className="self-end object-cover"
              alt="card item"
              src={CardImage2}
            />

            <div className="flex h-full flex-col justify-center items-center gap-y-2 py-4">
              <div className="flex flex-col">
                <h1 className="text-slate-600 text-2xl sm:text-4xl">
                  Óculos com
                </h1>
                <h1 className="text-slate-600 font-bold text-2xl sm:text-4xl">
                  lentes inclusas
                </h1>
              </div>
              <div className="flex flex-col justify-start items-start">
                <Button title="NOVIDADES" className="bg-blue-500 text-white" />
              </div>
            </div>
          </div>
        </Card>
      </Container>

      <Container className="w-screen flex-col px-4">
        <Separator />
        <div className="flex flex-col gap-x-20 sm:flex-row items-center justify-center">
          <h1 className="text-zinc-700 font-semibold text-4xl sm:text-6xl">
            NOVAS COLEÇÕES
          </h1>
          <h1 className="text-zinc-700 text-3xl mb-2 sm:text-5xl self-center text-center">
            Todos os estilos para você e sua família!
          </h1>
        </div>
      </Container>

      <Container className="flex-1 w-full flex flex-col justify-center items-center">
        <Separator />
        <h1 className="text-4xl font-bold text-black/80 sm:text-6xl">
          Proteção UV-400
        </h1>
        <h2 className="px-2 mt-2 text-center text-2xl font-mono text-zinc-700 sm:text-5xl">
          Bloqueiam 100% dos raios UVA e UVB.
        </h2>
        <Separator />
      </Container>

      <Container className="flex flex-col justify-center items-center px-8 sm:px-16">
        <Image
          width={400}
          height={200}
          src={BannerWoman}
          alt="image"
          className="bg-slate-200 my-4 shadow-black/5 shadow-md rounded-2xl rounded-tl-2xl sm:w-full sm:object-cover"
        />
        <h1 className="text-xl text-black/70 text-center font-extralight sm:text-3xl">
          Com óculos, você não só aprimora sua visão, mas também refina sua
          presença com uma elegância sutil e inconfundível.
        </h1>
        <Separator />
      </Container>

      <Container>
        <div className="flex flex-1 flex-col justify-center items-center">
          <h1 className="text-black text-center font-extrabold text-2xl md:text-6xl ">
            FACILIDADE NO PAGAMENTO
          </h1>
          <Image src={Payments} alt="meios  de  pagamentos" />
        </div>
      </Container>

      <footer
        className="flex w-screen flex-col justify-center items-center gap-y-8
                      bg-gradient-to-b from-slate-200 to-sky-300"
      >
        <div className="w-full flex flex-wrap px-8 gap-y-10 justify-between lg:px-20 ">
          <div className="flex flex-col">
            <h1 className="text-xl text-slate-900 font-semibold drop-shadow-lg">
              Empresa
            </h1>
            <h2 className="text-xl font-bold text-sky-600 cursor-pointer hover:underline">
              Sobre nós
            </h2>
            <h2 className="text-xl font-bold text-sky-600 cursor-pointer hover:underline">
              Segurança
            </h2>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-slate-900 drop-shadow-lg">
              Redes
            </h1>
            <h2 className="text-xl font-bold text-sky-600 cursor-pointer hover:underline">
              @VanyOculos
            </h2>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-slate-900 drop-shadow-md">
              Contato
            </h1>
            <h2 className="text-xl font-bold text-sky-600 cursor-pointer">
              (83) - 98484-1211
            </h2>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-slate-900 drop-shadow-md">
              Localidade
            </h1>
            <h2 className="text-xl font-bold text-sky-600 cursor-pointer">
              Jardim Aeroporto - Bayeux
            </h2>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center items-center gap-y-4">
          <h1 className="text-2xl text-black/80 font-bold">
            VANNY ÓCULOS E-Commerce
          </h1>
          <h1 className="text-2xl md:text-4xl text-center mb-10 text-black/80">
            Todos os direitos reservados ©2024
          </h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
