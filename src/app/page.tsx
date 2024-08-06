"use client"
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
import Mulher from '../assets/mulher-container3.png'
import Oculos1 from '../assets/oculos1-container3.png'
import Oculos2 from '../assets/oculos2-container3.png'
import CardRecent from "@/components/CardRecents/CardRecent";
import Payments from '@/assets/payments.png'

const produtos = [
  {
      id: 1,
      title: "Rommeu",
      price: "69,90",
      img: require('../assets/Oculos/oculos1.png')
  },
  {
      id: 2,
      title: "Armação",
      price: "89,99",
      img: require('../assets/Oculos/oculos2.png')
  },
  {
      id: 3,
      title: "Rayban",
      price: "59,90",
      img: require('../assets/Oculos/oculos3.png')
  },
  {
    id: 4,
    title: "Social",
    price: "49,90",
    img: require('../assets/Oculos/oculos4.png')
},

]


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

      <Container className="flex flex-row">
        
        <div className="flex flex-3 flex-col justify-between items-center gap-y-4">
          <div className="flex flex-1 bg-slate-100 justify-center items-center rounded-br-2xl rounded-tr-2xl shadow-black/40 shadow-lg">
            <Image src={Oculos1}  alt="image" />
          </div>
          <div className="flex-1 rounded-br-xl rounded-tr-xl">
          <Image src={Oculos2}  alt="image" className="rounded-br-2xl rounded-tr-2xl  shadow-black/40 shadow-lg" />
          </div>
        </div>
        <div className="flex flex-1 h-96 px-8 justify-center items-center ">
          <h1 className="text-black/70 text-center font-extralight text-4xl">lorem idpson d dsads dsds
            2321 dsadasd dasdsadas</h1>
        </div>
        <div className="flex-3 pt-8">
          <Image src={Mulher} alt="image"className="bg-slate-200 shadow-black/40 shadow-lg rounded-lg rounded-bl-2xl rounded-tl-2xl" />
        </div>

      </Container>

      <Separator />

      <Container className="flex flex-col px-8">

        <div className="flex flex-1 flex-col min-h-96">
        <h1 className="font-light mb-6 text-black/80 text-6xl">Lançamentos</h1>
        <div className="flex flex-1 flex-row gap-x-6 ">
         {produtos.map((item) => {
          return <CardRecent key={item.id} img={item.img} title={item.title} price={item.price} id={item.id} />
         })}
        </div>
        </div>
      </Container>

      <Separator />

      <Container>
        <div className="flex flex-1 flex-col justify-center items-center">
        <h1 className="text-black text-4xl tracking-custom">FACILIDADE  NO  PAGAMENTO</h1>
        <Image src={Payments} alt="meios  de  pagamentos" />
        </div>
      </Container>
    </div>
  );
}

export default App;
