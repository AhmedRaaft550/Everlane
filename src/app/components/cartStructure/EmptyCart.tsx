import Image from "next/image";
import Link from "next/link";

const EmptyCart = () => (
  <div className="text-center py-16 flex flex-col items-center justify-center gap-6 h-full">
    <div className="relative w-100 h-64 mx-auto">
      <Image
        src="/images/emptyCart.svg"
        alt="Empty Cart Illustration"
        fill
        className="object-contain"
        priority={true}
      />
    </div>
    <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
    <p className="text-gray-600 max-w-sm">
      Browse products and add them to your cart to see them here.
    </p>
    <Link
      href="/men"
      className="mt-4 inline-block px-6 py-3 bg-amber-900 text-white font-semibold rounded-lg shadow hover:bg-amber-700 transition-colors"
    >
      Go to Products
    </Link>
  </div>
);

export default EmptyCart;
