import Title from "./Title";
import { CodeXml, WandSparkles } from 'lucide-react';

const skillsLogo = [
    { id: 1, name: "HTML", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="rounded-full " /> },
    { id: 2, name: "CSS", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="rounded-full " /> },
    { id: 3, name: "JavaScript", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="rounded-full " /> },
    { id: 4, name: "JQuery", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" className="rounded-full " /> },
    { id: 5, name: "React JS", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="rounded-full " /> },
    { id: 6, name: "Tailwind CSS", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="rounded-full " /> },
    { id: 7, name: "Bootstrap", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" className="rounded-full " /> },
    { id: 8, name: "Figma", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="rounded-full " /> },
    { id: 9, name: "Photoshop", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" className="rounded-full " /> },
    { id: 10, name: "Canva", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" className="rounded-full " /> }
]

const skills = [
    { id: 1, image: <CodeXml size={30} />, category: "Développement Frontend", tools: ["HTML, CSS, JavaScript, jQuery", "React JS, Tailwind CSS, Bootstrap"] },
    { id: 2, image: <WandSparkles size={30} />, category: 'Design', tools: ["Figma, Photoshop, Canva"] }
];

const Skills = () => {
    return (
        <>
            <section id="competences">
                <div className="bg-[#F7F2EE] py-10 md:py-25 px-[10%]">
                    <Title title={"Compétences"} />
                    <div className="flex flex-col-reverse md:flex-row justify-cenetr items-center">
                        <div className="flex flex-wrap gap-4 justify-center items-center
                        md:w-1/3 md:ml-20 lg:ml-40 mt-4 md:mt-0">
                            {
                                skillsLogo.map((skillLogo) => (
                                    <div key={skillLogo.id} className="flex flex-col justify-center items-center">
                                        <div className="w-20 h-20 p-2 rounded-full border-2 border-[#D6A77A]">
                                            {skillLogo.logo}
                                        </div>
                                        <span className="mt-2 text-sm">{skillLogo.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="md:ml-4 flex flex-col space-y-4">
                            {skills.map((skill) => (
                                <div key={skill.id} className="bg-[#F3ECE6] p-5 rounded-xl shadow">
                                    <div className="flex item-center">
                                        {skill.image}
                                        <h3 className="ml-4 text-xl text-[#D6A77A] font-semibold">{skill.category}</h3>
                                    </div>
                                    <ul className="list-disc ml-16 mt-2">
                                        {skill.tools.map((tool, index) => (
                                            <li key={index}>{tool}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;