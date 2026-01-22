import Title from "./Title";
import beton from "../assets/images/beton.png";
import biblio from "../assets/images/biblio.png";
import Jeu from "../assets/images/Jeu.png";
import dashboard from "../assets/images/dashboard.png";
import sangplus from "../assets/images/sangplus.png";
import { Github } from 'lucide-react';
import useScrollAnimation from "../hooks/useScrollAnimation";

const projects = [
    {
        id: 1, title: "Bibliothèque", description: "Gestion des lives dans une bibliothèque", link: "https://biblioth-que-coral.vercel.app/",
        techno: ["React Js", "Tailwind CSS"], repoLink: "https://github.com/Maria-Kcg/biblioth-que", Image: biblio
    },
    {
        id: 2, title: "Dashboard", description: "Intégration d'une maquette figma", link: "https://dashboard-steel-eight-63.vercel.app/",
        techno: ["React Js", "Tailwind CSS"], repoLink: "https://github.com/Maria-Kcg/dashboard", Image: dashboard
    },
    {
        id: 3, title: "Jeu", description: "Jeu de neuméro", link: "https://maria-kcg.github.io/jeuNum/",
        techno: ["HTML", "CSS", "JavaScript"], repoLink: "https://github.com/Maria-Kcg/jeuNum", Image: Jeu
    },
    {
        id: 4, title: "Reproduction", description: "Reproduction d'un site", link: "https://maria-kcg.github.io/site-beton-constructions/",
        techno: ["HTML", "CSS", "JavaScript"], repoLink: "https://github.com/Maria-Kcg/site-beton-constructions", Image: beton
    },
    {
        id: 5, title: "Site Sangplus", description: "Projet personnel, pour la lutte contre le cancer du sang", link: "",
        techno: ["WordPress", "Elementor"], repoLink: "", Image: sangplus
    }
]

const Projects = () => {

    const [ref, isVisible] = useScrollAnimation();

    return (
        <>
            <section id="projets">
                <div
                    ref={ref}
                    className="bg-[#F3ECE6] py-10 md:py-25 px-[10%]">
                    <Title title={"Mes Projets"} />

                    <div className="grid md:grid-cols-2 gap-8">
                        {
                            projects.map((project, index) => (
                                <div key={project.id}
                                    className={`group bg-[#F7F2EE] p-5 rounded-xl shadow-lg transition-all duration-500 
                                    hover:shadow-2xl hover:-translate-y-2 hover:translate-x-2
                                    ${isVisible ? "opacity-100 translate-0" : "opacity-0 translate-10"}
                                    ${projects.length % 2 !== 0 && index === projects.length - 1 ? "md:col-span-2 md:justify-self-center" : ""}`}

                                    style={{ transitionDelay: `${index * 10}ms` }}>

                                    <div className="relative overflow-hidden rounded-xl">
                                        <img
                                            src={project.Image} alt={project.title}
                                            className="w-full h-56 transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="my-2 font-bold">{project.title}</h3>
                                        <p className="text-sm">{project.description}</p>
                                    </div>

                                    <div className="flex fle-wrap gap-2 my-3">
                                        {project.techno.map((tech, index) => (
                                            <span key={index} className="bg-[#F3ECE6] p-2 h-fit rounded shadow text-xs">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={project.repoLink} target="_blank" title="Voir le code" className="bg-[#D6A77A50] py-2 px-5 rounded">
                                            <Github />
                                        </a>
                                        <a href={project.link} target="_blank" className="bg-[#D6A77A50] py-2 px-5 rounded">
                                            Voir le site
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;