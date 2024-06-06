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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1Ye8pKTkpnz3k9PqyAwTmMaLpoOVvdR8uQ&usqp=CAU",
    url: "#",
    github: "https://github.com/Arasulingam/firebase-blog-posts",
    title: "Next js Blog",
    text: "The Next.js Blog Website project is designed to create a modern, dynamic, and responsive blog platform using Next.js, a popular React framework. This project leverages the power of server-side rendering and static site generation to deliver a fast and SEO-friendly blogging experience.",
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
