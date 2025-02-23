import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100  py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-4xl font-bold tracking-wider">
            I&apos;m Arasulingam
          </h1>
          <p className="mt-4 text-2xl text-slate-700 capitalize tracking-wide">
            Software Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Arasulingam"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/arasulingam/"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/arasu.exe/"
            >
              <FaInstagramSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
