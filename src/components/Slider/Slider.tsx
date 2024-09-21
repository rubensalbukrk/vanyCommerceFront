import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { Button } from "../ui/button";
import { BsEye } from "react-icons/bs";
import colors from "tailwindcss/colors";
import { Autoplay } from "swiper/modules";
import Produto from "@/model/produtos/produtos";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCart } from "@/contexts/CartContext/cartContext";

interface SliderItemViewProps {
  item: Produto;
  onClose: () => void; // deve ser void, não retorna ReactNode
}

const Slider: React.FC = () => {
  const { products } = useCart();
  const [selectedItem, setSelectedItem] = useState<Produto | null>(
    null
  );
  const [open, setOpen] = React.useState(true);

  const handleItemView = (item: Produto) => {
    setSelectedItem(item)
  };
  const handleClose = () => {
    setSelectedItem(null);
  };
  const DrawerItemView: React.FC<SliderItemViewProps> = ({item, onClose}) => {
    return (
      <Drawer open={open} onOpenChange={handleClose} >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>PRODUTO: {item.title}</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <Image src={item.img} alt={item.title} />
          <DrawerDescription>
            {item.descrition}
          </DrawerDescription>
          <DrawerFooter>
            <Button>Adicionar no carrinho</Button>
            <DrawerClose>
              <Button onClick={handleClose} variant="outline">Cancel</Button>
            </DrawerClose>
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
          onClick={() => handleItemView(produto)}
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
