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
      <div className="flex gap-3">
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          className="p-2 bg-gray-900 rounded-md text-white w-1/2"
          required
        />

        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          className="p-2 bg-gray-900 rounded-md text-white w-1/2"
          required
        />
      </div>
      <div className="flex gap-3">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="p-2 bg-gray-900 rounded-md text-white pl-3 w-1/2"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          className="p-2 bg-gray-900 rounded-md text-white pl-3 w-1/2"
          required
        />
      </div>
      <div>
        <select
          name="type"
          defaultValue=""
          className="w-full text-gray-400 p-2 bg-gray-900 rounded-md pl-3"
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
          className="w-full h-28 text-white p-2 bg-gray-900 rounded-md"
          required
        />
      </div>
      <button
        className="md:w-[30%] w-[40%] bg-teal-400 rounded-md p-2 text-gray-900"
        type="submit"
        value="Send"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
