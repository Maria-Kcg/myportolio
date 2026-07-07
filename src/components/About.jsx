import useScrollReveal from "../hooks/useScrollReveal";

const About = () => {
  const leftRef = useScrollReveal(0.15);
  const rightRef = useScrollReveal(0.15);

  return (
    <section
      id="apropos" className="grid items-center bg-[#F3EDE5] mx-auto p-[3rem] md:px-[8vw] md:grid-cols-[1fr_1.4fr] gap-8 md:gap-[8vw]">
      {/* ── Left ── */}
      <div ref={leftRef} className="reveal-left">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-5 text-[0.65rem] sm:text-[0.7rem] tracking-[0.22em] uppercase text-[#C4956A]">
          <span className="w-[20px] sm:w-[28px] h-[1px] bg-[#C4956A] block"></span>
          À propos
        </div>

        <h2 className="font-display font-light leading-tight text-[2rem] sm:text-[clamp(2.4rem,5vw,4rem)] text-[#2B1A0E]">
          Créatrice <br className="hidden md:block" />d'<em className="italic text-[#D4845A]">expériences </em><br className="hidden md:block" />web
        </h2>

        {/* Divider */}
        <div className="w-[1px] sm:w-[1.5px] h-[3rem] sm:h-[5rem] bg-[#E5D5C0] my-4 sm:my-8"></div>

        {/* Stats */}
        <div className="flex gap-4 md:gap-12">
          {[
            { num: "5+", label: "Projets" },
            { num: "3+", label: "Technos" },
            { num: "∞", label: "Curiosité" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-display font-semibold text-[3rem] leading-[1] text-[#2B1A0E]">
                {num}
              </div>
              <div className="text-[0.72rem] tracking-[0.12em] uppercase text-[#C4956A] mt-[0.3rem]" >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right ── */}
      <div ref={rightRef} className="reveal">
        {[
          "Je suis développeuse frontend en formation, passionnée par la création d'interfaces web modernes, accessibles et bien structurées.",
          "J'apprends à transformer des maquettes et des idées en expériences utilisateur claires et agréables, en utilisant des technologies comme HTML, CSS, JavaScript et React.",
          "Curieuse et motivée, je cherche constamment à progresser, à améliorer mon code et à construire des projets concrets qui renforcent mes compétences.",
        ].map((text, i) => (
          <p key={i} className="text-[1rem] leading-[1.85] text-[#8B5E3C] mb-[1.4rem] font-light" >
            {text}
          </p>
        ))}

        {/* Quote */}
        <blockquote className="font-display font-light text-[clamp(1.1rem,2.2vw,1.6rem)] leading-[1.7] text-[#2B1A0E] mt-[2.4rem] border-l-2 border-[#E5D5C0] pl-[1.4rem]">
          "Le développement, c'est transformer le{" "}
          <strong className="font-semibold text-[#D4845A]">code</strong>{" "}
          en{" "}
          <strong className="font-semibold text-[#D4845A]">expérience.</strong>"
        </blockquote>
      </div>
    </section>
  );
};

export default About;