import OrderSummary from "../components/checkoutStructure/OrderSummary";
import PaymentButtons from "../components/checkoutStructure/PaymentButtons";

const Checkout = () => {
  return (
    <section className="mx-auto px-4 py-12 h-full flex items-center justify-center bg-gray-50">
      <article className="border border-amber-900 rounded-2xl shadow-md bg-white w-full max-w-md text-center p-6 flex flex-col gap-6">
        <OrderSummary />
        <PaymentButtons />
      </article>
    </section>
  );
};

export default Checkout;
