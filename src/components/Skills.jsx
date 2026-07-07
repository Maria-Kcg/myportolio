import { useEffect, useRef } from "react";
import { CodeXml, WandSparkles } from "lucide-react";

const skillsLogo = [
  { id: 1, name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { id: 2, name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { id: 3, name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { id: 4, name: "jQuery", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" },
  { id: 5, name: "React JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { id: 6, name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { id: 7, name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { id: 8, name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg", style: { filter: "invert(0.7)" } },
  { id: 9, name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { id: 10, name: "Photoshop", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
  { id: 11, name: "Canva", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
];

const Skills = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const chips = grid.querySelectorAll(".skill-chip");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          chips.forEach((chip, i) => {
            setTimeout(() => chip.classList.add("visible"), i * 80);
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="competences" className="relative overflow-hidden bg-[#2B1A0E] px-10 md:px-[9rem] py-[8vw]" >
      {/* Background watermark 
      <span className="font-display font-bold absolute pointer-events-none select-none whitespace-nowrap
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(10rem,22vw,20rem)] text-white/5 z-0"
      >
        SKILLS
      </span>*/}

      <div className="relative z-1">
        {/* Label */}
        <div className="flex items-center gap-3 mb-5 text-[0.7rem] tracking-[0.22em] uppercase text-[#C4956A]" >
          <span className="w-[28px] h-[1px] bg-[#C4956A] block" ></span>
          Compétences
        </div>

        {/* Title */}
        <h2 className="font-display font-light leading-tight mb-0 text-[clamp(2.4rem,5vw,4rem)] text-[#FAF7F4]">
          Mon <em className="italic text-[#D4845A]">stack </em>
          <br className="hidden md:flex" />technique
        </h2>

        {/* Grid */}
        <div ref={gridRef} className="grid mt-16 grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-[1.6rem]">
          {skillsLogo.map((skill) => (
            <div
              key={skill.id}
              className="skill-chip reveal relative flex flex-col items-center gap-3 transition-all duration-300
                        py-[1.4rem] px-[0.8rem] border border-white/10 bg-white/[0.03] rounded-[2px]"

              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = "rgba(212,132,90,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img src={skill.src} alt={skill.name} className={`w-[38px] h-[38px] object-contain ${skill.className || ""}`} />
              <span className="text-[0.68rem] tracking-[0.08em] uppercase text-[#FAF7F4]/60">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Category cards */}
        <div className="flex flex-col md:flex-row gap-4 mt-16">
          {[
            {
              icon: <CodeXml size={24} />,
              cat: "Développement Frontend",
              tools: ["HTML, CSS, JavaScript, jQuery", "React JS, Tailwind CSS, Bootstrap", "WordPress"],
            },
            {
              icon: <WandSparkles size={24} />,
              cat: "Design",
              tools: ["Figma, Photoshop, Canva"],
            },
          ].map(({ icon, cat, tools }) => (
            <div key={cat} className="flex-1 bg-white/[0.04] border border-white/10 py-[1.6rem] px-[2rem] rounded-[2px]" >
              <div className="flex items-center gap-3 mb-4 text-[#D4845A]">
                {icon}
                <h3
                  className="font-semibold text-[1rem] tracking-[0.02em] text-[#D4845A]">
                  {cat}
                </h3>
              </div>
              <ul className="list-disc pl-[1.4rem]">
                {tools.map((t) => (
                  <li key={t} className="text-[0.88rem] text-[#FAF7F4]/55 mb-[0.4rem]">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
