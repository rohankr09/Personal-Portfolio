import profilePic from "../assets/rohanprofile.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/2 lg:pr-8 lg:pl-10">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl font-thin tracking-tight lg:text-7xl"
            >
              Rohan Kumar
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent lg:text-4xl"
            >
              <Typewriter
                words={[
                  "Software Engineer",
                  "Frontend Developer",
                  "Android Developer",
                  "Tech Enthusiast",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </motion.span>

            <a
              href="https://drive.google.com/file/d/1PEXowUU6AjgQowky_iqAdypaGscTASEK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg hover:from-purple-500 hover:to-pink-300 transform hover:scale-105 transition duration-300 ease-in-out mb-6 lg:mb-0">
                Check Resume
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-10 lg:mt-[-20px]">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Profile"
            className="max-w-full h-auto lg:max-w-md lg:max-h-96 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
