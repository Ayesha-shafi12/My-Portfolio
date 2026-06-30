import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Lightbulb,
  Layers,
  Target,
  BookOpen,
} from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    label: "Problem Solver",
    desc: "I enjoy solving UI challenges and converting complex requirements into clean and functional components.",
  },
  {
    icon: BookOpen,
    label: "Always Learning",
    desc: "I keep improving my frontend skills by exploring React ecosystem, new libraries, and real-world project structures.",
  },
];

const rightCards = [
  {
    icon: Layers,
    title: "Technical Stack",
    body: "React · Next.js · TypeScript · Tailwind CSS · Node.js · Express  · Vite ",
  },
  {
    icon: Target,
    title: "Current Focus",
    body: "Improving performance in React apps, understanding rendering behavior, and building smooth UI animations using Framer Motion",
  },
  {
    icon: Terminal,
    title: "Development Approach",
    body: "Component based development, reusable UI patterns, and accessibility first design while building real-world applications",
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

const card = {
  base: {
    background: "#18181b",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 16,
    padding: 24,
    transition: "border-color 0.3s",
  },
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "112px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            style={{ display: "flex", flexDirection: "column", gap: 40 }}
          >
            <motion.div variants={fadeUp}>
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
                Who I Am
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 700,
                  color: "#f4f4f5",
                  letterSpacing: "-0.03em",
                  marginBottom: 24,
                }}
              >
                About Me
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "#a1a1aa",
                  lineHeight: 1.9,
                  maxWidth: 560,
                  marginBottom: 16,
                }}
              >
                I am a Frontend Engineer dedicated to building highly
                interactive, pixel-perfect, and performance optimized web
                interfaces. I don’t just write code that works; I architect
                clean, component driven user interfaces using modern systems
                like React and TypeScript to turn complex design frameworks into
                fluid digital products.
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: "#71717a",
                  lineHeight: 1.9,
                  maxWidth: 560,
                }}
              >
                I enjoy transforming complex UI problems into simple,
                maintainable solutions through thoughtful architecture and clean
                code practices. Every project I work on is designed with
                performance, scalability, and user experience in mind.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 13,
              }}
            >
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    style={{
                      ...card.base,
                      display: "flex",
                      flexDirection: "column",
                      gap: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 45,
                        height: 42,
                        borderRadius: 8,
                        background: "rgba(124,58,237,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                      }}
                    >
                      <Icon size={16} color="#7c3aed" />
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: 600,
                        color: "#f4f4f5",
                        marginBottom: 8,
                      }}
                    >
                      {h.label}
                    </div>
                    <div
                      style={{
                        fontSize: 15,
                        color: "#71717a",
                        lineHeight: 1.6,
                      }}
                    >
                      {h.desc}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {rightCards.map((rc, i) => {
              const Icon = rc.icon;
              return (
                <motion.div key={i} variants={fadeUp} style={card.base}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(124,58,237,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={15} color="#7c3aed" />
                    </div>
                    <span
                      style={{
                        fontSize: 18,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "#71717a",
                      }}
                    >
                      {rc.title}
                    </span>
                  </div>
                  <p
                    style={{ fontSize: 15, color: "#a1a1aa", lineHeight: 1.8 }}
                  >
                    {rc.body}
                  </p>
                </motion.div>
              );
            })}

            {/* Experience badge */}
            <motion.div
              variants={fadeUp}
              style={{
                background: "rgba(124,58,237,0.05)",
                border: "1px solid rgba(124,58,237,0.15)",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <div
                style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 38,
                      fontWeight: 700,
                      color: "#7c3aed",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    1+
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#52525b",
                    }}
                  >
                    Years
                  </div>
                </div>
                <div
                  style={{
                    width: 1,
                    height: 48,
                    background: "rgba(255,255,255,0.06)",
                    flexShrink: 0,
                    marginTop: 4,
                  }}
                />
                <p style={{ fontSize: 15, color: "#a1a1aa", lineHeight: 1.7 }}>
                  Building scalable web applications for startups, agencies, and
                  independent clients worldwide.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
