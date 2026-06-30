import { Github, Linkedin, Mail } from "lucide-react";

const navCol = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
];
const workCol = [
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
const socials = [
  { label: "GitHub", href: "https://github.com/Ayesha-shafi12", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ayesha-shafi20",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:ayesha.shafi20@gmail.com", icon: Mail },
];

const colHead = {
  fontSize: 16,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "#3f3f46",
  marginBottom: 20,
};
const linkStyle = {
  fontSize: 14,
  color: "#71717a",
  textDecoration: "none",
  display: "block",
  marginBottom: 12,
  transition: "color 0.2s",
};

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "#0a0a0c",
      }}
    >
      <div
        style={{ maxWidth: 1152, margin: "0 auto", padding: "64px 24px 40px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#f4f4f5",
                marginBottom: 12,
                letterSpacing: "-0.02em",
              }}
            >
              Portfolio<span style={{ color: "#7c3aed" }}>.</span>
            </div>
            <p
              style={{
                fontSize: 15,
                color: "#52525b",
                lineHeight: 1.8,
                maxWidth: 220,
              }}
            >
              Building clean, performant, and beautiful web experiences.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <div style={colHead}>Navigate</div>
            {navCol.map((l) => (
              <a key={l.label} href={l.href} style={linkStyle}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Work */}
          <div>
            <div style={colHead}>Work</div>
            {workCol.map((l) => (
              <a key={l.label} href={l.href} style={linkStyle}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div>
            <div style={colHead}>Socials</div>
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    ...linkStyle,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Icon size={14} /> {s.label}
                </a>
              );
            })}
          </div>
        </div>

        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.05)",
            marginBottom: 24,
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 15, color: "#3f3f46" }}>
            &copy; {new Date().getFullYear()} Ayesha Shafi. All rights reserved.
          </span>
          <span style={{ fontSize: 15, color: "#3f3f46" }}>
            Built with React + Tailwind CSS v4
          </span>
        </div>
      </div>
    </footer>
  );
}
