import Image from "next/image";
import aboutImg from "../../../public/images/modelabout.avif";

const AboutSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* => first Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#7b3f00] underline underline-offset-4">
            Our Story
          </h2>

          <p className="text-gray-800 mb-5 leading-relaxed">
            At EVERLANE, we’re more than just a brand — we’re a community that
            values quality, transparency, and sustainability. Our story began
            with a simple idea: to create timeless pieces that make you feel
            confident, stylish, and comfortable in every moment.
          </p>

          <p className="text-gray-800 mb-5 leading-relaxed">
            From our humble beginnings, we have grown into a global platform
            where fashion meets purpose. Every product we design is crafted with
            care, using ethically sourced materials and thoughtful production
            practices. We believe that true style comes from responsibility,
            which is why we are committed to minimizing our environmental
            footprint while delivering exceptional products.
          </p>

          <p className="text-gray-800 mb-5 leading-relaxed">
            Our journey is fueled by passion, creativity, and the desire to
            connect with people who share our values. Whether it’s a wardrobe
            staple or a seasonal collection, every item we offer tells a story
            of craftsmanship, dedication, and attention to detail.
          </p>

          <p className="text-gray-800 mb-5 leading-relaxed">
            We are proud of the community we’ve built — customers, creators, and
            partners who inspire us to push the boundaries of fashion and
            conscious living. At EVERLANE, we invite you to explore, discover,
            and experience fashion that is thoughtful, timeless, and made to
            last.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Join us on this journey, and become part of a story that celebrates
            style, ethics, and sustainability — every step of the way.
          </p>
        </div>

        {/* => second Section */}
        <div className="flex justify-center">
          <div className="relative overflow-hidden rounded-xl shadow-md group w-full max-w-md">
            <Image
              src={aboutImg}
              alt="Our Story"
              width={200}
              height={200}
              className="object-cover w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-105"
              quality={100}
              priority
            />
            <div className="absolute  inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-semibold"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
