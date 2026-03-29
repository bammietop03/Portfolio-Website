import React from "react";
import Carousel from "./helper/Carousel";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="text-center pt-16 pb-8 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">MY PORTFOLIO</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
          A showcase of projects I've built and contributed to
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default Portfolio;
