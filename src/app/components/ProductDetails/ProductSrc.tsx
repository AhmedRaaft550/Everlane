import React from "react";
import Image from "next/image";
import { ProductSrcProps } from "@/app/types/app";

const ProductSrc = ({ images, setImage }: ProductSrcProps) => {
  return (
    <div className="flex gap-4  mt-6 justify-center ">
      {images.map((x, i) => (
        <div
          key={i}
          className="relative w-50 h-30 border border-black rounded-lg overflow-hidden hover:border-gray-500 transition cursor-pointer group"
          onClick={() => setImage(x)}
        >
          <div className="absolute inset-0 bg-amber-800/9 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in"></div>

          <Image
            src={x}
            alt={`Product image ${i + 1}`}
            fill
            className="object-cover p-2 hover:scale-95 duration-200"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
};

const ProductSrcMemo = React.memo(ProductSrc);

export default ProductSrcMemo;
