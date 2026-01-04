import { useState } from "react";

import emailjs from "@emailjs/browser";

import RevealOnScroll from "../components/RevealOnScroll"; // adjust path if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: ""
  });

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publickey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const templateParams = {
    from_name: formData.fullName,
    from_email: formData.email,
    mobile: formData.mobile,
    subject: formData.subject,
    message: formData.message
  };

  emailjs
    .send(
      serviceId,     // eg: service_xxxxxx
      templateId,    // eg: template_xxxxxx
      templateParams,
      publickey      // eg: xxxxxxxxxxxxxx
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitted(true);

        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          subject: "",
          message: ""
        });
      },
      (error) => {
        console.error("FAILED...", error);
      }
    );
};


  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors"
    >
      <RevealOnScroll y={30}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Contact <span className="text-blue-500">Me!</span>
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2} y={30}>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="input-box">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="input-box">
              <input
                type="number"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </div>

          {isSubmitted && (
            <div className="mt-6 text-center text-green-500">
              <p>Thank you for your message! I will get back to you soon.</p>
            </div>
          )}
        </form>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;