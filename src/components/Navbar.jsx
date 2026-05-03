import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F2]/95 backdrop-blur-sm border-b border-gray-200">

      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="heading-font text-2xl font-bold text-[#1E3A5F]">
          Advocate Jay Patel
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-sm font-medium">

          <li>
            <a
              href="#about"
              className="hover:text-[#1E3A5F] transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#practice"
              className="hover:text-[#1E3A5F] transition"
            >
              Practice Areas
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-[#1E3A5F] transition"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="#declaration"
              className="hover:text-[#1E3A5F] transition"
            >
              Declaration
            </a>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-[#1E3A5F]"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-[#F8F6F2]">

          <ul className="flex flex-col px-6 py-4 gap-5 text-sm font-medium">

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#1E3A5F] transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#practice"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#1E3A5F] transition"
              >
                Practice Areas
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#1E3A5F] transition"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="#declaration"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#1E3A5F] transition"
              >
                Declaration
              </a>
            </li>

          </ul>

        </div>
      )}
    </header>
  );
};

export default Navbar;