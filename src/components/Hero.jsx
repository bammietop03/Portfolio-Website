import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import bammie from "../assets/images/bammie.png";
import handleDownload from "../utils/download";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pt-10 pb-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container flex flex-col md:flex-row item-center mx-auto max-w-7xl md:py-10 space-y-0 md:space-y-0 relative z-10">
        {/* Left Item */}
        <div className="flex flex-col space-y-3 md:w-1/2 items-center md:items-start mx-5 md:mx-0 md:mr-7 py-10 sm:px-6 animate-fade-in-up">
          <p className="text-teal-400 font-bold text-lg tracking-wider">
            SOFTWARE ENGINEER
          </p>

          <h1 className="text-white text-5xl md:text-6xl font-bold text-center md:text-left">
            Hello I'm
          </h1>
          <h1 className="gradient-text text-5xl md:text-7xl font-bold text-center md:text-left">
            Adebayo Bamiwo
          </h1>
          <p className="text-gray-300 pl-5 md:pl-0 md:pr-6 text-center py-6 md:text-left text-lg leading-relaxed">
            I’m a passionate Software Engineer with a strong focus on building
            efficient, scalable, and user-friendly applications.
          </p>
          <div className="flex space-x-3 flex-wrap justify-center md:justify-start gap-2">
            <button
              onClick={handleDownload}
              className="text-white bg-teal-500 px-6 md:px-8 py-3 rounded-full hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 flex items-center font-semibold transform hover:scale-105"
            >
              Download CV <FaDownload className="ml-2" />
            </button>
            <a
              href="https://github.com/bammietop03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={45}
                className="p-2.5 text-teal-400 border-2 border-teal-400 rounded-full hover:bg-teal-400 hover:text-gray-900 cursor-pointer transition-all duration-300 transform hover:scale-110"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/bamiwo-adebayo-348708144"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={45}
                className="p-2.5 text-teal-400 border-2 border-teal-400 rounded-full hover:bg-teal-400 hover:text-gray-900 cursor-pointer transition-all duration-300 transform hover:scale-110"
              />
            </a>

            <FaInstagram
              size={45}
              className="p-2.5 text-teal-400 border-2 border-teal-400 rounded-full hover:bg-teal-400 hover:text-gray-900 cursor-pointer transition-all duration-300 transform hover:scale-110"
            />
            <a
              href="https://x.com/Bammie_M"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaX
                size={45}
                className="p-2.5 text-teal-400 border-2 border-teal-400 rounded-full hover:bg-teal-400 hover:text-gray-900 cursor-pointer transition-all duration-300 transform hover:scale-110"
              />
            </a>
          </div>
        </div>
        {/* Right Item */}
        <div className="w-1/2 ml-28 md:ml-0 md:pl-20 animate-fade-in-up">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={bammie}
              alt="Adebayo Bamiwo"
              className="relative z-10 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
