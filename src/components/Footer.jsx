import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-gray-400">
          <p>&copy; {currentYear} Adebayo Bamiwo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
