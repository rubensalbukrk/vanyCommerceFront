import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper/modules'
import Image from "next/image";
import { useCart } from "@/contexts/CartContext/cartContext";
import Produto from "@/model/produtos/produtos";

const Slider: React.FC = () => {
  const {products} = useCart();
  
  return (
      <Swiper
        modules={[Autoplay]}
        effect="cards" 
        spaceBetween={10}
        slidesPerView={5}
        autoplay={{
          delay: 1500, // Tempo de espera entre os slides (em milissegundos)
          disableOnInteraction: false, // Continua o autoplay mesmo após interação (toque ou clique)
        }}
        loop={true}
        
        className="flex w-full justify-center items-center"
      >
        {products && products.map((produto: Produto, index: number) => (
          <SwiperSlide key={index}>
            <Image src={produto.img} width={200} height={100} alt={produto.title}/>
            <p>{produto.title}</p>
            <p>Desconto {produto.descount.toFixed(2).replace('0.', '')}%</p>
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default Slider;
