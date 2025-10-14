import { getWomanProducts } from "@/app/apiServer";
import { ParamProps } from "@/app/types/app";
import ProductDetailsContainer from "@/app/components/ProductDetails/ProductDetailsContainer";

const page = async ({ params }: { params: Promise<ParamProps> }) => {
  const { womenId } = await params;
  const idToNumber = Number(womenId);
  const womenProduct = await getWomanProducts();

  const getTheProduct = womenProduct.filter(
    (product) => product.id === idToNumber
  );

  return <ProductDetailsContainer products={getTheProduct} />;
};

export default page;
