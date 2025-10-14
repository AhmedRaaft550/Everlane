import Link from "next/link";

const BannerView = () => {
  return (
    <div className="text-white max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
        Welcome to Everlane
      </h1>
      <p className="mt-4 text-lg md:text-xl font-medium drop-shadow">
        Quality Products. Fast Delivery. Trusted Service.
      </p>
      <Link href="/men">
        <button className="mt-6 px-6 py-3 cursor-pointer bg-amber-800 hover:bg-amber-900 transition text-white rounded-md font-semibold">
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default BannerView;
