"use client";

import Image from "next/image";
import { useState } from "react";
import ProductSrcMemo from "./ProductSrc";
import Loading from "@/app/loading";
import { MainImageProps } from "@/app/types/app";

const MainImage = ({ mainImage, images }: MainImageProps) => {
  const [image, setImage] = useState(mainImage);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (newImage: string) => {
    setIsLoading(true);
    setImage(newImage);
  };

  return (
    <>
      <section className="relative w-full bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80">
            <Loading />
          </div>
        )}

        <Image
          src={image}
          alt="img"
          width={600}
          height={600}
          className="object-cover p-6 hover:scale-105 transition-transform duration-500"
          onLoad={() => setIsLoading(false)}
        />
      </section>

      <ProductSrcMemo setImage={handleImageChange} images={images} />
    </>
  );
};

export default MainImage;
