import htmlImg from "../assets/techicons/html.png"; // HTML
import cssImg from "../assets/techicons/css.png"; // CSS
import javascriptImg from "../assets/techicons/javascript.png"; // JavaScript
import reactImg from "../assets/techicons/reactjs.png"; // ReactJS
import tailwindImg from "../assets/techicons/tailwind.png"; // Tailwind CSS
import nodejsImg from "../assets/techicons/nodejs.png"; // Node.js
import pythonImg from "../assets/techicons/python.png"; // Python
import mongodbImg from "../assets/techicons/mongodb.png"; // MongoDB
import firebaseImg from "../assets/techicons/firebase.png"; // Firebase
import kotlinImg from "../assets/techicons/kotlin.png"; // Kotlin
import flutterImg from "../assets/techicons/flutter.png"; // Flutter
import mysqlImg from "../assets/techicons/mysql.png"; // MySQL
import gcpImg from "../assets/techicons/gcp.png"; // Google Cloud Platform
import gitImg from "../assets/techicons/git.png"; // Git
import jupyterImg from "../assets/techicons/jupyter.png"; // Jupyter
import condaImg from "../assets/techicons/conda.png"; // Conda

import { motion } from "framer-motion";

const variants = {
  upDown: (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }),
  leftRight: (duration) => ({
    initial: { x: -10 },
    animate: {
      x: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }),
  rotate: (duration) => ({
    initial: { rotate: 0 },
    animate: {
      rotate: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }),
};

const Technologies = () => {
  const techStack = [
    {
      src: htmlImg,
      alt: "HTML5",
      name: "HTML5",
      variant: "upDown",
      duration: 2,
    },
    {
      src: cssImg,
      alt: "CSS3",
      name: "CSS3",
      variant: "leftRight",
      duration: 2.5,
    },
    {
      src: javascriptImg,
      alt: "JavaScript",
      name: "JavaScript",
      variant: "rotate",
      duration: 3,
    },
    {
      src: reactImg,
      alt: "ReactJS",
      name: "ReactJS",
      variant: "upDown",
      duration: 2.2,
    },
    {
      src: tailwindImg,
      alt: "Tailwind CSS",
      name: "Tailwind CSS",
      variant: "leftRight",
      duration: 2.8,
    },
    {
      src: nodejsImg,
      alt: "Node.js",
      name: "Node.js",
      variant: "rotate",
      duration: 2.1,
    },
    {
      src: pythonImg,
      alt: "Python",
      name: "Python",
      variant: "upDown",
      duration: 2.4,
    },
    {
      src: mongodbImg,
      alt: "MongoDB",
      name: "MongoDB",
      variant: "leftRight",
      duration: 2.9,
    },
    {
      src: firebaseImg,
      alt: "Firebase",
      name: "Firebase",
      variant: "rotate",
      duration: 3.2,
    },
    {
      src: kotlinImg,
      alt: "Kotlin",
      name: "Kotlin",
      variant: "upDown",
      duration: 2.3,
    },
    {
      src: flutterImg,
      alt: "Flutter",
      name: "Flutter",
      variant: "leftRight",
      duration: 2.7,
    },
    {
      src: mysqlImg,
      alt: "MySQL",
      name: "MySQL",
      variant: "rotate",
      duration: 3.1,
    },
    {
      src: gcpImg,
      alt: "Google Cloud Platform",
      name: "GCP",
      variant: "upDown",
      duration: 2.5,
    },
    {
      src: gitImg,
      alt: "Git",
      name: "Git",
      variant: "leftRight",
      duration: 2.6,
    },
    {
      src: jupyterImg,
      alt: "Jupyter",
      name: "Jupyter",
      variant: "upDown",
      duration: 2.2,
    },
    {
      src: condaImg,
      alt: "conda",
      name: "Conda",
      variant: "leftRight",
      duration: 2.4,
    },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Tech Stack
      </motion.h2>
      <motion.h4
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.8 }}
        className="my-10 text-center text-xl"
      >
        Technologies that I have used in my projects
      </motion.h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={variants[tech.variant](tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-500 p-4 relative flex items-center justify-center overflow-hidden"
          >
            <img
              src={tech.src}
              alt={tech.alt}
              className="w-20 h-20 object-contain transition-transform duration-200 ease-in-out hover:scale-110"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-gray-500 text-white text-center text-sm p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
