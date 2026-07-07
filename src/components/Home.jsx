import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import photo from "../assets/images/photo.jpg";

const Home = () => {
  const [displayName, setDisplayName] = useState("");
  const fullName = "Marie-Grâce";

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i <= fullName.length) {
          setDisplayName(fullName.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 120);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="accueil" className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* ── Left ── */}
      <div className="flex flex-col justify-center pt-[15vh] pr-[6vw] pb-[8vh] pl-[8vw]">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 mt-8 mb-10 w-fit text-[0.72rem] uppercase text-[#FAF7F4] bg-[#8B5E3C] 
                    px-[1rem] py-[0.6rem] tracking-[0.2rem] rounded">
          <span className="avail-dot rounded-full w-[7px] h-[7px] bg-[#6EE7B7] shrink-0"></span>
          Disponible
        </div>

        {/* Label */}
        <div
          className="flex items-center gap-3 mb-10 text-[0.75rem] tracking-[0.22em] uppercase text-[#C4956A]">
          <span className="w-[36px] h-[1px] bg-[#C4956A] block"></span>
          Développeuse Frontend
        </div>

        {/* Name */}
        <h1
          className="font-display font-light leading-tigh text-[clamp(3.8rem,7vw,5rem)] text-[#2B1A0E] mb-[0.2rem]">
          Bonjour,
          je suis
          <span
            className="font-display italic block text-[#D4845A]" >
            {displayName}
            <span className="typing-cursor"></span>
          </span>
        </h1>

        {/* Role */}
        <p
          className="font-display font-light text-[clamp(1.1rem,2.2vw,1.3rem)] text-[#8B5E3C] mt-[1.2rem] mb-[2.8rem] tracking-[0.03em]">
          Interfaces modernes · React · Tailwind
        </p>

        {/* CTA */}
        <a href="mailto:kpechegomariegrace@gmail.com" target="_blank" rel="noreferrer"
          className="cta-btn relative inline-flex items-center gap-2 overflow-hidden no-underline w-fit rounded
                   bg-[#2B1A0E] text-[#FAF7F4] px-[1rem] py-[0.7rem] text-[0.78rem] tracking-[0.15em] uppercase font-medium">
          <span className="flex items-center gap-2 ">
            <Mail size={14} className="inline" />
            Contactez-moi
          </span>
        </a>

        {/* Scroll hint */}
        <div className="flex items-center gap-4 mt-16 text-[0.7rem] tracking-[0.7rem] uppercase text-[#C4956A]">
          <div className="relative overflow-hidden w-[60px] h-[1px] bg-[#C4956A]/30">
            <div className="scroll-line-anim absolute top-0 w-full h-full bg-[#D4845A]" />
          </div>
          <span>Défiler</span>
        </div>
      </div>

      {/* ── Right ── */}
      <div className="relative flex items-end justify-center overflow-hidden bg-[#F3EDE5]">
        {/* Decorative big letter */}
        <span className="font-display font-bold absolute pointer-events-none select-none text-[clamp(18rem, 28vw, 32rem)] 
                        leading-[1] bottom-[-0.1em] right-[-0.05em] text-[#E5D5C0] z-0">
          M
        </span>

        {/* Photo */}
        <img src={photo} alt="Marie-Grâce"
          className="relative object-cover object-top z-2 w-[78%] max-w-[420px] h-[72%] filter grayscale-[8%] pb-20
              rounded-2xl border border-white/10 shadow-2xl transition-all duration-1500 hover:scale-[1.02] hover:shadow-green-500/30
              "/>


        <span className="absolute z-10 absolute top-[16.5%] left-[5%] bg-[#2B1A0E] text-[#FAF7F4] px-[5rem] py-[0.05rem] text-[0.72rem] 
                        tracking-[0.12em] uppercase font-medium" >
        </span>

      </div>
    </section>
  );
};

export default Home;
