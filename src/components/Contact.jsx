import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    type: "Email",
    value: "ayeshashafi20@gmail.com",
    sub: "Send me a message anytime",
    href: "ayeshashafi20@gmail.com",
  },
  {
    icon: Linkedin,
    type: "LinkedIn",
    value: "linkedin.com/in/ayesha-shafi20",
    sub: "Let's connect professionally",
    href: "https://www.linkedin.com/in/ayesha-shafi20",
  },
  {
    icon: Github,
    type: "GitHub",
    value: "github.com/Ayesha-shafi12",
    sub: "Check out my repositories",
    href: "https://github.com/Ayesha-shafi12",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "112px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: 56 }}>
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#52525b",
                marginBottom: 12,
              }}
            >
              Get In Touch
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                color: "#f4f4f5",
                letterSpacing: "-0.03em",
                marginBottom: 16,
              }}
            >
              Connect With Me
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#71717a",
                maxWidth: 460,
                lineHeight: 1.7,
              }}
            >
              Whether you have a project idea, a question, or just want to
              connect feel free to reach out anytime.
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              marginBottom: 16,
            }}
          >
            {contacts.map((c, i) => {
              const Icon = c.icon;
              return (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    background: "#18181b",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 20,
                    padding: 28,
                    textDecoration: "none",
                    transition: "border-color 0.3s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: "rgba(124,58,237,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={16} color="#7c3aed" />
                    </div>
                    <ArrowUpRight size={16} color="#3f3f46" />
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "#52525b",
                      marginBottom: 8,
                    }}
                  >
                    {c.type}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#c084fc",
                      marginBottom: 4,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {c.value}
                  </div>
                  <div style={{ fontSize: 15, color: "#52525b" }}>{c.sub}</div>
                </a>
              );
            })}
          </motion.div>

          {/* Location card */}
          <motion.div
            variants={fadeUp}
            style={{
              background: "#18181b",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20,
              padding: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "rgba(124,58,237,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin size={16} color="#7c3aed" />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#52525b",
                    marginBottom: 6,
                  }}
                >
                  Location
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#c084fc",
                    marginBottom: 4,
                  }}
                >
                  Lahore, Pakistan
                </div>
                <div style={{ fontSize: 15, color: "#52525b" }}>
                  Open to remote work worldwide
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    width: 8,
                    height: 8,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "#34d399",
                      opacity: 0.75,
                      animation: "ping 1.5s ease infinite",
                    }}
                  />
                  <span
                    style={{
                      position: "relative",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#10b981",
                      display: "inline-flex",
                    }}
                  />
                </span>
                <span
                  style={{ fontSize: 15, color: "#52525b", fontWeight: 500 }}
                >
                  Available now
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <style>{`@keyframes ping { 75%,100%{transform:scale(2);opacity:0;}}`}</style>
    </section>
  );
}
