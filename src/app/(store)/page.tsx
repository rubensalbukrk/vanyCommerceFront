"use client";
import "../globals.css";
import Image from "next/image";
import "swiper/swiper-bundle.css";
import Logo from "@/assets/logo.png";
import "swiper/css/effect-coverflow";
import Payments from "@/assets/payments.png";
import Card from "../../components/Cards/Cards";
import Slider from "@/components/Slider/Slider";
import Collections from "../../assets/family.jpg";
import Header from "../../components/Header/Header";
import CardImage from "../../assets/Cards/card1.png";
import ArrowIcon from "../../assets/arrow-right.png";
import CardImage2 from "../../assets/Cards/card2.png";
import FooterBackground from "@/assets/footerimage.png";
import Mulher from "../../assets/mulher-container3.png";
import Separator from "@/components/Separator/Separator";
import Oculos2 from "../../assets/oculos2-container3.png";
import Button from "../../components/Header/Button/Button";
import Background from "../../assets/header-background.png";
import Container from "../../components/Container/Container";
import { useCart } from "@/contexts/CartContext/cartContext";

function App() {
  const { products } = useCart();

  return (
    <div className="w-full items-center bg-slate-200">
      <Header />

      <Container>
        <Image className="object-cover" alt="background" src={Background} />
      </Container>

      <Separator />

      <Container className="w-screen flex-col justify-center items-center py-4 px-12 gap-x-8 
                          md:flex-col lg:flex-row sm:flex-col gap-y-10">
        <Card className="flex flex-1 w-80 bg-sky-600 flex-col md:w-80">

          <div className="flex flex-col h-full w-full px-3 justify-between items-center cursor-pointer sm:flex-row">

            <div className="flex flex-col mt-8 justify-center items-center">
              <h1 className="text-6xl">50%</h1>
              <h1 className="text-black/50 font-bold text-4xl">
                DESCONTO
              </h1>
              <h1 className="text-white text-2xl mt-2">
                Selecionamos para você!
              </h1>
            </div>

            <div className="h-full">
              <Image className="h-full object-fill" alt="Card item" src={CardImage} />
            </div>
          </div>

        </Card>

        <Card className="flex flex-1 bg-sky-200 flex-row">
          <div className="flex w-full h-full px-4 flex-row justify-evenly cursor-pointer">
            <Image
              className="relative object-fill"
              alt="card item"
              src={CardImage2}
            />

            <div className="flex h-full flex-col justify-center items-center gap-y-2 py-4">
              <div className="flex flex-col">
                <h1 className="text-slate-600 text-4xl z-10">Óculos com</h1>
                <h1 className="text-slate-600 font-bold text-3xl z-10">
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

      <Separator />

      <Container className="w-screen">
        <div className="flex flex-col gap-x-20 gap-y-4 py-8 sm:flex-row">
          <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className="text-zinc-700 font-semibold text-4xl sm:text-6xl">NOVAS COLEÇÕES</h1>
            <h1 className="text-zinc-700 text-3xl sm:text-5xl">
              Todos os estilos para você
            </h1>
            <h1 className="text-zinc-700 text-4xl">
              e sua família!
            </h1>
          </div>
          <Image
            src={Collections}
            alt="coleções"
            className="shadow-black/40 shadow-lg rounded-lg "
          />
        </div>
      </Container>

      <Separator />

      <Container className="flex-1 w-full flex flex-col gap-y-4 justify-center items-center">
        <h1 className="text-4xl font-bold text-black/80 sm:text-6xl">Proteção UV-400</h1>
        <h2 className="px-2 text-center text-2xl font-mono text-zinc-700 sm:text-5xl">
          Bloqueiam 100% dos raios UVA e UVB.
        </h2>
      </Container>

      <Separator />

      <Container className="flex flex-col justify-center items-center gap-y-8">
        <div className="flex w-screen justify-center items-center">
          <Image
            src={Oculos2}
            alt="image"
            className="shadow-black/20 rounded-lg self-center shadow-lg"
          />
        </div>
        <div className="flex flex-1 h-96 px-8 justify-center items-center ">
          <h1 className="text-xl font-semibold text-black/70 text-center font-extralight sm:text-3xl">
            Com óculos, você não só aprimora sua visão, mas também refina sua
            presença com uma elegância sutil e inconfundível.
          </h1>
        </div>
        <div className="flex-3  pt-8">
          <Image
            src={Mulher}
            alt="image"
            className="bg-slate-200 shadow-black/20 shadow-lg rounded-2xl rounded-tl-2xl"
          />
        </div>
      </Container>

      <Separator />

      <Container className="w-flex flex-1 flex-col">
        <h1 className="text-4xl font-bold text-black/80 sm:text-6xl ml-4 mb-4">
          Lançamentos
        </h1>
        <div className="w-full flex flex-1 flex-row flex-wrap px-20 gap-x-80 whitespace-break-spaces justify-start items-center">
          <Slider />
        </div>
      </Container>

      <Separator />

      <Container>
        <div className="flex flex-1 flex-col justify-center items-center">
          <h1 className="responsive-text min-w-80 px-3 text-black text-4xl tracking-custom">
            FACILIDADE NO PAGAMENTO
          </h1>
          <Image src={Payments} alt="meios  de  pagamentos" />
        </div>
      </Container>

      <Container>
        <footer className="flex flex-1 h-96 flex-wrap">
          <Image
            src={FooterBackground}
            alt="footer background"
            className="flex flex-1"
          />
          <div className="flex flex-wrap flex-col flex-1 h-80 pt-6 absolute z-10 right-0 justify-end gap-x-12">
            <div className="flex flex-1 flex-wrap gap-x-6 px-10 justify-between">
              <div className="flex flex-col">
                <h1 className="text-xl text-slate-900 font-semibold drop-shadow-lg">
                  Empresa
                </h1>
                <h2 className="text-xl text-sky-600 cursor-pointer hover:underline">
                  Sobre nós
                </h2>
                <h2 className="text-xl text-sky-600 cursor-pointer hover:underline">
                  Segurança
                </h2>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold text-slate-900 drop-shadow-lg">
                  Recursos
                </h1>
                <h2 className="text-xl text-sky-600 cursor-pointer hover:underline">
                  @VanyOculos
                </h2>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold text-slate-900 drop-shadow-md">
                  Contato
                </h1>
                <h2 className="text-xl text-sky-600 cursor-pointer">
                  (83) - 98484-1211
                </h2>
                <h2 className="text-xl underline text-sky-600 cursor-pointer">
                  exemplo@email.com.br
                </h2>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center items-center gap-y-4">
              <h1 className="text-2xl text-black/80">
                Todos os direitos reservados ©2024
              </h1>
              <h1 className="text-2xl text-black/80">
                VANNY ÓCULOS E-Commerce
              </h1>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default App;
