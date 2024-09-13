"use client";
import { CartProvider } from "@/contexts/CartContext/cartContext";

export default function Layout(props: any) {
  return (
    <CartProvider>
      <div className="flex">{props.children}</div>
    </CartProvider>
  );
}
