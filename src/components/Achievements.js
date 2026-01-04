import { motion } from "framer-motion";
import { details, title } from "framer-motion/client";
import { FaAward } from "react-icons/fa";

const achievements = [
   {
    title: "Mind Marathon",
    detail: "Secured First Place",
    highlight: "Led the team to victory",
    link: "/images/mindMarathon.png"
  },
  // {
  //   title: "LeetCode",
  //   detail: "Rating: 2046",
  //   highlight: "Best Global Rank: 221",
  //   link: "https://leetcode.com/u/DongriVinil/"
  // },
  {
    title: "GeeksforGeeks",
    detail: "Rating: 506",
    highlight: "Institute Rank: 2",
    link: "https://www.geeksforgeeks.org/profile/dongrivinil?from=explore&tab=activity"
  },
   {
    title: "SkillsBuild-Customer Engagement",
    detail: "",
    // detail: "Communication and Personality Dynamics",
    highlight: "Issued by: IBM SkillsBuild, Issued on: Mar 27, 2025",
    link: "/IBMDesign.pdf"
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <a
              href={ach.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={cardVariants}
                className="group p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaAward className="text-yellow-500 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{ach.title}</h3>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{ach.detail}</p>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {ach.highlight}
                </p>
              </motion.div>
            </a>

          ))}
        </div>
      </div>
    </section>
  );
}