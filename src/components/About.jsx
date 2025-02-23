import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
          Dedicated B.Tech (Artificial Intelligence and Machine Learning) student with strong proficiency in
Python, C++, JavaScript, Linux, Azure Cloud, and full-stack development. Interested in developing and
testing applications through academic projects and self-learning. Actively seeking an entry-level Software
Engineering position to apply my coding skills and passion for technology in a fast-paced environment while
continuing to enhance my technical expertise.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
