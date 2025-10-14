import React from "react";
import Image from "next/image";

type ProductSrcProps = {
  images: string[];
  setImage: (image: string) => void;
};

const ProductSrc = ({ images, setImage }: ProductSrcProps) => {
  return (
    <div className="flex gap-4 mt-6 justify-center">
      {images.map((x, i) => (
        <div
          key={i}
          className="relative w-50 h-30 border border-black rounded-lg overflow-hidden hover:border-gray-500 transition cursor-pointer"
          onClick={() => setImage(x)}
        >
          <Image
            src={x}
            alt={`Product image ${i + 1}`}
            fill
            className="object-cover p-2"
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
