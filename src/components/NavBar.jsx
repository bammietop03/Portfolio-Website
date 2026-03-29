import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
        <div className="container flex justify-between mx-auto max-w-7xl h-20 items-center px-6">
          <a
            href="/"
            className="text-3xl font-bold text-white hover:scale-105 transition-transform"
          >
            <span>Bamiwo</span>
            <span className="text-teal-400">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`font-medium ${link.href === "/" ? "text-teal-400 border-b-2 border-teal-400 pb-1" : "text-white hover:text-teal-400 hover:border-b-2 border-teal-400 pb-1 transition-all duration-300"}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hire Me Button - Desktop */}
          <a href="#contact" className="hidden md:block">
            <button className="bg-teal-500 px-6 py-2.5 rounded-lg hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 font-semibold transform hover:scale-105">
              Hire me
            </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-teal-400 text-3xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700 animate-fade-in-up">
            <div className="flex flex-col space-y-4 px-6 py-6">
              {menuLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={toggleMenu}
                  className={`font-medium text-lg ${link.href === "/" ? "text-teal-400" : "text-white hover:text-teal-400 transition-colors"}`}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={toggleMenu}>
                <button className="bg-teal-500 w-full px-6 py-3 rounded-lg hover:bg-teal-400 font-semibold mt-4">
                  Hire me
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
