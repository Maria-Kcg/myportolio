import Title from "./Title";
import useScrollAnimation from "../hooks/useScrollAnimation";

const About = () => {
    const [ref, isVisible] = useScrollAnimation();
    return (
        <>
            <section id="apropos">
                <div className="bg-[#F3ECE6] py-10 md:py-25 px-[10%]">
                    <Title title="À propos De Moi" />
                    <div
                        ref={ref}
                        className={`md:px-20 text-justify text-lg transition-all duration-1000
                            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-10"}`
                        }
                    >
                        <p className="mb-4">Je suis développeuse frontend en formation, passionnée par la création d’interfaces web modernes, accessibles et bien structurées.</p>
                        <p className="mb-4">J’apprends à transformer des maquettes et des idées en expériences utilisateur claires et agréables, en utilisant des technologies comme HTML, CSS, JavaScript et React.</p>
                        <p>Curieuse et motivée, je cherche constamment à progresser, à améliorer mon code et à construire des projets concrets qui renforcent mes compétences.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;