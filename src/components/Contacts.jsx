import { Mail, Linkedin, MessageCircleMore, Handshake } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const contacts = [
  {
    icon: <Mail size={18} />,
    name: "Email",
    value: "kpechegomariegrace@gmail.com",
    href: "mailto:kpechegomariegrace@gmail.com",
  },
  {
    icon: <Linkedin size={18} />,
    name: "LinkedIn",
    value: "Marie-Grâce Kpechego",
    href: "https://www.linkedin.com/in/marie-gr%C3%A2ce-kpechego-775140279",
  },
  {
    icon: <MessageCircleMore size={18} />,
    name: "WhatsApp",
    value: "+229 01 66 44 60 06",
    href: "https://wa.me/2290166446006",
  },
];

const Contacts = () => {
  const leftRef = useScrollReveal(0.15);
  const rightRef = useScrollReveal(0.15);

  return (
    <>
      <section id="contacts" className="grid items-center" style={{ background: "#F3EDE5", padding: "9rem 8vw", gap: "8vw", }}>
        {/* ── Left ── */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div ref={leftRef} className="reveal-left">
            {/* Label */}
            <div className="flex items-center gap-3 mb-5"
              style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C4956A" }}
            >
              <span style={{ width: 28, height: 1, background: "#C4956A", display: "block" }} />
              Contact
            </div>

            <h2 className="font-display font-light leading-tight mb-5"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#2B1A0E" }}
            >
              Travaillons<br /><em className="italic" style={{ color: "#D4845A" }}>ensemble</em>
            </h2>

            <p
              style={{
                color: "#8B5E3C", fontSize: "1rem", lineHeight: 1.8,
                fontWeight: 300, maxWidth: 380, marginBottom: "3rem",
              }}
            >
              N'hésitez pas à me contacter pour toute collaboration, opportunité ou simple échange.
            </p>
          </div>

          <div>
            {/* Contact items */}
            <div className="flex flex-col gap-2 mt-20">
              {contacts.map(({ icon, name, value, href }) => (
                <a key={name} href={href} target="_blank"  rel="noreferrer" className=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.6rem 0",
                    textDecoration: "none",
                    color: "#8B5E3C",
                    fontSize: "0.88rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D4845A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#8B5E3C";
                  }}
                >
                  <span style={{ color: "#C4956A", flexShrink: 0 }}>{icon}</span>
                  {value}
                </a>
              ))}
            </div>

            {/* Availability note */}
            <div
              className="flex items-center gap-2 mt-10"
              style={{ fontSize: "0.78rem", color: "#C4956A" }}
            >
              <Handshake size={15} className="animate-pulse" />
              Disponible pour tout projet, opportunité et collaboration.
            </div>
          </div>
        </div>

        {/* ── Right — decorative monogram ── 
        <div ref={rightRef} className="reveal flex items-center justify-center">
          <span className="font-display font-bold select-none"
            style={{
              fontSize: "clamp(10rem, 20vw, 18rem)",
              lineHeight: 1,
              color: "#E5D5C0",
            }}
          >
            MG
          </span>
        </div>*/}
      </section >

      {/* Footer */}
      < footer
        className="flex justify-between items-center"
        style={{ background: "#2B1A0E", padding: "2.4rem 8vw" }
        }
      >
        <span className="font-display" style={{ fontSize: "1.2rem", color: "#FAF7F4", fontWeight: 400 }} >
          MG<span style={{ color: "#D4845A" }}>.</span>
        </span>
        <p style={{ fontSize: "0.74rem", color: "rgba(250,247,244,0.35)", letterSpacing: "0.06em" }}>
          © 2025 Marie-Grâce Kpechego · Développeuse Frontend
        </p>
        <p style={{ fontSize: "0.65rem", color: "rgba(250,247,244,0.2)" }}>
          Fait avec ❤️ &amp; React
        </p>
      </ footer>
    </>
  );
};

export default Contacts;
