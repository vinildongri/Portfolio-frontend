import { FaCode, FaPaintBrush, FaPencilAlt } from "react-icons/fa";

import RevealOnScroll from "./RevealOnScroll"; // Adjust path as needed

const services = [
  {
    icon: <FaCode className="text-4xl text-blue-500" />,
    title: "Web Development",
    description: "I have created a Website called MGV ARTWORKS to sell my artworks."
  },
  {
    icon: <FaPaintBrush className="text-4xl text-blue-500" />,
    title: "Graphic Design",
    description: "I have designed many Logos. Both for personal websites and for clients."
  },
  {
    icon: <FaPencilAlt className="text-4xl text-blue-500" />,
    title: "Sketching",
    description: "I do pencil portrait sketching, oil-pastel artworks, etc."
  }
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors"
    >
      <RevealOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Our <span className="text-blue-500">Services</span>
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <RevealOnScroll key={index} delay={index * 0.1}>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <a href="#" className="text-blue-500 hover:underline font-semibold">
                Read More
              </a>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Services;