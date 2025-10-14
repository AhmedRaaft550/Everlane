import MainImage from "./MainImage";
import ProductInfoMemo from "./ProductInfo";
import { ProductDetails } from "@/app/types/app";

const ProductDetailsContainer = ({
  products,
}: {
  products: ProductDetails[];
}) => {
  const menProduct = products[0];

  return (
    <article className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section>
          <MainImage
            mainImage={menProduct.thumbnail}
            images={menProduct.images}
          />
        </section>
        <ProductInfoMemo menProduct={menProduct} />
      </div>
    </article>
  );
};

export default ProductDetailsContainer;
