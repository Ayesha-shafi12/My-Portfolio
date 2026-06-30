import { motion } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";

const categories = [
  {
    icon: Monitor,
    title: "Frontend",
    desc: "Building the visual layer from pixel perfect layouts to complex interactive UIs.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    desc: "Designing and consuming APIs, databases, and server side logic.",
    skills: ["Node.js", "Express", "REST APIs", "MySQL", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    desc: "The toolchain that makes fast, collaborative, quality driven development possible.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Vite",
      "Railway",
      "WordPress",
      "Vercel",
    ],
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

export default function Skills() {
  return (
    <section
      id="skills"
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
                fontSize: 15,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#52525b",
                marginBottom: 12,
              }}
            >
              What I Know
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                color: "#f4f4f5",
                letterSpacing: "-0.03em",
              }}
            >
              Technical Skills
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: "relative",
                    background: "#18181b",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 20,
                    padding: 32,
                    overflow: "hidden",
                    cursor: "default",
                    transition: "border-color 0.3s",
                  }}
                >
                  {/* Top accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background:
                        "linear-gradient(to right, rgba(124,58,237,0.4), transparent)",
                    }}
                  />

                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "rgba(124,58,237,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon size={20} color="#7c3aed" />
                  </div>

                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#f4f4f5",
                      marginBottom: 8,
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#71717a",
                      lineHeight: 1.6,
                      marginBottom: 24,
                    }}
                  >
                    {cat.desc}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          color: "#c084fc",
                          background: "#1e1630",
                          border: "1px solid rgba(59,46,110,0.6)",
                          padding: "4px 12px",
                          borderRadius: 999,
                          transition: "all 0.2s",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
