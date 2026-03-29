import React from "react";
import react from "../assets/svg/react.svg";
import python from "../assets/svg/python.svg";
import html from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import js from "../assets/svg/js.svg";
import tailwind from "../assets/svg/tailwind.svg";
import postgresql from "../assets/svg/postgresql.svg";
import mysql from "../assets/svg/mysql.svg";
import mongodb from "../assets/svg/mongodb.svg";
import django from "../assets/svg/django.svg";
import node from "../assets/svg/nodejs.svg";
import flask from "../assets/svg/flask.svg";
import wordpress from "../assets/svg/wordpress.svg";

const Skills = () => {
  const skills = [
    { img: python, name: "Python" },
    { img: react, name: "React" },
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "JavaScript" },
    { img: tailwind, name: "Tailwind CSS" },
    { img: mysql, name: "MySQL" },
    { img: postgresql, name: "PostgreSQL" },
    { img: mongodb, name: "MongoDB" },
    { img: node, name: "Node.js" },
    { img: django, name: "Django" },
    { img: flask, name: "Flask" },
    { img: wordpress, name: "WordPress" },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">MY SKILLS</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-8 md:px-32">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-teal-500/20 hover:to-cyan-500/20 border border-gray-700 hover:border-teal-400 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 transform hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-16 w-auto mx-auto group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white text-center mt-3 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
