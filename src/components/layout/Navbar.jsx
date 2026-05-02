import { useState } from "react";
import { T } from "../../styles/tokens";

const NAV_LINKS = [
  { id: "home",        label: "Beranda" },
  { id: "informasi",   label: "Informasi" },
  { id: "visualisasi", label: "Visualisasi" },
  { id: "kuesioner",   label: "Kuesioner" },
];

export default function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (id) => {
    setPage(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(255,255,255,.95)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${T.border}`,
        padding: "0 48px", display: "flex", alignItems: "center",
        height: 64, gap: 40,
      }}>
        {/* Logo */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 10, marginRight: 8, cursor: "pointer", flexShrink: 0 }}
          onClick={() => navigate("home")}
        >
          {/* ✏️ Taruh file logo.png di folder public/ */}
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: 32, height: 32, borderRadius: 10, objectFit: "contain" }}
          />
          <span style={{ fontWeight: 700, fontSize: 15, color: T.text }}>
            LAS <span style={{ color: T.blue }}>System</span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="nav-links-desktop" style={{ gap: 32, flex: 1 }}>
          {NAV_LINKS.map((l) => (
            <span
              key={l.id}
              className={`nav-link${page === l.id ? " active" : ""}`}
              onClick={() => navigate(l.id)}
            >
              {l.label}
            </span>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          className="btn-primary nav-links-desktop"
          onClick={() => navigate("kuesioner")}
          style={{
            background: T.blue, color: "#fff", border: "none",
            borderRadius: 8, padding: "9px 20px",
            fontWeight: 600, fontSize: 13, cursor: "pointer", letterSpacing: 0.3,
            alignItems: "center",
          }}
        >
          Isi Kuesioner →
        </button>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            marginLeft: "auto", background: "none", border: "none",
            cursor: "pointer", padding: 8, flexDirection: "column", gap: 5,
          }}
        >
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              width: 22, height: 2, background: T.text, borderRadius: 2,
              transition: "all .2s",
              transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)"
                       : menuOpen && i === 1 ? "scaleX(0)"
                       : menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)"
                       : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
          background: "#fff", borderBottom: `1px solid ${T.border}`,
          padding: "16px 24px", boxShadow: "0 8px 24px rgba(0,0,0,.08)",
        }}>
          {NAV_LINKS.map((l) => (
            <div
              key={l.id}
              onClick={() => navigate(l.id)}
              style={{
                padding: "12px 0", fontSize: 15, fontWeight: page === l.id ? 700 : 500,
                color: page === l.id ? T.blue : T.text,
                borderBottom: `1px solid ${T.border}`, cursor: "pointer",
              }}
            >
              {l.label}
            </div>
          ))}
          <button
            onClick={() => navigate("kuesioner")}
            style={{
              marginTop: 16, width: "100%", background: T.blue, color: "#fff",
              border: "none", borderRadius: 10, padding: "12px", fontWeight: 700,
              fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Isi Kuesioner →
          </button>
        </div>
      )}
    </>
  );
}