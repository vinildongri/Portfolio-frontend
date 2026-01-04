import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-950 transition-colors"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5, once: false }}
        >
          <img
            src="/vinil.png"
            alt="Dongri Vinil"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-xl border-4 border-blue-300"
          />
        </motion.div>

        {/* Right Section - Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5, once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Fullstack & Android Developer
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm an innovative software developer, specializing in scalable and user-friendly web
            applications and Android apps. I focus on delivering premium
            features aligned with client and user needs. My commitment to excellence is seen in
            meticulous code reviews, rigorous testing, and thorough debugging, ensuring top-tier
            performance and reliability. With an unwavering passion for web development, I'm
            self-motivated to expand my skills, upholding the company's mission through exceptional
            work. I thrive on crafting cutting-edge solutions that contribute to the organization's
            success and growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;