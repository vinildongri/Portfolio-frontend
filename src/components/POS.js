import { motion } from "framer-motion";
import { img } from "framer-motion/client";
import { MdOutlineWorkOutline } from "react-icons/md";

const responsibilities = [
  {
    title: "Team Lead",
    org: "Gen AI Exchange Hackathon",
    period: "2025",
    details: [
      "Led a team in the Google Cloud Gen AI Exchange Hackathon and developed NoteGen AI, an intelligent PDF summarization and chat assistant powered by the Gemini API.",
      "Designed and built the complete system architecture, writing the backend in JavaScript (Node.js & Express) and developing the frontend using React, Bootstrap, and CSS.",
      "Guided the team through planning, development, debugging, and final prototype submission.",
      "Delivered a fully functional AI tool capable of PDF upload, summarization, chat interactions, and real-time responses.",
      "Recognized by organizers for innovation, effort, and strong technical execution throughout the hackathon.",
      "Gained hands-on experience in Generative AI integration, project leadership, and rapid prototyping within a competitive environment."
    ]
  },
  {
    title: "Team Lead",
    org: "Mind Marathon (Quiz Competition) AVN Institute of Engineering & Technology",
    period: "November - 2024",
    details: [
      "Led a team in the Mind Marathon quiz competition organized by the Department of Data Science & AI&DS.",
      "Guided the team through preparation, strategy, and on-spot problem-solving during the event.",
      "Achieved First Place, demonstrating strong leadership, teamwork, and quick analytical thinking.",
      "Recognized by the department for outstanding performance, enthusiasm, and dedication.",
    ],
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

export default function POS() {
  return (
    <section id="responsibility" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Positions of Responsibility
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {responsibilities.map((res, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={cardVariants}
              className="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <MdOutlineWorkOutline className="text-blue-500 text-xl" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{res.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                <span className="font-medium">{res.org}</span> — {res.period}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                {res.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}