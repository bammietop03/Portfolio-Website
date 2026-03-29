import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            <p>&copy; {currentYear} Adebayo Bamiwo. All rights reserved.</p>
          </div>
          <div className="text-gray-400 text-center">
            <p>
              Built with <span className="text-teal-400 animate-pulse">❤</span>{" "}
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
