import BannerView from "./BannerView";
import BannerVideo from "./BannerVideo";

const Banner = () => {
  return (
    <section className="relative w-full h-[calc(100vh-(64px+32px))] overflow-hidden">
      <BannerVideo />
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <BannerView />
      </div>

      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
};

export default Banner;
