import React from "react";
import Slider from "react-slick";
import warely1 from "../../assets/images/warely1.png";
import warely2 from "../../assets/images/warely2.png";
import diy from "../../assets/images/diy.png";
import diy2 from "../../assets/images/diy2.png";
import mood from "../../assets/images/mood.png";
import mood2 from "../../assets/images/mood2.png";
import air from "../../assets/images/air.png";
import air2 from "../../assets/images/air2.png";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {/* First slide - Warely */}
        <div className="p-5 md:p-20">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
            {/* Text section */}
            <div className="text-white md:w-[45%] md:pr-4">
              <h1 className="text-7xl font-bold text-gray-400 mb-6">01</h1>
              <h2 className="text-3xl font-semibold">
                Warely — Inventory Management System
              </h2>
              <p className="my-6 text-gray-400">
                A full stack inventory management platform designed to help
                wholesalers track stock levels, manage orders, and automate
                business operations in real-time.
              </p>
              <span className="text-teal-200 block mb-4">
                NestJS, PostgreSQL, React + Vite, Tailwind CSS
              </span>
              <hr className="border-teal-400 my-5" />
              <div className="flex space-x-4">
                <a
                  href="https://warely.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoArrowUpRight
                    size={45}
                    className="p-2.5 rounded-full bg-teal-500 text-white hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  />
                </a>
                <a
                  href="https://github.com/bammietop03/warely.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={45}
                    className="p-2.5 rounded-full bg-teal-500 text-white hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  />
                </a>
              </div>
            </div>

            {/* Image section */}
            <div className="flex flex-col gap-3 py-7 md:w-[45%]">
              <img
                src={warely1}
                alt="Warely Dashboard"
                className="w-full h-auto rounded-lg"
              />
              <img
                src={warely2}
                alt="Warely Inventory"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Second slide - DIY */}
        <div className="p-5 md:p-20">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
            {/* Text section */}
            <div className="text-white md:w-[45%] md:pr-4">
              <h1 className="text-7xl font-bold text-gray-400 mb-6">02</h1>
              <h2 className="text-3xl font-semibold">DIY Creative Display</h2>
              <p className="my-6 text-gray-400">
                A web application where users can showcase their do-it-yourself
                (DIY) projects. Whether it's Home decor, Crafts, Art and Design
                or any other creative endeavor
              </p>
              <span className="text-teal-200 block mb-4">
                Next.js, Flask, PostgreSQL, Tailwind CSS
              </span>
              <hr className="border-teal-400 my-5" />
              <div className="flex space-x-4">
                <a
                  href="https://diy-creative-display.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoArrowUpRight
                    size={45}
                    className="p-2.5 rounded-full bg-teal-500 text-white hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  />
                </a>
                <a
                  href="https://github.com/bammietop03/DIY_Creative_Display"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={45}
                    className="p-2.5 rounded-full bg-teal-500 text-white hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  />
                </a>
              </div>
            </div>

            {/* Image section */}
            <div className="flex flex-col gap-3 py-7 md:w-[45%]">
              <img
                src={diy}
                alt="Image 1"
                className="w-full h-auto  rounded-lg"
              />
              <img
                src={diy2}
                alt="Image 1"
                className="w-full h-auto  rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Third Slide - MoodScribe */}
        <div className="p-5 md:p-20">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
            {/* Text section */}
            <div className="text-white md:w-[45%] md:pr-4">
              <h1 className="text-7xl font-bold text-gray-400 mb-6">03</h1>
              <h2 className="text-3xl font-semibold">MoodScribe</h2>
              <p className="my-6 text-gray-400">
                MoodScribe is a user-friendly mental health journaling
                application designed to help individuals track their moods,
                reflect on their daily experiences, and gain insights into their
                emotional well-being
              </p>
              <span className="text-teal-200 block mb-4">
                Node.js (Express), MongoDB, React, Tailwind CSS
              </span>
              <hr className="border-teal-400 my-5" />
              <div className="flex space-x-4">
                <a
                  href="https://moodscribe.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoArrowUpRight
                    size={45}
                    className="p-2.5 rounded-full bg-teal-500 text-white hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  />
                </a>
                <a
                  href="https://github.com/bammietop03/MoodScribe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={45}
                    className="p-2.5 rounded-full bg-teal-500 text-white hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  />
                </a>
              </div>
            </div>

            {/* Image section */}
            <div className="flex flex-col gap-3 py-7 md:w-[45%]">
              <img
                src={mood}
                alt="Image 1"
                className="w-full h-auto object-cover rounded-lg"
              />
              <img
                src={mood2}
                alt="Image 1"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Fourth slide - AIRBNB Clone */}
        <div className="p-5 md:p-20">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
            {/* Text section */}
            <div className="text-white md:w-[45%] md:pr-4">
              <h1 className="text-7xl font-bold text-gray-400 mb-6">04</h1>
              <h2 className="text-3xl font-semibold">AIRBNB Clone</h2>
              <p className="my-6 text-gray-400">
                A web application that replicates few functionalities of Airbnb
              </p>
              <span className="text-teal-200 block mb-4">
                Flask, MySQL, HTML, CSS, JavaScript
              </span>
              <hr className="border-teal-400 my-5" />
              <div className="flex space-x-4">
                <a href="#porfolio">
                  <GoArrowUpRight
                    size={45}
                    className="p-2.5 rounded-full bg-teal-500 text-white hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  />
                </a>
                <a
                  href="https://github.com/bammietop03/AirBnB_clone_v4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={45}
                    className="p-2.5 rounded-full bg-teal-500 text-white hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  />
                </a>
              </div>
            </div>

            {/* Image section */}
            <div className="flex flex-col gap-1 py-7 md:w-[45%]">
              <img
                src={air}
                alt="Image 1"
                className="w-full h-auto object-cover rounded-lg"
              />
              <img
                src={air2}
                alt="Image 1"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
