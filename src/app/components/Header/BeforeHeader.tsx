import Link from "next/link";

const BeforeHeader = () => {
  return (
    <nav className="flex justify-center gap-1 items-center bg-[#775437] py-1">
      <h1 className="text-white font-semibold">
        New : Summer dresses for days
      </h1>
      <Link href="/" className="underline">
        shop dresses now
      </Link>
    </nav>
  );
};

export default BeforeHeader;
