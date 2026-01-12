import Title from "./Title";
import beton from "../assets/images/beton.png";
import biblio from "../assets/images/biblio.png";
import Jeu from "../assets/images/Jeu.png";
import dashboard from "../assets/images/dashboard.png";
import { Github } from 'lucide-react';

const projects = [
    { id: 1, title: "Bibliothèque", description: "Gestion des lives dans une bibliothèque", techno: ["React", "Tailwind CSS"], repoLink: "https://github.com/Maria-Kcg/biblioth-que", Image: biblio },
    { id: 2, title: "dashboard", description: "Intégration d'une maquette figma", techno: ["React", "Tailwind CSS"], repoLink: "https://github.com/Maria-Kcg/dashboard", Image: dashboard },
    { id: 3, title: "Jeu", description: "Jeu de neuméro", techno: ["HTML", "CSS", "JavaScript"], repoLink: "#", Image: Jeu },
    { id: 4, title: "Reproduction", description: "Reproduction d'un site", techno: ["HTML", "CSS", "JavaScript"], repoLink: "#", Image: beton }
]

const Projects = () => {
    return (
        <>
            <section id="projets">
                <div className="bg-[#F3ECE6] py-10 md:py-25 px-[10%]">
                    <Title title={"Mes Projets"} />
                    <div className="grid md:grid-cols-2 gap-4 ">
                        {
                            projects.map((project) => (
                                <div key={project.id} className="bg-[#F7F2EE] p-5 h-fit rounded-xl shadow-lg">
                                    <img src={project.Image} alt={project.title} className="w-full rounded-xl h-56 object-cove objext-topr" />
                                    <div>
                                        <h3 className="my-2 font-bold">{project.title}</h3>
                                        <p className="text-sm">{project.description}</p>
                                    </div>
                                    <div className="flex fle-wrap gap-2 my-3">
                                        {project.techno.map((tech, index) => (
                                            <span key={index} className="bg-[#F3ECE6] p-2 h-fit rounded shadow text-xs">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="flex">
                                        <a href={project.repoLink} className="bg-[#D6A77A50] py-2 px-5 rounded">
                                            <Github />
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