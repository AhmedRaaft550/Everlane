"use client";
import Image from "next/image";
import { ProductCardType } from "../types/app";
import Link from "next/link";

const ProductCard = ({
  products,
  basePath,
}: {
  products: ProductCardType[];
  basePath: string;
}) => {
  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {products.map((product, index) => (
          <article
            key={product.id}
            className="bg-white/70 backdrop-blur-md border border-white/20 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
          >
            <div className="relative w-full h-56">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,25vw"
                priority={index <= 6}
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg truncate">
                {product.title}
              </h2>
              <p className="text-gray-600 mt-2">${product.price}</p>
              <Link href={`${basePath}/${product.id}`}>
                <button className="mt-3 w-full bg-[#775437] text-white font-medium py-2  px-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                  Show Details
                </button>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default ProductCard;
