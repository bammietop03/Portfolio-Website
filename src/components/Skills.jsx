import React from 'react'
import react from '../assets/svg/react.svg'
import python from '../assets/svg/python.svg'
import html from '../assets/svg/html.svg'
import css from '../assets/svg/css.svg'
import js from '../assets/svg/js.svg'
import tailwind from '../assets/svg/tailwind.svg'
import postgresql from '../assets/svg/postgresql.svg'
import mysql from '../assets/svg/mysql.svg'
import mongodb from '../assets/svg/mongodb.svg'
import django from '../assets/svg/django.svg'
import node from '../assets/svg/nodejs.svg'
import flask from '../assets/svg/flask.svg'
import wordpress from '../assets/svg/wordpress.svg'

const Skills = () => {
  return (
    <section id='skills' className="bg-gray-900">
      <div className="py-20">
        <h2 className="text-xl font-bold text-white text-center pb-14">
          MY SKILLS
        </h2>
        <div className="flex flex-wrap justify-center gap-5 md:gap-x-32 md:gap-y-14 md:px-32">
          <img
            src={python}
            alt="React"
            className="p-8 rounded-md bg-gray-800 h-28 hover:bg-teal-500"
          />
          <img
            src={react}
            alt="React"
            className="p-8 rounded-md bg-gray-800 h-28 hover:bg-teal-500"
          />
          <img
            src={html}
            alt="React"
            className="p-8 rounded-md bg-gray-800 h-28 hover:bg-teal-500"
          />
          <img
            src={css}
            alt="React"
            className="p-8 rounded-md bg-gray-800 h-28 hover:bg-teal-500"
          />
          <img
            src={js}
            alt="React"
            className="p-8 rounded-md bg-gray-800 h-28 hover:bg-teal-500"
          />
          <img
            src={tailwind}
            alt="React"
            className="p-8 rounded-md bg-gray-800 h-28 hover:bg-teal-500"
          />
          <img
            src={mysql}
            alt="React"
            className="p-8 rounded-md bg-gray-800 h-28 hover:bg-teal-500"
          />
          <img
            src={postgresql}
            alt="React"
            className="p-8 rounded-md bg-gray-800 h-28 hover:bg-teal-500"
          />
          <img
            src={mongodb}
            alt="React"
            className="p-8 rounded-md bg-gray-800 h-28 hover:bg-teal-500"
          />
          <img
            src={node}
            alt="React"
            className="p-8 rounded-md bg-gray-800 h-28 hover:bg-teal-500"
          />
          <img
            src={django}
            alt="React"
            className="p-8 rounded-md bg-gray-800 h-28 hover:bg-teal-500"
          />
          <img
            src={flask}
            alt="React"
            className="p-8 rounded-md bg-gray-800 h-28 hover:bg-teal-500"
          />
          <img
            src={wordpress}
            alt="React"
            className="p-8 rounded-md bg-gray-800 h-28 hover:bg-teal-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills