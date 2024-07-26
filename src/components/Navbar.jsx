import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-4 w-auto h-auto max-w-full max-h-9"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/rohankumar04/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-110 hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rohankr09"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-110 hover:text-gray-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/i.rohan.kumar"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-110 hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:prohanskumar@gmail.com"
          className="transition-transform duration-200 hover:scale-110 hover:text-red-500"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
