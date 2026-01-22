import { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const navLinks = [
        { link: "#accueil", name: "Accueil" },
        { link: "#apropos", name: "À propos" },
        { link: "#competences", name: "Compétences" },
        { link: "#projets", name: "Projets" },
        { link: "#contacts", name: "Contacts" }
    ]

    return (
        <>
            <nav className={`p-5 bg-[#F7F2EE] sticky top-0 z-50 transition-all duration-300  
                ${scrolled
                    ? "bg-[#F3ECE6] shadow"
                    : "py-8"

                }`}>
                <ul
                    className="flex justify-center items-center gap-2 md:gap-10">
                    {
                        navLinks.map((navLink, index) => (
                            <li key={index}>
                                <a href={navLink.link} className="text-[#8B6B5A] hover:text-[#D6A77A] hover:font-medium relative group">
                                    {navLink.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D6A77A] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        )
                        )}
                </ul>
            </nav>
        </>
    )
}
export default Navbar;