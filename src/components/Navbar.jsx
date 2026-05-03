import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F2]/95 backdrop-blur-md border-b border-gray-200">

      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">


        <a
          href="#"
          className="heading-font text-2xl md:text-3xl font-bold text-[#1E3A5F] tracking-wide"
        >
          Advocate Jay Patel
        </a>

        
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">

          <li>
            <a
              href="#about"
              className="hover:text-[#1E3A5F]"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#practice"
              className="hover:text-[#1E3A5F]"
            >
              Practice Areas
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-[#1E3A5F]"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="#declaration"
              className="hover:text-[#1E3A5F]"
            >
              Declaration
            </a>
          </li>

        </ul>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-[#1E3A5F]"
          aria-label="Toggle Navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>

      
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-[#F8F6F2]">

          <ul className="flex flex-col px-6 py-5 gap-5 text-sm font-medium text-gray-700">

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#1E3A5F]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#practice"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#1E3A5F]"
              >
                Practice Areas
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#1E3A5F]"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="#declaration"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#1E3A5F]"
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