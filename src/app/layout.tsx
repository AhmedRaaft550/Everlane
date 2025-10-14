import type { Metadata } from "next";
import "./globals.css";
import BeforeHeader from "./components/Header/BeforeHeader";
import HeaderLayout from "./components/Header/HeaderLayout";
import Footer from "./components/footer/Footer";
import ReduxProvider from "./redux/ReduxProvider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import FloatingCart from "./components/cartStructure/FloatingCartMobileView";
export const metadata: Metadata = {
  title: "Everlane",
  description:
    "Discover timeless essentials at Everlane. Ethically made clothing, accessories, and more — designed for modern living.",
  keywords: [
    "Everlane",
    "ethical fashion",
    "sustainable clothing",
    "modern wardrobe",
    "minimalist fashion",
    "quality essentials",
    "conscious consumer",
  ],
  icons: {
    icon: "/images/mainIcom.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-screen `}>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#000",
              color: "#fff",
            },
          }}
        />
        <NextTopLoader color="#000" />
        <ReduxProvider>
          <FloatingCart />
          <BeforeHeader />
          <HeaderLayout />
          <main className="flex-1"> {children}</main>
        </ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
