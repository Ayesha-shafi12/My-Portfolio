import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "ShopEase",
    title: "Ecommerce Website",
    desc: "A modern E-commerce Website frontend built using React.js that provides a smooth and responsive shopping experience",
    tags: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
    bg: "linear-gradient(135deg, #1c1c2e 0%, #2d1b4e 100%)",
    dot: "#a78bfa",
    github: "https://github.com/Ayesha-shafi12/Ecommerce-Website",
    demo: "https://ecommerce-website-theta-beige.vercel.app/",
  },
  {
    name: "TaskFlow",
    title: "FullStack Chat-Application",
    desc: "A real time chat application with a full-stack architecture, featuring instant messaging, user authentication, and a sleek UI.",
    tags: ["React", "Tailwind CSS", "Node.js", "Socket.IO", "MongoDB"],
    bg: "linear-gradient(135deg, #0f1e1a 0%, #0d3028 100%)",
    dot: "#34d399",
    github: "https://github.com/Ayesha-shafi12/fullstack-chat-app",
    demo: "https://fullstack-chat-app-emu4.vercel.app",
  },
  {
    name: "BlogForge",
    title: "BlogForge — Blog Platform",
    desc: "A clean, CMS-powered blog with Markdown rendering, dark mode, category filtering, and a custom WordPress REST API backend.",
    tags: [
      "React",
      "WordPress API",
      "Markdown",
      "REST",
      "Daily UI Development",
    ],
    bg: "linear-gradient(135deg, #1a0f0f 0%, #3a1515 100%)",
    dot: "#f87171",
    github: "#",
    demo: "#",
  },
  {
    name: "DevFolio",
    title: "Doctor Appointment Booking System",
    desc: "A comprehensive doctor appointment booking system built with Vite, React, Tailwind CSS v4, and Framer Motion. Zero templates, zero shortcuts.",
    tags: ["React", "Vite", "Tailwind CSS v4"],
    bg: "linear-gradient(135deg, #0e1a1f 0%, #0c2d3a 100%)",
    dot: "#60a5fa",
    github: "https://github.com/Ayesha-shafi12/Doctor-Appointment-Website-",
    demo: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "112px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <p
            style={{
              fontSize: 15,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#52525b",
              marginBottom: 12,
            }}
          >
            What I've Built
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#f4f4f5",
              letterSpacing: "-0.03em",
            }}
          >
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((proj, i) => (
            <motion.article
              key={i}
              variants={item}
              style={{
                background: "#18181b",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  position: "relative",
                  height: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: proj.bg,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: proj.dot,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {proj.name}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div
                style={{
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#f4f4f5",
                    marginBottom: 8,
                  }}
                >
                  {proj.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#71717a",
                    lineHeight: 1.7,
                    marginBottom: 24,
                    flex: 1,
                  }}
                >
                  {proj.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 24,
                  }}
                >
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#c084fc",
                        background: "#1e1630",
                        border: "1px solid rgba(59,46,110,0.6)",
                        padding: "3px 10px",
                        borderRadius: 999,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                  <a
                    href={proj.demo}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#7c3aed",
                      border: "1px solid rgba(124,58,237,0.4)",
                      padding: "9px 16px",
                      borderRadius: 8,
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                  >
                    <ExternalLink size={12} /> Live Demo
                  </a>
                  <a
                    href={proj.github}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#a1a1aa",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "9px 16px",
                      borderRadius: 8,
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                  >
                    <Github size={12} /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
