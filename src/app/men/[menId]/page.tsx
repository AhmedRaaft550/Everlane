import { menProduct } from "@/app/apiServer";
import ProductDetailsContainer from "@/app/components/ProductDetails/ProductDetailsContainer";
import { ParamProps } from "@/app/types/app";

const page = async ({ params }: { params: Promise<ParamProps> }) => {
  const { menId } = await params;

  const paramToNumber = Number(menId);
  const data = await menProduct();
  const getTheProduct = data.filter((product) => product.id === paramToNumber);

  return <ProductDetailsContainer products={getTheProduct} />;
};

export default page;
