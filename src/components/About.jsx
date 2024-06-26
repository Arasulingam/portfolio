import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code Hard" />
          <p className="text-slate-600 mt-8 leading-loose">
            "Code hard" embodies the relentless pursuit of excellence in
            programming. It's about diving deep into complex problems, writing
            efficient and elegant code, and continuously learning and adapting.
            This mindset fuels late-night coding sessions, persistent debugging,
            and the satisfaction of solving intricate challenges. It's the
            dedication to mastering the craft, pushing boundaries, and creating
            innovative solutions.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
