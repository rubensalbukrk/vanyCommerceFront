"use client";
import "../globals.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Payments from "@/assets/payments.png";
import Card from "../../components/Cards/Cards";
import Collections from "../../assets/family.jpg";
import ArrowIcon from "../../assets/arrow-right.png";
import Header from "../../components/Header/Header";
import CardImage from "../../assets/Cards/card1.png";
import CardImage2 from "../../assets/Cards/card2.png";
import Button from "../../components/Header/Button/Button";
import Mulher from "../../assets/mulher-container3.png";
import Separator from "@/components/Separator/Separator";
import FooterBackground from "@/assets/footerimage.png";
import Oculos1 from "../../assets/oculos1-container3.png";
import Oculos2 from "../../assets/oculos2-container3.png";
import Background from "../../assets/header-background.png";
import Container from "../../components/Container/Container";
import CardRecent from "@/components/CardRecents/CardRecent";
import { useCarrinho } from "@/contexts/CarrinhoContext/carrinhoContext";

function App() {
  const { produtos } = useCarrinho();

  return (
    <div className="w-full items-center bg-slate-200">
      <header>
      <Header />
      </header>

      <Container>
        <Image className="object-cover" alt="background" src={Background} />
      </Container>

      <Container className="flex-row py-4 px-12 gap-x-8 ">
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
            <a onClick={() => alert("CLICK NO ARROW")}>
              <Image
                src={ArrowIcon}
                alt="ARROW ICON"
                className="mt-6 transform transition-transform duration-300 ease-in-out hover:scale-150"
              />
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

              <div className="flex justify-center gap-x-8 items-end">
                <Button
                  title="Novidades"
                  onClick={() => alert("PAGINA DE NOVIDADES")}
                  className="flex bg-sky-500 flex-row w-40 mt-6 gap-x-2 justify-center items-center 
                  text-2xl text-white"
                >
                  <FaStar size={22} color="white" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </Container>

      <Separator />

      <Container className="flex-1 w-full">
        <div className="flex flex-row gap-x-20 py-8">
          <Image
            src={Collections}
            alt="coleções"
            className="shadow-black/40 shadow-lg rounded-lg "
          />
          <div className="flex flex-col gap-y-4">
            <h1 className="text-zinc-100 text-6xl">NOVAS COLEÇÕES</h1>
            <h1 className="text-zinc-100 text-5xl">
              Confira o que selecionamos
            </h1>
            <h1 className="text-zinc-100 text-4xl">para você e sua família!</h1>
          </div>
        </div>
      </Container>

      <Separator />

      <Container className="flex-1 w-full flex flex-col gap-y-4 justify-center items-center">
        <h1 className="text-6xl text-black/80">Proteção UV 400</h1>
        <h2 className="responsive-text text-6xl font-mono text-zinc-100">
          Bloqueiam 100% dos raios UVA e UVB.
        </h2>
      </Container>

      <Separator />

      <Container className="flex flex-row">
        <div className="flex flex-3 flex-col justify-between items-center gap-y-8">
          <div className="flex flex-1 bg-slate-100 justify-center items-center rounded-br-2xl rounded-tr-2xl shadow-black/10 shadow-lg">
            <Image src={Oculos1} alt="image" />
          </div>
          <div className="flex-1 rounded-br-xl rounded-tr-xl ">
            <Image
              src={Oculos2}
              alt="image"
              className="rounded-br-2xl rounded-tr-2xl  shadow-black/10 shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-1 h-96 px-8 justify-center items-center ">
          <h1 className="responsive-text-small text-black/70 text-center font-extralight text-3xl">
            Com óculos, você não só aprimora sua visão, mas também refina sua
            presença com uma elegância sutil e inconfundível.
          </h1>
        </div>
        <div className="flex-3 pt-8">
          <Image
            src={Mulher}
            alt="image"
            className="bg-slate-200 shadow-black/20 shadow-lg rounded-bl-2xl rounded-tl-2xl"
          />
        </div>
      </Container>

      <Separator />

      <Container className="w-flex flex-1 flex-col">
 
          <h1 className="font-light mb-6 ml-4 text-black/80 text-6xl">
            Lançamentos
          </h1>
          <div className="w-full flex flex-1 flex-row flex-wrap px-20 gap-x-80 whitespace-break-spaces justify-start items-center">
            {produtos.map((item, index) => {
              return (
                <CardRecent
                  id={item.id}
                  key={item.id}
                  img={item.img}
                  descount={item.descount}
                  estoque={item.estoque}
                  descrition={item.descrition}
                  title={item.title}
                  price={item.price}
                />
              );
            })}
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
                <h1 className="text-xl text-slate-900 font-semibold drop-shadow-lg">Empresa</h1>
                <h2 className="text-xl text-sky-600 cursor-pointer hover:underline">
                  Sobre nós
                </h2>
                <h2 className="text-xl text-sky-600 cursor-pointer hover:underline">
                  Segurança
                </h2>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold text-slate-900 drop-shadow-lg">Recursos</h1>
                <h2 className="text-xl text-sky-600 cursor-pointer hover:underline">
                  @VanyOculos
                </h2>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold text-slate-900 drop-shadow-md">Contato</h1>
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
