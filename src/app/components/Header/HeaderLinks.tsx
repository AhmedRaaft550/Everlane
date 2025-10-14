import Link from "next/link";
import React from "react";

const links = [
  { name: "Women", path: "/women" },
  { name: "Men", path: "/men" },
  { name: "About", path: "/about" },
  { name: "Support", path: "/support" },
];

const HeaderLinks = ({
  mobile = false,
  setMenuOpen,
}: {
  mobile?: boolean;
  setMenuOpen?: (value: boolean) => void;
}) => {
  return (
    <ul
      className={`flex ${
        mobile ? "flex-col gap-6" : "gap-8"
      } items-center text-black font-semibold`}
    >
      {links.map((link, index) => (
        <li key={link.name}>
          <Link
            prefetch={mobile ? false : true}
            href={link.path}
            className={`text-lg transition-colors hover:text-amber-700  ${
              index === 0 ? "text-amber-700 " : "text-black"
            }`}
            onClick={() => setMenuOpen?.(false)}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const HeaderLinksMemo = React.memo(HeaderLinks);

export default HeaderLinksMemo;
