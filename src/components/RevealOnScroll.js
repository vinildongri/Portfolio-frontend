import { motion } from "framer-motion";

const RevealOnScroll = ({ children, delay = 0, duration = 0.8, y = 50 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ amount: 0.5, once: false }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;