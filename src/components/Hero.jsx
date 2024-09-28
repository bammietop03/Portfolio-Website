import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import bamiwo from "../assets/images/Real_bamiwo.png";
import handleDownload from "../utils/download";

const Hero = () => {
  return (
    <section className="bg-gray-900 pt-10">
      <div className="container flex flex-col md:flex-row item-center  mx-auto max-w-7xl md:py-10 space-y-0 md:space-y-0">
        {/* Left Item */}
        <div className="flex flex-col space-y-3 md:w-1/2 items-center md:items-start mr-7 py-10 sm:px-6">
          <p className="text-teal-400 font-bold ">Software Engineer</p>

          <h1 className="text-white text-6xl font-bold text-center md:text-left">
            Hello I'm
          </h1>
          <h1 className="text-teal-400 text-6xl font-bold text-center md:text-left">
            Adebayo Bamiwo
          </h1>
          <p className="text-white pl-5 md:pl-0 md:pr-6 text-center py-6 md:text-left">
            I’m a passionate Software Engineer with a strong focus on building
            efficient, scalable, and user-friendly applications.
          </p>
          <div className=" flex space-x-3">
            <button
              onClick={handleDownload}
              className="text-teal-400  px-6 py-2 rounded-3xl hover:bg-teal-400 hover:text-black flex border border-teal-400 mr-4"
            >
              Download CV <FaDownload className="mt-1 ml-2" />
            </button>
            <a
              href="https://github.com/bammietop03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={35}
                color="#2dd4bf"
                className="border p-2 border-teal-400 rounded-full hover:bg-gray-700 cursor-pointer"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/bamiwo-adebayo-348708144"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={35}
                color="#2dd4bf"
                className="border p-2 border-teal-400 rounded-full hover:bg-gray-700 cursor-pointer"
              />
            </a>

            <FaInstagram
              size={35}
              color="#2dd4bf"
              className="border p-2 border-teal-400 rounded-full hover:bg-gray-700 cursor-pointer"
            />
            <a
              href="https://x.com/Bammie_M"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaX
                size={35}
                color="#2dd4bf"
                className="border p-2 border-teal-400 rounded-full hover:bg-gray-700 cursor-pointer"
              />
            </a>
          </div>
        </div>
        {/* Right Item */}
        <div className="w-1/2  ml-28 md:ml-0 md:pl-20">
          <img src={bamiwo} alt="description" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
