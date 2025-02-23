import { nanoid } from "nanoid";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "TailwindCSS",
    icon: <BiLogoTailwindCss className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in TailwindCSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "/image.png",
    url: "https://react-alpha-gilt.vercel.app/",
    github: "https://github.com/Arasulingam/React-",
    title: "User Profile Card using React",
    text: "A React.js User Card project displays user profiles in card format, showcasing details like name, photo, and email. It uses React's component-based architecture for dynamic data management and efficient rendering. Features include responsive design, interactive elements, and API integration for real-time data. This project is ideal for learning React concepts like props, state, and component lifecycle.",
  },
  {
    id: nanoid(),
    img: "https://i.pinimg.com/736x/c1/90/7f/c1907ffa0c29e3d7cea8a519aa1a1fbc.jpg",
    url: "https://resume.nexgoods.shop",
    github: "https://github.com/Arasulingam/",
    title: "Resume Ranking using NLP",
    text: "The Resume Ranking project leverages Natural Language Processing (NLP) and Machine Learning to extract and analyze key information from resumes. Using spaCy and DistilBERT, the system identifies and structures data such as skills, experience, education, job titles, and certifications into a JSON format. The extracted information is then ranked based on predefined criteria, enabling efficient candidate shortlisting. This approach enhances recruitment processes by automating resume screening, reducing manual effort, and improving accuracy in talent selection.",
  },
  {
    id: nanoid(),
    img: "/image1.png",
    url: "https://arasu.vercel.app/",
    github: "https://github.com/Arasulingam/portfolio",
    title: "Personal Portfolio",
    text: "A sleek, modern personal portfolio built with React Js. It showcases my skills, projects, and experience using server-side rendering and static site generation for optimal performance. Features include an interactive project gallery, detailed bio, contact form, and integration with GitHub and LinkedIn.",
  },
];
