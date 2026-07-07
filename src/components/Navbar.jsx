import { useState, useEffect } from "react";

const navLinks = [
  { href: "#accueil",     label: "Accueil" },
  { href: "#apropos",     label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#projets",     label: "Projets" },
  { href: "#contacts",    label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-400"
      style={{
        padding: scrolled ? "1rem 8.3vw" : "1.6rem 8.3vw",
        background: scrolled ? "rgba(250,247,244,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid #E5D5C0" : "none",
      }}
    >
      {/* Logo */}
      <a
        href="#accueil"
        className="font-display font-semibold tracking-wide no-underline"
        style={{ fontSize: "1.4rem", color: "#2B1A0E" }}
      >
        MG<span style={{ color: "#D4845A" }}>.</span>
      </a>

      {/* Links */}
      <ul className="flex gap-8 list-none m-0 p-0">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="nav-link relative no-underline font-medium transition-colors duration-300"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#8B5E3C",
                paddingBottom: "2px",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#D4845A")}
              onMouseLeave={(e) => (e.target.style.color = "#8B5E3C")}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
