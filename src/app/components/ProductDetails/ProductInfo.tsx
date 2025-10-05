"use client";
import Image from "next/image";
import { ProductDetails } from "@/app/types/app";
import React from "react";
import { useAddToCart } from "@/app/utils/handleAddToCart";
const ProductInfo = ({ menProduct }: { menProduct: ProductDetails }) => {
  const { handleAddToCart } = useAddToCart();
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-5xl font-extrabold text-gray-900">
        {menProduct.title}
      </h1>

      <p className="text-gray-600 font-semibold leading-relaxed">
        {menProduct.description}
      </p>

      <p className="text-2xl font-semibold text-[#d35400]">
        ${menProduct.price}
      </p>

      <div className="flex flex-wrap gap-2 text-sm">
        <span className="px-3 py-1 bg-gray-300 rounded-md">
          Brand: {menProduct.brand}
        </span>
        <span className="px-3 py-1 bg-gray-300 rounded-md">
          Stock: {menProduct.stock}
        </span>
        <span className="px-3 py-1 bg-gray-300 rounded-md">
          {menProduct.shippingInformation}
        </span>
      </div>
      <Image src={menProduct.meta.qrCode} alt="qr" width={100} height={100} />

      <button
        onClick={() => handleAddToCart(menProduct)}
        className="bg-[#7b3f00] hover:bg-[#5c2d00] text-white font-medium py-3 px-6 rounded-lg transition shadow w-fit"
      >
        Add to Cart
      </button>

      <div className="flex items-center gap-2 bg-gray-50 border rounded-lg p-4 text-gray-600 text-sm">
        <span className="text-red-500 text-lg">⏱</span>
        {menProduct.returnPolicy}
      </div>
    </section>
  );
};

const ProductInfoMemo = React.memo(ProductInfo);

export default ProductInfoMemo;
