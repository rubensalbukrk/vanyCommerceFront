"use client";
import "./globals.css";
import Image from "next/image";
import Header from "../components/Header/Header";
import Background from "../assets/header-background.png";
import Container from "../components/Container/Container";
import Card from "../components/Cards/Cards";
import Collections from "../assets/family.jpg";
import CardImage from "../assets/Cards/card1.png";
import CardImage2 from "../assets/Cards/card2.png";
import Button from "@/components/Header/Button/Button";
import Star from '../assets/star.svg'
import ArrowIcon from '../assets/arrow-right.png'
import Separator from "@/components/Separator/Separator";

function App() {
  return (
    <div className="w-screen items-center bg-white">
      <Header />

      <Container>
        <Image className="w-full" alt="background" src={Background} />
      </Container>


      <Container className="flex-row h-96 py-12 px-12 gap-x-8 ">
        <Card className="bg-sky-600 flex-row ">
          <div className="flex flex-row px-6 justify-between cursor-pointer">
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
            <a 
            onClick={() => alert('CLICK NO ARROW')}
            >
              <Image src={ArrowIcon} alt='ARROW ICON' className="mt-6 transform transition-transform duration-300 ease-in-out hover:scale-150" />
            </a>
          </div>
        </Card>

        <Card className="bg-sky-100">
          <div className="flex flex-row px-6 justify-between cursor-pointer">
            <div className="w-60 mt-12">
              <Image className="ml-6" alt="card item" src={CardImage2} />
            </div>

            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col w-80 mt-8 justify-start items-start">
                <h1 className="text-slate-600 text-4xl z-10">Óculos com</h1>
                <h1 className="text-slate-600 font-bold text-4xl z-10">
                  lentes inclusas
                </h1>
              </div>

              <div className="flex justify-center items-end">
                <Button 
                  title="Novidades" 
                  onClick={() => alert('PAGINA DE NOVIDADES')}
                  className="bg-white/50 flex flex-row w-48 mt-6 gap-x-2 justify-center items-center text-2xl text-zinc-100">
                    <Image className="w-6 h-6" src={Star} alt="start image" />
                  </Button>
              </div>

            </div>
          </div>
        </Card>

    
      </Container>

      <Separator />

      <Container className="flex-1 w-full">
        <div className="flex flex-row gap-x-20 py-8">
          <Image src={Collections} alt="coleções" className="shadow-black/40 shadow-lg rounded-lg " />
          <div className="flex flex-col gap-y-4">
          <h1 className="text-zinc-100 text-6xl" >NOVAS COLEÇÕES</h1>
          <h1 className="text-zinc-100 text-5xl" >Confira o que selecionamos</h1>
          <h1 className="text-zinc-100 text-4xl" >para você e sua família!</h1>
          </div>
        </div>
      </Container>

      <Separator />

      <Container className="flex-1 w-full flex flex-col gap-y-4 justify-center items-center">
        <h1 className="text-6xl text-black/80">Proteção UV 400</h1>
        <h2 className="text-6xl font-mono text-zinc-100">Bloqueiam 100% dos raios UVA e UVB.</h2>
      </Container>

      <Separator />

      <Container className="flex flex-row bg-red-400">
        <div className="bg-blue-500 w-64 h-28">
        
        </div>

      </Container>
    </div>
  );
}

export default App;
