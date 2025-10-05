import { menProduct } from "../apiServer";
import ProductCard from "../ui/ProductCard";

const MenPage = async () => {
  const products = await menProduct();

  return (
    <main className="container mx-auto px-4 py-10 h-full">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Men’s Collection
      </h1>

      <ProductCard products={products} basePath="men" />
    </main>
  );
};

export default MenPage;
