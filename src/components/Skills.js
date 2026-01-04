import { motion } from "framer-motion";
import { title } from "framer-motion/client";
import { FaCode, FaTools, FaServer, FaDatabase, FaAppStore, FaAndroid } from "react-icons/fa";

const skillsData = [
  {
    icon: <FaCode className="text-blue-500 text-2xl" />,
    title: "Programming Languages",
    skills: ["C++", "JavaScript", "C", "Java (Novice)", "Python (Novice)"]
  },
  {
    icon: <FaTools className="text-green-500 text-2xl" />,
    title: "Core Skills",
    skills: ["DSA", "OOPs", "DBMS", "Operating Systems", "Computer Networks"]
  },
  {
    icon: <FaServer className="text-purple-500 text-2xl" />,
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "Redux",
      // "Ruby on Rails",
      "WebSockets",
      "AWS",
      // "Redis",
      // "Message Queues",
      // "Kafka",
      // "WebRTC",
      // "Graphql",
      // "Prisma",
      "Git",
      "GitHub",
      "RESTful API",
      "Java",
      // "Springboot",
      "MERN",
      "Docker"
    ]
  },
  {
    icon: <FaAndroid className="text-red-500 text-2xl" />,
    title: "App Development",
    skills: [
      "Kotlin",
      "Java(Novice)"
    ]
  },
  {
    icon: <FaDatabase className="text-red-500 text-2xl" />,
    title: "Databases & Tools",
    skills: [
      "MongoDB",
      // "MySQL",
      // "PostgreSQL"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 * i }
  })
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Skills
        </motion.h2>

        <div className="space-y-12">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              custom={idx}
              viewport={{ once: false }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="border border-gray-300 dark:border-gray-700 rounded-xl p-3 text-center text-sm font-medium text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-md"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}