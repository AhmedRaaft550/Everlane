import OrderSummary from "@components/checkoutStructure/OrderSummary";
import PaymentButtons from "@components/checkoutStructure/PaymentButtons";
import { redirect } from "next/navigation";

import Link from "next/link";

type SearchParams = {
  items?: number;
  price?: number;
};

const Checkout = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const { items = 0, price = 0 } = await searchParams;
  const priceToNumber = Number(price);
  const discount = 100;
  const originalTotal = priceToNumber + discount;

  if (!price || !items) {
    redirect("/");
  }

  return (
    <section className="py-12 px-4 h-full bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-amber-900 hover:scale-102 duration-200">
        <h1 className="text-center font-mono text-4xl font-extrabold text-amber-900 tracking-wide mb-8 uppercase">
          Checkout
        </h1>
        <OrderSummary
          itemsProps={{ items, priceToNumber, originalTotal, discount }}
        />
        <PaymentButtons priceToNumber={priceToNumber} />
        <p className="text-sm text-center text-gray-500 mt-6">
          Having trouble checking out?{" "}
          <Link href="/support" className="text-amber-800 underline">
            Contact support
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Checkout;
