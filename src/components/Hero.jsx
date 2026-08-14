import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "4+", label: "Projects Built" },
];

// Adjust these percentages to whatever reflects your actual skill level
const skillBars = [
  { name: "React", pct: "75", color: "#7c3aed" },
  { name: "JavaScript", pct: 60, color: "#a78bfa" },
  { name: "Tailwind CSS", pct: 77, color: "#c084fc" },
  { name: "Next.js", pct: 50, color: "#8b5cf6" },
  { name: "TypeScript", pct: 50, color: "#6d28d9" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 80,
        paddingBottom: 64,
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-128px",
          left: "33%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          right: "25%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1152,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Left column — unchanged */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Available tag */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 40,
              }}
            >
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
                    display: "inline-flex",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "#34d399",
                    opacity: 0.75,
                    animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#10b981",
                  }}
                />
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "#71717a",
                }}
              >
                Available for work
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontSize: "clamp(48px, 8vw, 96px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "#f4f4f5",
                marginBottom: 24,
              }}
            >
              Hi, I'm{" "}
              <span
                style={{
                  color: "#7c3aed",
                  textShadow: "0 0 60px rgba(124,58,237,0.35)",
                }}
              >
                Ayesha Shafi
              </span>
            </h1>

            {/* Role */}
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 22px)",
                fontWeight: 500,
                color: "#71717a",
                marginBottom: 24,
                letterSpacing: "-0.02em",
              }}
            >
              Frontend Developer &nbsp;&middot;&nbsp; React Specialist
            </p>

            {/* Bio */}
            <p
              style={{
                color: "#a1a1aa",
                maxWidth: 520,
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              I build precise, high-performance web interfaces with a strong
              focus on clean design, responsiveness, and user experience. I
              enjoy turning complex problems into simple, intuitive digital
              solutions using modern frontend technologies like React,
              JavaScript,
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                marginBottom: 64,
              }}
            >
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#7c3aed",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  boxShadow: "0 0 24px rgba(124,58,237,0.35)",
                  transition: "all 0.2s",
                }}
              >
                Contact Me <ArrowRight size={16} />
              </a>
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "transparent",
                  color: "#a1a1aa",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                View Projects
              </a>
            </div>

            {/* Social links */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: 64,
              }}
            >
              <a
                href="https://github.com/Ayesha-shafi12"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#52525b", transition: "color 0.2s" }}
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ayesha-shafi20"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#52525b", transition: "color 0.2s" }}
              >
                <Linkedin size={20} />
              </a>
              <div
                style={{
                  height: 1,
                  width: 48,
                  background: "rgba(255,255,255,0.1)",
                }}
              />
            </div>

            {/* Stats */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                      color: "#f4f4f5",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#52525b",
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — skill dashboard card */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ position: "relative" }}
          >
            {/* Glow behind card */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 420,
                height: 420,
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Main dashboard card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "relative",
                zIndex: 2,
                margin: "0 auto",
                maxWidth: 400,
                background: "#18181b",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: 28,
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.06)",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 28,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "#52525b",
                      marginBottom: 6,
                    }}
                  >
                    Skill Dashboard
                  </div>
                  <div
                    style={{ fontSize: 17, fontWeight: 700, color: "#f4f4f5" }}
                  >
                    Core Proficiency
                  </div>
                </div>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "rgba(124,58,237,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Sparkles size={17} color="#7c3aed" />
                </div>
              </div>

              {/* Progress bars */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                {skillBars.map((s, i) => (
                  <div key={s.name}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#e4e4e7",
                        }}
                      >
                        {s.name}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#71717a",
                        }}
                      >
                        {s.pct}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: 6,
                        borderRadius: 999,
                        background: "rgba(255,255,255,0.06)",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${s.pct}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.3 + i * 0.12,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                          height: "100%",
                          borderRadius: 999,
                          background: s.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: "rgba(255,255,255,0.06)",
                  margin: "24px 0 20px",
                }}
              />

              {/* Footer mini stats */}
              <div style={{ display: "flex", gap: 24 }}>
                <div>
                  <div
                    style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5" }}
                  >
                    3+
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#52525b",
                      marginTop: 2,
                    }}
                  >
                    Core Skills
                  </div>
                </div>
                <div>
                  <div
                    style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5" }}
                  >
                    4+
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#52525b",
                      marginTop: 2,
                    }}
                  >
                    Projects
                  </div>
                </div>
                <div>
                  <div
                    style={{ fontSize: 20, fontWeight: 700, color: "#7c3aed" }}
                  >
                    Open
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#52525b",
                      marginTop: 2,
                    }}
                  >
                    To Work
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              style={{
                position: "absolute",
                top: 4,
                left: -12,
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#1e1630",
                border: "1px solid rgba(124,58,237,0.35)",
                borderRadius: 999,
                padding: "8px 14px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#34d399",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#c084fc",
                  letterSpacing: "0.04em",
                }}
              >
                Actively coding
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { margin-top: 32px; }
        }
      `}</style>
    </section>
  );
}
