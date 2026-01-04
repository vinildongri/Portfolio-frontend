import { Download } from "lucide-react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Fullstack Developer",
        "Android Developer",
        "Backend Developer",
        "Frontend Developer",
        "Competitive programmer",
        "Content Creater"
      ],
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-[10%] py-20 bg-white dark:bg-gray-900 transition-colors min-h-screen"
    >
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5, once: false }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Hi, I'm
        </h1>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500">
          Dongri Vinil
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300">
          I specialize in building modern, beautiful,{" "}
          <span className="text-blue-500"> Efficient</span>,{" "}
          <span className="text-blue-500"> Scalable</span>, and fully responsive web and mobile applications. 
          {/* and responsive web applications. */}
        </p>

        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200">
          I'm a <span className="text-blue-500" ref={typedRef}></span>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 text-2xl text-gray-600 dark:text-gray-300">
          <a href="https://www.linkedin.com/in/dongri-vinil-ba3bb5376/" className="hover:text-blue-700">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://x.com/vinildongri" className="hover:text-blue-400">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://github.com/vinildongri" className="hover:text-blue-400">
            <i className="bx bxl-github"></i>{" "}
          </a>
          {/* <a href="#" className="hover:text-blue-600"><i className='bx bxl-facebook'></i></a>
          <a href="#" className="hover:text-pink-500"><i className='bx bxl-instagram'></i></a>
          <a href="#" className="hover:text-red-600"><i className='bx bxl-youtube'></i></a> */}
        </div>

        {/* CV Button */}
        <a
          href="/resume.pdf"
          className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition"
          download
        >
          <Download className="mr-2" size={18} /> Download CV
        </a>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/vinil.png"
          alt="Dongri Vinil"
          className="w-60 h-60 sm:w-72 sm:h-72 object-cover rounded-full border-4 border-blue-300 shadow-lg animate-float"
        />
      </motion.div>
    </section>
  );
};

export default Home;