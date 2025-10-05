import Link from "next/link";

const links = [
  { name: "Women", path: "/women" },
  { name: "Men", path: "/men" },
  { name: "About", path: "/about" },
  { name: "Support", path: "/support" },
];

const HeaderLinks = ({ mobile = false }: { mobile?: boolean }) => {
  return (
    <ul
      className={`flex ${
        mobile ? "flex-col gap-6" : "gap-8"
      } items-center text-black font-semibold`}
    >
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.path}
            className="hover:text-amber-700 transition-colors text-lg"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderLinks;
