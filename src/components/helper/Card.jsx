import React from "react";
import backend from "../../assets/svg/backend.svg";
import frontend from "../../assets/svg/frontend.svg";
import database from "../../assets/svg/database.svg";
import api from "../../assets/svg/api.svg";

const Card = () => {
  const services = [
    {
      icon: backend,
      title: "Backend Development",
      description:
        "Handles server-side logic, databases, and application performance.",
    },
    {
      icon: frontend,
      title: "Frontend Development",
      description:
        "Builds user-facing interfaces, ensuring responsiveness and interaction.",
    },
    {
      icon: database,
      title: "Database Management",
      description:
        "Designs and manages databases for efficient data storage and retrieval.",
    },
    {
      icon: api,
      title: "RESTful API",
      description:
        "Facilitates communication between frontend and backend using REST principles.",
    },
  ];

  return (
    <div className="flex-1 flex flex-wrap gap-8 mt-12 px-10 md:px-0">
      {services.map((service, index) => (
        <div
          key={index}
          className="group bg-gradient-to-br from-gray-800 to-gray-900 py-12 px-6 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 w-full md:max-w-72 border border-gray-700 hover:border-teal-400 hover:scale-105 cursor-pointer"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-teal-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img
              src={service.icon}
              alt={service.title}
              className="rounded-full mx-auto border-2 border-teal-400 p-4 mb-4 h-20 w-auto relative z-10 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="mt-3 text-gray-300 leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
