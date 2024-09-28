import React from 'react'
import backend from '../../assets/svg/backend.svg';
import frontend from '../../assets/svg/frontend.svg';
import database from '../../assets/svg/database.svg';
import api from '../../assets/svg/api.svg';

const Card = () => {
  return (
    <div className="flex-1 flex flex-wrap gap-8 mt-12#2dd4bf px-10 md:px-0 ">
      {/* Card 1 */}
      <div className="bg-gray-800 py-12 px-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:max-w-72 hover:bg-teal-500">
        <img
          src={backend}
          alt="description"
          className=" rounded-full mx-auto border border-teal-400 border-spacing-4 p-4 mb-4 h-20 w-auto"
        />
        <h3 className="text-xl font-semibold">Backend Development</h3>
        <p className="mt-2 text-gray-200">
          Handles server-side logic, databases, and application performance.
        </p>
      </div>
      {/* Card 2 */}
      <div className="bg-gray-800 py-12 px-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:max-w-72 hover:bg-teal-500">
        <img
          src={frontend}
          alt="description"
          className=" rounded-full mx-auto border border-teal-400 border-spacing-4 p-4 mb-4 h-20 w-auto"
        />
        <h3 className="text-xl font-semibold">Frontend Development</h3>
        <p className="mt-2 text-gray-200">
          Builds user-facing interfaces, ensuring responsiveness and
          interaction.
        </p>
      </div>
      {/* Card 3 */}
      <div className="bg-gray-800 py-12 px-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:max-w-72 hover:bg-teal-500">
        <img
          src={database}
          alt="description"
          className=" rounded-full mx-auto border border-teal-400 border-spacing-4 p-4 mb-4 h-20 w-auto"
        />
        <h3 className="text-xl font-semibold">Database Management</h3>
        <p className="mt-2 text-gray-200">
          Designs and manages databases for efficient data storage and
          retrieval.
        </p>
      </div>
      {/* Card 4 */}
      <div className="bg-gray-800 py-12 px-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:max-w-72 hover:bg-teal-500">
        <img
          src={api}
          alt="description"
          className=" rounded-full mx-auto border border-teal-400 border-spacing-4 p-4 mb-4 h-20 w-auto"
        />
        <h3 className="text-xl font-semibold">RESTful API</h3>
        <p className="mt-2 text-gray-200">
          Facilitates communication between frontend and backend using REST
          principles.
        </p>
      </div>
    </div>
  );
};

export default Card