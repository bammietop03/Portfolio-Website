import React from "react";
import Card from "./helper/Card";
import { FaDownload } from "react-icons/fa";
import handleDownload from "../utils/download";

const Services = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container flex justify-between text-white py-14 mx-auto max-w-7xl flex-col-reverse md:py-20 lg:flex-row relative z-10">
        {/* left item */}
        <>
          <Card />
        </>
        {/* right item */}
        <div className="flex flex-col justify-center md:mt-12 text-center lg:text-left p-7 mb-10 md:mb-0 md:p-0 md:w-1/3 md:mr-20">
          <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            I’m a passionate Software Engineer with a strong focus on building
            efficient, scalable, and user-friendly applications. With experience
            in both frontend and backend development, I thrive on solving
            complex problems and creating seamless digital experiences.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            My expertise spans across designing robust architectures, managing
            databases, and building intuitive user interfaces. I work with
            modern technologies like JavaScript, React, Node.js, Django etc. and
            constantly challenge myself to stay up-to-date with industry trends.
          </p>
          <button
            onClick={handleDownload}
            className="text-white bg-teal-500 px-8 py-3 rounded-full hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 flex items-center font-semibold transform hover:scale-105 justify-center self-center md:self-start"
          >
            Download CV <FaDownload className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
