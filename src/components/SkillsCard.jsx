const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span className="flex justify-center items-center">{icon}</span>
      <h4 className="mt-6 text-center	 font-bold">{title}</h4>
      <p className="mt-2 text-center	 text-slate-500">{text}</p>
    </article>
  );
};
export default SkillsCard;
