"use client";

import Link from "next/link";
import { MdError } from "react-icons/md";

const Error = ({ message, reset }: { message: string; reset: () => void }) => {
  return (
    <section className="relative w-full h-full bg-amber-900 flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-16 -left-16 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-24 -right-24 animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-lg">
        <MdError className="text-7xl text-red-600 w-full md:text-8xl font-extrabold mb-4 text-center drop-shadow-xl animate-bounce" />

        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Something went wrong
        </h2>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          {message || "We couldn’t load the page you were looking for."}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/">
            <button className="bg-white text-red-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Go Home
            </button>
          </Link>
          <button
            onClick={reset}
            className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-red-500 transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error;
