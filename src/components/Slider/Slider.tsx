import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import Image from "next/image";
import { Button } from "../ui/button";
import { BsEye } from "react-icons/bs";
import colors from "tailwindcss/colors";
import { Autoplay } from "swiper/modules";
import AddItemIcon from '@/assets/addicon.png'
import Produto from "@/model/produtos/produtos";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonCard from "../CardItems/button/button";
import RemoveItemIcon from '@/assets/removeItem.png';
import { CartItemProps } from "../CartItems/cartItem";
import { useCart } from "@/contexts/CartContext/cartContext";
import ItemCarrinho from "@/model/itemCarrinho/itemCarrinho";

interface SliderItemViewProps extends CartItemProps {
  item: ItemCarrinho;
  onClose: () => void; // deve ser void, não retorna ReactNode
}

const Slider: React.FC = () => {
  const { products, addItem, removerItem } = useCart();
  const [selectedItem, setSelectedItem] = useState<ItemCarrinho | undefined>(undefined);
  const [open, setOpen] = React.useState(true);

  const handleItemView = (produto: ItemCarrinho) => {
    setSelectedItem(produto);
  };
  const handleClose = () => {
    setSelectedItem(undefined);
  };
  const DrawerItemView: React.FC<SliderItemViewProps> = ({
    item
  }) => {
    return (
      <Drawer open={open} onOpenChange={handleClose}>
        <DrawerContent className="sm:mx-52 sm:w-8/12">
          <DrawerHeader
            className="flex flex-col py-0
          sm:flex-row sm:justify-center sm:items-center sm:gap-10"
          >
            <Image className="object-contain" src={item.produto.img} alt={item.produto.title} />
            <div className="flex flex-col">
              <DrawerTitle className="text-3xl text-start">
                {item.produto.title}
              </DrawerTitle>
              <DrawerDescription className="text-lg text-start sm:text-xl">
                {item.produto.descrition}
              </DrawerDescription>
            </div>
            <div className="flex flex-row w-44 justify-between items-center">
              <button className="w-7" onClick={() => setSelectedItem({produto: item.produto, quantidade: item.quantidade + 1})}>
                <Image src={AddItemIcon} alt="addicon" />
              </button>
              <h1 className="text-zinc-500 text-center flex-1 mr-2">
                {selectedItem?.quantidade}
              </h1>
              <button className="w-7" onClick={() => setSelectedItem({produto: item.produto, quantidade: item.quantidade - 1})}>
                <Image src={RemoveItemIcon} alt="removeicon" />
              </button>
            </div>
          </DrawerHeader>
          <DrawerFooter className="flex flex-row">
            <button></button>
            <DrawerClose>
              <Button className="w-32" onClick={handleClose} variant="outline">
                VOLTAR
              </Button>
            </DrawerClose>
            <ButtonCard
              className="rounded-xl sm:w-60"
              onClick={() => selectedItem && addItem({produto: selectedItem.produto, quantidade: selectedItem?.quantidade})}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  };

  return (
    <Swiper
      modules={[Autoplay]}
      effect="cards"
      spaceBetween={10}
      slidesPerView={"auto"}
      autoplay={{
        delay: 1500, // Tempo de espera entre os slides (em milissegundos)
        disableOnInteraction: false, // Continua o autoplay mesmo após interação (toque ou clique)
      }}
      loop={true}
      className="flex w-full justify-center items-center"
    >
      {products?.map((produto: Produto, index: number) => (
        <SwiperSlide
          key={index}
          style={{ width: "20%" }}
          onClick={() => handleItemView({produto: produto, quantidade: 0})}
        >
          <div className="bg-white rounded-md cursor-pointer">
            <p className="absolute top-0 left-0 px-1 text-white text-xs rounded-t-md rounded-br-md bg-red-500 sm:text-lg">
              -{produto.descount.toFixed(2).replace("0.", "")}%
            </p>
            <Image
              src={produto.img}
              alt={produto.title}
              className="object-contain rounded-md"
            />
            <div className="flex flex-row gap-x-1 justify-center items-center">
              <BsEye size={18} color={colors.sky[400]} />
              <p className="text-xs sm:text-lg text-sky-400 hover:underline">
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
