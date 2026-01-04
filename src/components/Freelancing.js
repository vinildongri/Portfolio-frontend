import React from "react";
import {delay, motion} from "framer-motion";
// import { details, symbol, title } from "framer-motion/client";
import { FaAndroid, FaCode,  FaEnvelope,  FaInbox,  FaPaperPlane,  FaServer, FaVoicemail, } from "react-icons/fa";
import {  FaMessage, FaShield, FaVolcano } from "react-icons/fa6";

const services = [
    {
        icon:<FaCode className="text-blue-800"/>,
        title:"Frontend Development",
        details:"React, Next.js, responsive UI, animations"
    },
    {
        icon: <FaServer className="text-green-500 dark:text-green-200"/>,
        title:"Backend & APIs",
        details:"Node.js, MongoDB, REST APIs, authentication"
    },
    {
        icon:<FaAndroid className="text-red-400"/>,
        title:"Android Development",
        details:"Kotlin, clean architecture, smooth performance"
    },
    {
        icon:<FaShield className="dark:text-green-500 text-emerald-600"/>,
        title:"Optimization & Security",
        details:"Bug fixes, performance tuning, basic security"
    }
];

const cardVariants = {
    hidden: { opacity: 0, y:30},
    visible: (i) => ({
        opacity: 1, y: 0,
        transition:{
            delay: i * 0.1,
            duration: 0.5
        }
    })
};

const Freelancing = () => {
  return (
    <section
      id="freelancing"
      className="flex py-16 flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-white dark:bg-gray-900 transition-colors min-h-screen"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity:0, y:-30}}
        whileInView={{ opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once:false}}
      >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-500 w-full dark:text-white mb-6 md:mb-10">
        Freelance Full-Stack & Android Developer
      </h1>
      </motion.h1>

      {/* Paragraph */}
      <motion.div
      initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6}}
      viewport={{once:false}}
      >
      <p className="text md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-4xl">
        I help businesses and individuals build fast, secure, and scalable web and Android applications. 
        From idea to deployment, I focus on solving real problems with reliable, high-quality solutions.
      </p>
      </motion.div>
      
      {/* two buttons */}
      <motion.button
      initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6}}
      viewport={{once:false}}
      >
      <div className="flex mt-8 dark-black-800 dark:text-white">
        <button className="flex rounded-lg mr-8 ring-1 p-3 px-8 hover:scale-105 transition-all duriation-300">
          <a href="#contact">
            Hire Me
          </a>
        </button>
        <button className=" ring-1 p-3 rounded-lg px-5 hover:scale-105 transition-all duriation-300">
          <a href="#projects">
            View Work
          </a>
        </button>
      </div>
      </motion.button>

      {/* service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 dark:text-white">
        {services.map((ser, i) => (
            <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{once:false}}
                className="group items-center p-5 gap-3 border rounded-xl shadow"
            >
                <div className="flex justify-center ">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{ser.icon}</h3> 
                </div> 
                <div className="px-5 mt-2 font-bold text-xl">
                    <h3 className="dark:text-blue-500">{ser.title}</h3>
                </div>
                <p className="px-5 mt-2">{ser.details}</p>
            </motion.div>
        ))}
      </div>

      <p className="mt-8 text-xl text-gray-500">Results-driven development, transparent communication, and dependable delivery.</p>
      
      <motion.div
        initial={{ opacity:0, y:30}}
        whileInView={{ opacity:1, y:0}}
        viewport={{ once:false }}
        transition={{duration:0.6}}
      >
      <div className=" border rounded-xl p-5 mt-8 shadow ">
        <h3 className="text-blue-700 font-bold justify-center text-center text-xl ">
          Have a project in mind?
        </h3>
        <p className="dark:text-white text-center">Let’s discuss and build something great together.</p>
        <div className="text-center flex justify-center items-center mt-5">
          <button className="text-white flex justify-center items-center border px-2 p-2 rounded-md bg-blue-600 hover-shadow-lg transition-all duration-300 hover:scale-105"> 
            <a href="#contact" className="flex justify-center items-center">
              <FaEnvelope className="mr-2"/> 
              Contact Me
            </a>
          </button>
        </div>
      </div>
      </motion.div>

    </section>
  );
};

export default Freelancing;
