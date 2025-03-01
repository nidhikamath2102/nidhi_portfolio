import React, { useState } from "react";
import Title from "../components/title";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ijpiy54",
        "template_81km3w5",
        e.target,
        "ta5ownGBd8goqYrv0"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-6">
      <Title title1={"Let's Work"} title2={"Together"} />
      <form onSubmit={handleSubmit} className="w-full max-w-lg mt-8">
        <div className="mb-6">
          <label
            className="block text-gray-500 text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-500 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-500 text-sm font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
            rows="5"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-900 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow transform hover:scale-105 transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;