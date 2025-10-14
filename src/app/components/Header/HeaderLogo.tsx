import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-extrabold font-mono tracking-wide text-amber-900 hover:text-amber-700 transition-colors"
      aria-label="Everlane Home"
    >
      Everlane
    </Link>
  );
};

const MempHeaderLogo = React.memo(HeaderLogo);

export default MempHeaderLogo;
