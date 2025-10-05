import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative w-full h-[calc(100vh-(64px+32px))] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/videos/image.webm" type="video/webm" />
        <source src="/videos/image.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
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
      </div>

      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
};

export default Banner;
