"use client";
import { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderLinks from "./HeaderLinks";
import HeaderIcons from "./HeaderIcons";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg shadow-amber-900/20">
      <div className="container  flex justify-between items-center py-4 px-4 lg:px-8">
        <HeaderLogo />
        <nav className="hidden md:block">
          <HeaderLinks />
        </nav>
        <div className="hidden md:flex">
          <HeaderIcons />
        </div>
        {/* => the below for Mobile view */}
        <button
          className="md:hidden text-2xl text-amber-900 focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-inner ">
          <nav className="flex flex-col items-center py-6 gap-6 text-lg font-medium">
            <HeaderLinks mobile setMenuOpen={setMenuOpen} />
            <HeaderIcons mobile setMenuOpen={setMenuOpen} />
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderLayout;
