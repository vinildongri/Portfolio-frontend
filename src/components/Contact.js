import { useState } from "react";
import RevealOnScroll from "../components/RevealOnScroll";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            mobile: formData.mobile,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success(data.message || "Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Server error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors"
    >
      {/* ✅ REVERTED: theme="dark" (Previous color)
          ✅ KEPT: position="top-center" (MNC Style) */}
      <ToastContainer position="top-center" theme="dark" autoClose={3000} />

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
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
            />

            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white mb-6"
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-blue-500 text-white px-6 py-3 rounded-lg text-xl transition-all 
                ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;