import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  style: 'normal',
  weight: "200",
  subsets: ['latin']
  });

export const metadata: Metadata = {
  title: "Vanny Óculos",
  description: "Com estilo para você!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
