import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const service = import.meta.env.VITE_SERVICE_ID;
  const template = import.meta.env.VITE_TEMPLATE_ID;
  const key = import.meta.env.VITE_EMAILJS_KEY;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${service}`, `${template}`, form.current, {
        publicKey: `${key}`,
      })
      .then(
        () => {
          toast.success("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message");
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="contact-form flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white w-full md:w-1/2 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/50 transition-all"
          required
        />

        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white w-full md:w-1/2 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/50 transition-all"
          required
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white w-full md:w-1/2 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/50 transition-all"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white w-full md:w-1/2 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/50 transition-all"
          required
        />
      </div>
      <div>
        <select
          name="type"
          defaultValue=""
          className="w-full text-gray-300 p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/50 transition-all"
          required
        >
          <option value="" disabled>
            Select a Service
          </option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Database">Database Management</option>
          <option value="Full Stack">Full Stack</option>
        </select>
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Type your message here..."
          className="w-full h-32 text-white p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/50 transition-all resize-none"
          required
        />
      </div>
      <button
        className="w-full md:w-auto px-8 py-3 bg-teal-500 rounded-lg text-white font-semibold hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
        type="submit"
        value="Send"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
