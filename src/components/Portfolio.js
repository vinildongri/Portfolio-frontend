import { FaExternalLinkAlt } from "react-icons/fa";

import RevealOnScroll from "../components/RevealOnScroll";

const portfolioItems = [

  {
    title: "Smart Attendance",
    description: "Smart Attendance - AI Powered Attendance Tool",
    imageUrl: "/images/smartAttendance.jpeg",
    link: "https://smart-attendance-frontend-kappa.vercel.app/"
  },

  {
    title: "NoteGet AI",
    description:
      "NoteGen AI is an advanced chatbot that summarizes PDFs, answers questions, writes stories & jokes, and offers natural conversations — all in one simple, powerful tool",
    imageUrl: "/images/noteGen.jpeg",
    link: " https://note-gen-frontend.vercel.app/ "
  },

  {
    title: "Yandu",
    description:
      "Yandu is a technology company that delivers innovative web, mobile, AI, and digital solutions, helping businesses transform ideas into scalable, high-performance products.",
    imageUrl: "/images/yandu.png",
    link: "https://www.yandu.in/"
  },

  {
    title: "Code Vector",
    description: "A scalable full-stack application for managing 200,000+ products with optimized APIs, caching, search, and database performance.",
    imageUrl: "/images/codeVector.jpeg",
    link: "https://codevector-product-frontend.vercel.app/"
  },

  {
    title: "Accredian",
    description: "Developed a premium, responsive organization portfolio website showcasing services and achievements with a Contact Us feature and optimized performance.",
    imageUrl: "/images/accerdian.jpeg",
    link: "https://accredian-en98sgtv3-vinil-dongris-projects.vercel.app/"
  },

  {
    title: "Tic Tac Toe ",
    description: "Online Tic Tac Toe. Play with computer",
    imageUrl: "/images/tic-tac-toe-cover.jpeg",
    link: "https://tic-tac-toe-three-ashen-57.vercel.app/"
  },

];

const Portfolio = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-950 transition-colors"
    >
      <RevealOnScroll y={30}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Self <span className="text-blue-500">Projects</span>
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {portfolioItems.map((item, index) => (
          <RevealOnScroll key={index} delay={index * 0.1}>
            <div className="relative group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-74 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                <h4 className="text-2xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-lg text-white mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-blue-500"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;