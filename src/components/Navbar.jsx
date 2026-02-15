import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#design", label: "Designs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full backdrop-blur-md bg-gray-950/80 border-b border-gray-800 shadow-lg z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="group">
          <h1 className="text-white font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-200 transition-all duration-300 cursor-pointer">
            Gema.dev
          </h1>
          <div className="h-1 bg-gradient-to-r from-blue-400 to-cyan-300 w-0 group-hover:w-full transition-all duration-300 rounded-full"></div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-1 text-gray-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-lg hover:text-blue-400 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-950/95 backdrop-blur-md border-b border-gray-800 md:hidden animate-in fade-in duration-300">
            <ul className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
