import { useRef, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
import beton from "../assets/images/beton.png";
import biblio from "../assets/images/biblio.png";
import Jeu from "../assets/images/Jeu.png";
import dashboard from "../assets/images/dashboard.png";
import sangplus from "../assets/images/sangplus.png";
import climera from "../assets/images/climera.png";
import jobconnect from "../assets/images/jobconnect.png";
import skill2job from "../assets/images/skill2job.png";
import espaceelles from "../assets/images/espaceelles.png";

const projects = [
  {
    id: 1, num: "01",
    title: "Espace Elles",
    description: "Espace ELLES est une solution de réservation d'espace en ligne simple, moderne et accessible.",
    techno: ["React", "Typscript", "Tailwind CSS"],
    link: "https://espace.elles.app/",
    repoLink: "",
    Image: espaceelles,
  },
  {
    id: 2, num: "02",
    title: "Climera",
    description: "Climera est une solution numérique dédiée aux agriculteurs du Bénin, offrant des outils intelligents pour suivre la météo, optimiser les cultures et adopter une agriculture durable.",
    techno: ["HTML", "CSS", "JavaScript"],
    link: "https://climera.vercel.app/",
    repoLink: "https://github.com/Maria-Kcg/climera",
    Image: climera,
  },
  {
    id: 3, num: "03",
    title: "Skill2Job",
    description: "Skill2Job est une plateforme qui connecte les étudiants aux entreprises via des projets réels pour développer leurs compétences et construire un portfolio professionnel.",
    techno: ["HTML", "CSS", "JavaScript"],
    link: "https://skill2job-eight.vercel.app/",
    repoLink: "https://github.com/Maria-Kcg/skill2job",
    Image: skill2job,
  },
  {
    id: 4, num: "04",
    title: "JobConnect Bénin",
    description: "JobConnect Bénin est une plateforme web qui facilite la recherche d'emploi en connectant les candidats aux opportunités professionnelles disponibles au Bénin.",
    techno: ["React", "Tailwind CSS"],
    link: "https://job-connect-beige.vercel.app/",
    repoLink: "https://github.com/Maria-Kcg/job-connect",
    Image: jobconnect,
  },
  {
    id: 5, num: "05",
    title: "Bibliothèque",
    description: "Gestion des livres dans une bibliothèque",
    techno: ["React JS", "Tailwind CSS"],
    link: "https://biblioth-que-coral.vercel.app/",
    repoLink: "https://github.com/Maria-Kcg/biblioth-que",
    Image: biblio,
  },
  {
    id: 6, num: "06",
    title: "Dashboard",
    description: "Intégration d'une maquette Figma",
    techno: ["React JS", "Tailwind CSS"],
    link: "https://dashboard-steel-eight-63.vercel.app/",
    repoLink: "https://github.com/Maria-Kcg/dashboard",
    Image: dashboard,
  },
  {
    id: 7, num: "07",
    title: "Jeu de numéro",
    description: "Jeu interactif de numéros",
    techno: ["HTML", "CSS", "JavaScript"],
    link: "https://maria-kcg.github.io/jeuNum/",
    repoLink: "https://github.com/Maria-Kcg/jeuNum",
    Image: Jeu,
  },
  {
    id: 8, num: "08",
    title: "Béton Constructions",
    description: "Reproduction d'un site vitrine",
    techno: ["HTML", "CSS", "JavaScript"],
    link: "https://maria-kcg.github.io/site-beton-constructions/",
    repoLink: "https://github.com/Maria-Kcg/site-beton-constructions",
    Image: beton,
  },
  {
    id: 9, num: "09",
    title: "Sang Plus",
    description: "Projet personnel — lutte contre le cancer du sang",
    techno: ["WordPress", "Elementor"],
    link: "",
    repoLink: "",
    Image: sangplus
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}
      className="reveal group bg-[#F7F2EE] p-5 rounded-xl shadow-lg
        transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* ── Image ── */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={project.Image}
          alt={project.title}
          className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Numéro filigrane */}
        <span
          className="absolute bottom-2 right-3 font-bold pointer-events-none select-none"
          style={{ fontSize: "2.5rem", lineHeight: 1, color: "rgba(255,255,255,0.18)" }}
        >
          {project.num}
        </span>
      </div>

      {/* ── Titre + description ── */}
      <div>
        <h3 className="my-2 font-bold text-[#2B1A0E]">{project.title}</h3>
        <p className="text-sm text-[#8B6B5A]">{project.description}</p>
      </div>

      {/* ── Tags ── */}
      <div className="flex flex-wrap gap-2 my-3">
        {project.techno.map((tech, i) => (
          <span
            key={i}
            className="bg-[#F3ECE6] px-2 py-1 h-fit rounded text-xs"
            style={{ color: "#7A5540", border: "1px solid #DDD0C4" }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* ── Boutons ── */}
      <div className="flex gap-3 mt-1">
        {project.repoLink ? (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noreferrer"
            title="Voir le code"
            className="flex items-center justify-center py-2 px-5 rounded transition-all duration-200"
            style={{ background: "rgba(214,167,122,0.3)", color: "#7A5540" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(214,167,122,0.55)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(214,167,122,0.3)"}
          >
            <Github size={17} />
          </a>
        ) : (
          <span
            className="flex items-center justify-center py-2 px-5 rounded"
            style={{ background: "rgba(214,167,122,0.1)", color: "rgba(122,85,64,0.3)" }}
          >
            <Github size={17} />
          </span>
        )}

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 py-2 px-5 rounded text-sm transition-all duration-200"
            style={{ background: "rgba(214,167,122,0.3)", color: "#7A5540" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(214,167,122,0.55)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(214,167,122,0.3)"}
          >
            <ExternalLink size={15} />
            Voir le site
          </a>
        ) : (
          <span
            className="flex items-center gap-2 py-2 px-5 rounded text-sm italic"
            style={{ background: "rgba(214,167,122,0.1)", color: "rgba(122,85,64,0.4)" }}
          >
            En cours
          </span>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projets" style={{ background: "#FAF7F4", padding: "7rem 8vw" }}>

      {/* En-tête */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4"
            style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C4956A" }}
          >
            <span style={{ width: 28, height: 1, background: "#C4956A", display: "block" }} />
            Portfolio
          </div>
          <h2
            className="font-light leading-tight"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#2B1A0E", fontFamily: "Georgia, serif" }}
          >
            Mes <em className="italic" style={{ color: "#D4845A" }}>projets</em>
          </h2>
          <p className="" style={{ color: "#8B5E3C", fontSize: "0.85rem", maxWidth: 240, lineHeight: 1.7, fontWeight: 300 }}>
            Une sélection de travaux reflétant mon parcours de développeuse.
          </p>
        </div>

      </div>

      {/* Grille */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

    </section>
  );
};

export default Projects;