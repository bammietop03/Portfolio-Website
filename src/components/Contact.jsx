import React from 'react'
import ContactForm from './helper/Form'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <section id='contact' className="bg-gray-900">
      <div className="flex flex-col-reverse md:flex-row justify-center text-white mx-auto max-w-7xl py-20 md:py-0 md:pb-20 px-5 md:px-0">
        {/* left Item */}
        <div className="md:w-1/2 bg-gray-800 rounded-md py-14 px-6 md:px-12">
          <h1 className="text-4xl font-bold text-teal-400">
            Let's work together
          </h1>
          <p className="text-gray-400 my-6 text-sm">
            It all starts with a conversation. Share your project with me, and
            let’s make it something unforgettable.
          </p>
          <ContactForm />
        </div>
        {/* right Item */}
        <div className="md:w-1/2  flex flex-col gap-8 justify-center items-start p-10 md:p-0 md:pl-28">
          <div className="flex gap-4">
            <div>
              <FaPhoneAlt
                size={60}
                color="#2dd4bf"
                className="p-4 bg-gray-800 rounded-md"
              />
            </div>
            <div className="flex flex-col  justify-center">
              <h2 className="text-gray-500 text-sm font-semibold">Phone</h2>
              <p className="text-white">+234 816 787 4968</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <FaEnvelope
                size={60}
                color="#2dd4bf"
                className="p-4 bg-gray-800 rounded-md"
              />
            </div>
            <div className="flex flex-col  justify-center">
              <h2 className="text-gray-500 text-sm font-semibold">Email</h2>
              <p className="text-white">Bamiwoadebayo3@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <FaMapMarkerAlt
                size={60}
                color="#2dd4bf"
                className="p-4 bg-gray-800 rounded-md"
              />
            </div>
            <div className="flex flex-col  justify-center">
              <h2 className="text-gray-500 text-sm font-semibold">Address</h2>
              <p className="text-white text-sm">
                Olorunda Zone 9 Lane 1, Adebayo, Ado Ekiti, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact