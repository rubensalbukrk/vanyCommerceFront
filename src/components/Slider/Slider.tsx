import React, { useState, memo } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import Image from "next/legacy/image";
import { BsEye } from "react-icons/bs";
import colors from "tailwindcss/colors";
import { Autoplay } from "swiper/modules";
import Produto from "@/model/produtos/produtos";
import { Swiper, SwiperSlide } from "swiper/react";
import IconAddCart from "@/assets/CARTADDICON.png";
import { CartItemProps } from "../CartItems/cartItem";
import { useCart } from "@/contexts/CartContext/cartContext";
import ItemCarrinho from "@/model/itemCarrinho/itemCarrinho";
import { MdOutlineAddCircle, MdOutlineRemoveCircle } from "react-icons/md";

interface SliderItemViewProps extends CartItemProps {
  item: ItemCarrinho;
  onClose: () => void; // deve ser void, não retorna ReactNode
}

const Slider: React.FC = () => {
  const { products, addItem, descount } = useCart();
  const [selectedItem, setSelectedItem] = useState<ItemCarrinho>();
  const [open, setOpen] = React.useState(true);

  const handleItemView = (produto: ItemCarrinho) => {
    setOpen(true);
    setSelectedItem(produto);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const DrawerItemView: React.FC<SliderItemViewProps> = memo(({ item }) => {
    return (
      <Drawer open={open} onOpenChange={handleClose}>
        <DrawerContent className="sm:mx-52 sm:w-8/12">
          <DrawerHeader
            className="flex flex-col py-0 pt-8
              sm:flex-row sm:justify-center sm:items-center sm:gap-10"
          >
            <Image
              className="object-cover self-center"
              src={item?.produto?.img}
              alt={item?.produto?.title}
              width={200}
              height={170}
            />
            <div className="flex flex-col">
              <DrawerTitle className="text-3xl text-start">
                {item?.produto?.title}
              </DrawerTitle>
              <DrawerDescription className="text-lg text-start sm:text-xl">
                {item?.produto?.descrition}
              </DrawerDescription>
              <div className="w-full flex flex-row justify-between">
                <div>
                  <DrawerDescription className="text-lg mt-2 font-bold text-black text-start sm:text-xl">
                    Preço R$ {item?.produto?.price.toString().replace(".", ",")}
                  </DrawerDescription>
                  <DrawerDescription className="text-lg font-bold text-black text-start sm:text-xl">
                    Desconto{" "}
                    {item?.produto?.descount.toString().replace("0.", "")}%
                  </DrawerDescription>
                </div>
                {/* BUTTONS ADD / REMOVE */}
                <div className="flex flex-row w-16 self-center h-16 items-center justify-between">
                  <button
                    onClick={() =>
                      setSelectedItem((previous: any) => ({
                        ...previous,
                        quantidade: previous?.quantidade
                          ? previous.quantidade + 1
                          : 1,
                      }))
                    }
                  >
                    <MdOutlineAddCircle size={22} color={colors.sky[500]} />
                  </button>
                  <h1 className="text-zinc-500 text-center flex-1 mx-1">
                    {selectedItem?.quantidade}
                  </h1>
                  <button
                    onClick={() =>
                      setSelectedItem((previous: any) => ({
                        ...previous,
                        quantidade:
                          previous?.quantidade && previous.quantidade > 1
                            ? previous.quantidade - 1
                            : 0,
                      }))
                    }
                  >
                    <MdOutlineRemoveCircle size={22} color={colors.sky[500]} />
                  </button>
                </div>
              </div>
            </div>
          </DrawerHeader>
          <DrawerFooter className="flex flex-row sm:justify-end">
            <DrawerClose onClick={handleClose} className="w-40">
              <span className="border-2 px-4 py-2 bg-slate-100 rounded-md w-40">
                VOLTAR
              </span>
            </DrawerClose>
            <button
              className="flex w-full px-6 h-14 bg-blue-400 justify-between items-center rounded-bl-xl rounded-br-xl hover:bg-blue-500 transition duration-1000 ease-in-out active:bg-blue-700  rounded-xl sm:w-60"
              onClick={() => [
                selectedItem && addItem(selectedItem),
                handleClose(),
              ]}
            >
              <Image src={IconAddCart} alt="icon cart" className="w-8 h-6" />
              <p className="text-white text-2xl">Adicionar</p>
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  });

  // Definindo o displayName para o componente memoizado
  DrawerItemView.displayName = "DrawerItemView";

  return (
    <Swiper
      modules={[Autoplay]}
      effect="cards"
      spaceBetween={10}
      slidesPerView={"auto"}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      className="flex w-full justify-center items-center"
    >
      {products?.
      filter(item => item.descount > 0)
      .map((produto: Produto, index: number) => (
        <SwiperSlide
          key={index}
          style={{ width: "20%" }}
          onClick={() => handleItemView({ produto: produto, quantidade: 1 })}
        >
          <div className="bg-white rounded-md mb-2 ml-1 cursor-pointer shadow-black/20 shadow-md">
            <p className="absolute z-20 top-0 left-1 px-1 text-white text-xs rounded-t-md rounded-br-md bg-red-500 sm:text-lg">
              -{produto.descount.toString().replace("0.", "")}%
            </p>
            <Image
              src={produto.img}
              alt={produto.title}
              width={80}
              height={80}
              layout="responsive"
              className="flex self-center rounded-tl-md rounded-tr-md"
            />
            <div className="flex flex-row gap-x-1 bg-sky-400 rounded-bl-md rounded-br-md justify-center items-center">
              <BsEye size={18} color="white" />
              <p className="text-xs sm:text-lg text-white hover:underline">
                Ver
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {selectedItem && (
        <DrawerItemView item={selectedItem} onClose={handleClose} />
      )}
    </Swiper>
  );
};

export default Slider;
