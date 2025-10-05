import { getWomanProducts } from "../apiServer";
import ProductCard from "../ui/ProductCard";

const page = async () => {
  const products = await getWomanProducts();

  return (
    <main className="container mx-auto px-4 py-10 h-full">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Womens’s Collection
      </h1>

      <ProductCard products={products} basePath="women" />
    </main>
  );
};

export default page;
