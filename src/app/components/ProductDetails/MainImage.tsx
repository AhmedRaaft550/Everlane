"use client";

import Image from "next/image";
import { useState } from "react";
import ProductSrcMemo from "./ProductSrc";

type MainImageProps = {
  mainImage: string;
  images: string[];
};

const MainImage = ({ mainImage, images }: MainImageProps) => {
  const [image, setImage] = useState(mainImage);

  return (
    <>
      <div className="relative w-full  bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
        <Image
          src={image}
          alt="img"
          width={600}
          height={600}
          className="object-cover p-6 hover:scale-105 transition-transform duration-500"
        />
      </div>
      <ProductSrcMemo setImage={setImage} images={images} />
    </>
  );
};

export default MainImage;
