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

      <Container className="w-screen flex flex-row py-4 px-12 gap-x-8 container1">
        <Card className="bg-sky-600 flex-row flex-2 ">
          <div className="flex flex-2 flex-row px-6 justify-between cursor-pointer">
            <div className="flex flex-col w-48 mt-8 justify-start items-start">
              <h1 className="text-6xl z-10">50%</h1>
              <h1 className="text-black/50 font-bold text-4xl z-10">
                DESCONTO
              </h1>
              <h1 className="text-white text-4xl mt-2 z-10">
                Selecionamos para você!
              </h1>
            </div>
            <div className="w-48 mt-12">
              <Image className="ml-6 mt-1" alt="Card item" src={CardImage} />
            </div>
            <a onClick={() => null}>
              <Image
                src={ArrowIcon}
                alt="ARROW ICON"
                className="mt-6 transform transition-transform duration-300 ease-in-out hover:scale-150"
              />
            </a>
          </div>
        </Card>

        <Card className="bg-sky-200 flex-row flex-2">
          <div className="flex flex-row cursor-pointer">
            <Image
              className="relative  object-cover ml-6  justify-end items-end"
              alt="card item"
              src={CardImage2}
            />

            <div className="flex flex-2 flex-col gap-y-6 ">
              <div className="flex flex-col w-80 mt-8  mr-8 justify-start items-start">
                <h1 className="text-slate-600 text-2xl z-10">Óculos com</h1>
                <h1 className="text-slate-600 font-bold text-xl z-10">
                  lentes inclusas
                </h1>
              </div>
              <div className="flex flex-col w-80  mr-8 justify-start items-start">
                <Button title="NOVIDADES" className="bg-blue-500 text-white" />
              </div>
            </div>
          </div>
        </Card>
      </Container>

      <Separator />

      <Container className="flex-1 w-full">
        <div className="flex flex-row gap-x-20 py-8 container1">
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <h1 className="text-zinc-700 text-6xl h1-mob">NOVAS COLEÇÕES</h1>
            <h1 className="text-zinc-700 text-5xl h1-mob">
              Confira o que selecionamos
            </h1>
            <h1 className="text-zinc-700 text-4xl h1-mob">
              para você e sua família!
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
        <h1 className="text-6xl text-black/80">Proteção UV 400</h1>
        <h2 className="px-2 text-center text-6xl font-mono text-zinc-700 h1-mob">
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
          <h1 className="responsive-text-small text-black/70 text-center font-extralight text-3xl">
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
        <h1 className="font-light mb-6 ml-4 text-black/80 text-6xl">
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
