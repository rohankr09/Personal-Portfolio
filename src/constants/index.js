import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const ABOUT_TEXT = `I’m a recent Computer Science graduate with a strong passion for technology and innovation. Ever since I was a kid, I was fascinated by computers and viewed them as magical tools. My curiosity drove me to explore new and exciting aspects of technology, which ultimately guided me towards a career in this field.
I’ve developed skills in Data Structures and Algorithms, HTML, CSS, JavaScript, Tailwind CSS, ReactJS, MySql & GCP. My enthusiasm for Android Development has led me to work with Kotlin and Flutter, enabling me to create impactful mobile applications. Although I'm also keen on learning machine learning and has developed some projects.
I’m always excited to take on new challenges and expand my horizons in this ever-evolving field.`;

export const EXPERIENCES = [
  {
    year: "July'24 - Present",
    role: "SWE Fellow",
    company: "Headstarter AI",
    description: [
      "Developing five projects with Ai integration in the next five weeks.",
      "As final project I with my team will be developing a project to get 1000 people on waitlist or 1000 accounts created or $1000 in revenue.",
    ],
    technologies: [
      "Javascript",
      "React.js",
      "Html",
      "Css",
      "Machine Learning",
      "Flutter",
    ],
  },
  {
    year: "Nov'23 - Jan'24",
    role: "Frontend Developer",
    company: "Dept. of Forest & Wildlife (NCT. of Delhi)",
    description: [
      "Developed and transformed a basic webpage into a comprehensive website based on the model of an existing site, enhancing its functionality and user experience.",
      "Collaborated closely with cross-functional teams to gather comprehensive project requirements, conduct user needs analysis, and incorporate iterative feedback into the development process.",
      "Showcased adept use of modern web tools and frameworks to meet project goals.",
      "Conducted rigorous testing & debugging protocols to identify and rectify potential issues, guaranteeing optimal performance of the website.",
    ],
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "July'22 - Sep'22",
    role: "Android Developer Trainee",
    company: "SmartInternz",
    description: [
      "Google Supported Virtual Internship provided by Google Developers and in collaboration with AICTE.",
      "Learnt how to develop Android apps with hands-on practice using Kotlin language.",
      "Learnt concepts like Kotlin basics, making a good layout and improving the UI, navigation component, getting data from the internet, data persistence using Work Manager API.",
      "Built many mobile apps using all the concepts learned.",
    ],
    technologies: ["Kotlin", "MVVM", "Android Studio"],
  },
];

export const PROJECTS = [
  {
    title: "VertexVr",
    image: project1,
    description:
      "A cutting-edge landing page for VertexVR using React and Tailwind CSS, featuring smooth scrolling navigation and a responsive layout optimized for all devices.",
    technologies: ["Reactjs", "Tailwind Css", "Vercel"],
    liveUrl: "https://vertexvr.vercel.app/",
    codeUrl: "https://github.com/rohankr09/VertexVR-Landing-Page",
  },
  {
    title: "GameStreet",
    image: project2,
    description:
      "A responsive web application for discovering trending video games using the RAWG API, featuring a seamless layout optimized for all devices.",
    technologies: ["Reactjs", "Vercel", "Rawg Api", "Tailwind Css"],
    liveUrl: "https://gamestreet.vercel.app/",
    codeUrl: "https://github.com/rohankr09/GameStreet",
  },
  {
    title: "Grocery List",
    image: project3,
    description:
      "A grocery tracking application to assist users in maintaining a comprehensive record of items, preventing forgetfulness during shopping.",
    technologies: ["Kotlin", "MVVM", "Android Studio"],
    codeUrl: "https://github.com/rohankr09/Grocery-List-Application",
  },
];

export const CONTACT = {
  address: "New Delhi, India",
  email: "prohanskumar@gmail.com",
};
