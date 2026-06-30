import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVercel,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiFigma,
} from "react-icons/si";

const techs = [
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiGit, label: "Git", color: "#F05032" },
  { icon: SiVercel, label: "Vercel", color: "#ffffff" },
  { icon: SiFigma, label: "Figma", color: "#F24E1E" },
];

// 4 copies so (4-1) × copy_width > any viewport — no empty space ever
const quadrupled = [...techs, ...techs, ...techs, ...techs];

export default function TechStack() {
  return (
    <section
      style={{
        padding: "64px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: 40 }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#52525b",
            marginBottom: 8,
          }}
        >
          What I Work With
        </p>
        <h2
          style={{
            fontSize: 25,
            fontWeight: 700,
            color: "#f4f4f5",
            letterSpacing: "-0.02em",
          }}
        >
          Technical Stack
        </h2>
      </motion.div>

      <div style={{ position: "relative" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: 112,
            zIndex: 10,
            pointerEvents: "none",
            background: "linear-gradient(to right, #0e0e10, transparent)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: 112,
            zIndex: 10,
            pointerEvents: "none",
            background: "linear-gradient(to left, #0e0e10, transparent)",
          }}
        />

        <motion.div
          style={{ display: "flex", width: "max-content" }}
          animate={{ x: ["0%", "-25%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {quadrupled.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                style={{
                  margin: "0 12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  cursor: "default",
                  userSelect: "none",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 12,
                    background: "#18181b",
                    border: "1px solid rgba(255,255,255,0.06)",
                    transition: "all 0.3s",
                  }}
                >
                  <Icon size={26} style={{ color: tech.color }} />
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#3f3f46",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tech.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
