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

    }, [])

    return (
        <>
            <nav className={`p-5 bg-[#F7F2EE] text-sm md:text-base sticky top-0 z-50
                ${scrolled
                    ? "bg-[#F3ECE6] shadow"
                    : "py-8"
                }`}>
                <ul
                    className="flex justify-center space-x-4 md:space-x-10">
                    <li><a href="#accueil" className="text-[#8B6B5A] hover:text-[#D6A77A] hover:font-medium">Accueil</a></li>
                    <li><a href="#apropos" className="text-[#8B6B5A] hover:text-[#D6A77A]  hover:font-medium">A propos</a></li>
                    <li><a href="#competences" className="text-[#8B6B5A] hover:text-[#D6A77A]  hover:font-medium">Compétences</a></li>
                    <li><a href="#projets" className="text-[#8B6B5A] hover:text-[#D6A77A]  hover:font-medium">Projets</a></li>
                    <li><a href="#contacts" className="text-[#8B6B5A] hover:text-[#D6A77A]  hover:font-medium">Contacts</a></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;