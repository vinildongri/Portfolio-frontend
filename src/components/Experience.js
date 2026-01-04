import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experienceData = [
  {
    company: "Datanova",
    role: "Senior Full Stack Developer",
    location: "Ahmedabad",
    duration: "March 2025 - Present",
    projects: [
      {
        name: "Mentra",
        points: [
          "Developed and optimized features for mentra.com.",
          "Enabled seamless collaboration between recruiters and job seekers."
        ],
        tech: ["GraphQL", "Prisma", "Stytch", "PostgreSQL"]
      }
    ]
  },
  {
    company: "Jithvar Consultancy Services",
    role: "SDE - I",
    location: "Lucknow",
    duration: "March 2024 - March 2025",
    projects: [
      {
        name: "WABAIS (Whatsapp Business Integration)",
        points: [
          "Built frontend and backend for WhatsApp Business platform.",
          "Implemented bulk contact management, scheduled messages, and real-time messaging.",
          "Enabled templates CRUD, canned replies, images/videos/docs support.",
          "Built subscription plans, invoicing, and multi-level authentication.",
          "Integrated Razorpay gateway and visual analytics using charts.",
          "System supports 0.5M+ messages/day.",
          "Resulted in 2x revenue growth and 100+ active clients."
        ],
        tech: [
          "React.js",
          "Redux",
          "Node.js",
          "Express.js",
          "MongoDB",
          "WebSockets",
          "AWS-S3",
          "Redis",
          "Message Queues",
          "Javascript"
        ]
      },
      {
        name: "Raftaar News",
        points: [
          "Developed full-stack news portal (Raftaar.in).",
          "Implemented infinite scroll, lazy loading, caching, and AMP stories.",
          "Enabled social embeds (YouTube, Twitter, Instagram) and Excel export.",
          "Built drag & drop UI and auto-share to social platforms.",
          "Integrated Google/MGID Ads boosting revenue by 70%.",
          "Implemented SEO metadata, SSR, and sitemaps for 90% visibility boost.",
          "Portal handles 40k daily traffic and 0.5M search impressions.",
          "Resulted in 2x company revenue and 60% increase in user traffic."
        ],
        tech: ["Next.js", "Node.js", "MongoDB", "Redis", "AWS-S3", "TypeScript"]
      }
    ]
  },
  {
    company: "Cogoport",
    role: "SDE - I",
    location: "Mumbai",
    duration: "July 2023 - Dec 2023",
    projects: [
      {
        name: "Freight Systems",
        points: [
          "Built RFQ (Request for Quotation), Contracts, and Shipment Planner.",
          "Implemented FCL Local Freight as standalone module.",
          "Created recommendation system for predicting booking data.",
          "Built automated email flow for eSign based on subscription plans.",
          "Led to 10% increase in engagement and revenue."
        ],
        tech: ["React", "Ruby on Rails", "PostgreSQL"]
      }
    ]
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaBriefcase className="text-blue-600 dark:text-blue-400 text-xl" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {exp.company} — <span className="text-lg font-normal">{exp.role}</span>
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {exp.location} | {exp.duration}
              </p>

              <div className="space-y-6">
                {exp.projects.map((project, i) => (
                  <div key={i} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {project.name}
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                      {project.points.map((point, pIdx) => (
                        <li key={pIdx}>{point}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 