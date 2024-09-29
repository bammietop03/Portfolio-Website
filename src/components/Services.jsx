import React from 'react'
import Card from './helper/Card'
import { FaDownload } from 'react-icons/fa';
import handleDownload from "../utils/download";

const Services = () => {
  return (
    <section id="about" className=" bg-gray-900">
      <div className="container flex justify-between text-white py-14 mx-auto max-w-7xl flex-col-reverse md:py-20 lg:flex-row">
        {/* left item */}
        <>
          <Card />
        </>
        {/* right item */}
        <div className="flex flex-col justify-center  md:mt-12  text-center lg:text-left p-7 mb-10 md:mb-0 md:p-0 md:w-1/3 md:mr-20  ">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
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
            className="text-teal-400  px-6 py-2 rounded-3xl hover:bg-teal-400 hover:text-black flex border border-teal-400 mr-4 md:w-[43%] justify-center self-center md:self-start"
          >
            Download CV <FaDownload className="mt-1 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services