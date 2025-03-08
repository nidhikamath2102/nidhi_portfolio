import React, { useState } from "react";
import Title from "../components/title";
import emailjs from "emailjs-com";

import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/call.png";
import locationIcon from "../assets/location.png";

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
      <div className="w-full max-w-4xl mt-8 flex flex-col lg:flex-row">
        <div className="w-full max-w-lg mt-8 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-white font-semibold mb-6 animate-bounce">Get in touch with me!</h2>
          <div className="flex items-center text-white mb-8 mt-8">
            <img src={emailIcon} alt="Email" className="mr-4 h-10 w-10" />
            <span className="text-sm lg:text-2xl text-gray-400">nidhigovindrayak@gmail.com</span>
          </div>
          <div className="flex items-center text-white mb-8">
            <img src={phoneIcon} alt="Phone" className="mr-4 h-10 w-10" />
            <span className="text-sm lg:text-2xl text-gray-400">+15712440881</span>
          </div>
          <div className="flex items-center text-white mb-8">
            <img src={locationIcon} alt="Location" className="mr-4 h-10 w-10" />
            <span className="text-sm lg:text-2xl text-gray-400">Falls Church, Virginia</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mt-8">
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-semibold mb-2"
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
              className="w-full px-4 py-3 border-4 border-purple-800 rounded-lg focus:outline-none focus:border-blue-400 transition duration-200"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-4 border-purple-800 rounded-lg focus:outline-none focus:border-blue-400 transition duration-200"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border-4 border-purple-800 rounded-lg focus:outline-none focus:border-blue-400 transition duration-200"
              rows="5"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-800 via-pink-800 to-red-900 hover:from-red-900 hover:via-pink-800 hover:to-purple-800 text-white font-semibold py-2 px-6 rounded-lg shadow transform hover:scale-105 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;