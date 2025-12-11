// src/components/SkillIcon.jsx
import "./SkillIcon.css";

/**
 * Usage: <SkillIcon name="HTML5" size={96} />
 * name must match one of the keys in ICON_META (case-sensitive)
 */

const ICON_META = {
  /* Frontend */
  HTML5: { label: "HTML", colorA: "#f44f2a", colorB: "#ff7b4a", fg: "#fff" },
  CSS3: { label: "CSS", colorA: "#1572B6", colorB: "#2b8bd6", fg: "#fff" },
  JavaScript: { label: "JS", colorA: "#f0db4f", colorB: "#ffd24a", fg: "#222" },
  "React.js": { label: "React", colorA: "#61dafb", colorB: "#4cc6f3", fg: "#052b3a" },
  Bootstrap: { label: "Bs", colorA: "#7a1fa3", colorB: "#b85ad9", fg: "#fff" },
  "Tailwind CSS": { label: "TW", colorA: "#06b6d4", colorB: "#7ee3f5", fg: "#042a2b" },

  /* Backend */
  "Node.js": { label: "Node", colorA: "#3c873a", colorB: "#5cc06a", fg: "#fff" },
  "Express.js": { label: "Ex", colorA: "#000000", colorB: "#333333", fg: "#fff" },
  CSharp: { key: "C#", label: "C#", colorA: "#1077c6", colorB: "#33a0ff", fg: "#fff" },
  ".NET": { label: ".NET", colorA: "#512bd4", colorB: "#7b6bff", fg: "#fff" },
  SQL: { label: "SQL", colorA: "#0f6ab4", colorB: "#2fa1ff", fg: "#fff" },
  "REST API": { label: "API", colorA: "#ff8b3d", colorB: "#ffbc84", fg: "#111" },

  /* Database / Cloud */
  MongoDB: { label: "MDB", colorA: "#2bb24b", colorB: "#78d68f", fg: "#052a12" },
  Firebase: { label: "FB", colorA: "#f9a825", colorB: "#ffd54a", fg: "#222" },
  MySQL: { label: "MySQL", colorA: "#00758f", colorB: "#27b0d3", fg: "#fff" },
  PostgreSQL: { label: "PG", colorA: "#336791", colorB: "#4aa0e8", fg: "#fff" },

  /* DevOps / Deployment */
  Git: { label: "Git", colorA: "#f34f29", colorB: "#ff7b4a", fg: "#fff" },
  GitHub: { label: "GH", colorA: "#24292f", colorB: "#4b5260", fg: "#fff" },
  Docker: { label: "DC", colorA: "#0db7ed", colorB: "#3fd1ff", fg: "#042a30" },
  Vercel: { label: "V", colorA: "#111111", colorB: "#333333", fg: "#fff" },
  Netlify: { label: "N", colorA: "#00c7b7", colorB: "#7ef0df", fg: "#042a28" },

  /* Programming / Data */
  Python: { label: "Py", colorA: "#3776ab", colorB: "#66a6d9", fg: "#fff" },
  Java: { label: "Java", colorA: "#b07219", colorB: "#f2994a", fg: "#fff" },
  "Machine Learning": { label: "ML", colorA: "#6a1b9a", colorB: "#b066d7", fg: "#fff" }
};

const SkillMark = ({ name, size = 64, meta }) => {
  // Small variations for some icons (tiny inline svgs)
  if (name === "React.js") {
    // basic react atom SVG scaled to fit
    return (
      <svg viewBox="0 0 128 128" className="skill-svg" aria-hidden>
        <g transform={`scale(${size / 128})`}>
          <g fill="none" stroke={meta.fg || "#fff"} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
            <ellipse cx="64" cy="64" rx="52" ry="18"/>
            <ellipse cx="64" cy="64" rx="18" ry="52" transform="rotate(60 64 64)"/>
            <ellipse cx="64" cy="64" rx="18" ry="52" transform="rotate(120 64 64)"/>
            <circle cx="64" cy="64" r="10" fill={meta.fg || "#fff"} stroke="none"/>
          </g>
        </g>
      </svg>
    );
  }

  if (name === "Java") {
    return (
      <svg viewBox="0 0 64 64" className="skill-svg">
        <g transform={`scale(${size / 64})`} fill={meta.fg || "#fff"}>
          <path d="M20 14c5 2 7 2 12 0-3 4-6 6-12 6v-6z" opacity="0.95"/>
          <path d="M22 22c6 1 10 1 14 0-2 4-5 6-14 6v-6z" opacity="0.9"/>
          <path d="M32 36s6 4 12 2-5 6-12 6-13-4-10-6 10-2 10-2z"/>
          <rect x="20" y="44" width="24" height="6" rx="3" />
        </g>
      </svg>
    );
  }

  // Default: text label
  return (
    <div className="skill-mark-text" style={{ fontSize: Math.round(size * 0.23), color: meta.fg }}>
      {meta.label}
    </div>
  );
};

const SkillIcon = ({ name = "HTML5", size = 96 }) => {
  const key = name === "C#" ? "CSharp" : name; // map C# key
  const meta = ICON_META[key] || ICON_META.HTML5;

  return (
    <div
      className="skill-icon-3d"
      style={{
        width: size,
        height: size,
        ["--colA"]: meta.colorA,
        ["--colB"]: meta.colorB,
        ["--fg"]: meta.fg
      }}
      aria-label={name}
      role="img"
    >
      {/* soft base */}
      <div className="skill-base" />
      {/* colored badge */}
      <div className="skill-badge">
        <div className="badge-inner">
          <SkillMark name={key === "CSharp" ? "C#" : name} size={size} meta={meta} />
        </div>
      </div>
      {/* small highlight */}
      <div className="skill-reflection" />
    </div>
  );
};

export default SkillIcon;
