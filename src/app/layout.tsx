import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CarrinhoContext from "@/contexts/CarrinhoContext/carrinhoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vanny Óculos",
  description: "Com estilo para você!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
