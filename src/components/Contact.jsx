import React from "react";
import ContactForm from "./helper/Form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center text-white mx-auto max-w-7xl py-20 px-5 md:px-0 relative z-10 gap-8">
        {/* left Item */}
        <div className="md:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl py-14 px-6 md:px-12 border border-gray-700 shadow-2xl">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Let's work together
          </h1>
          <p className="text-gray-400 my-6 text-lg">
            It all starts with a conversation. Share your project with me, and
            let’s make it something unforgettable.
          </p>
          <ContactForm />
        </div>
        {/* right Item */}
        <div className="md:w-1/2 flex flex-col gap-8 justify-center items-start py-10 md:p-0 md:pl-28">
          <div className="group flex gap-4 hover:transform hover:scale-105 transition-all duration-300">
            <div>
              <FaPhoneAlt
                size={60}
                className="p-4 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-xl group-hover:shadow-lg group-hover:shadow-teal-500/50"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-gray-400 text-sm font-semibold">Phone</h2>
              <p className="text-white font-medium">+234 816 787 4968</p>
            </div>
          </div>
          <div className="group flex gap-4 hover:transform hover:scale-105 transition-all duration-300">
            <div>
              <FaEnvelope
                size={60}
                className="p-4 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-xl group-hover:shadow-lg group-hover:shadow-teal-500/50"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-gray-400 text-sm font-semibold">Email</h2>
              <p className="text-white font-medium">Bamiwoadebayo3@gmail.com</p>
            </div>
          </div>
          <div className="group flex gap-4 hover:transform hover:scale-105 transition-all duration-300">
            <div>
              <FaMapMarkerAlt
                size={60}
                className="p-4 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-xl group-hover:shadow-lg group-hover:shadow-teal-500/50"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-gray-400 text-sm font-semibold">Address</h2>
              <p className="text-white text-sm font-medium">
                Olorunda Zone 9 Lane 1, Adebayo, Ado Ekiti, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
