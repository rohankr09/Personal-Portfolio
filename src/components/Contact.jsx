import { CONTACT } from "../constants";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 1 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
      </div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="mt-8 flex justify-center gap-4 text-2xl"
      >
        <a
          href="https://www.linkedin.com/in/rohankumar04/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-110 hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="transition-transform duration-200 hover:scale-110 hover:text-red-500"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
