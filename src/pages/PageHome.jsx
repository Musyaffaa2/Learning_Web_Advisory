import { useState } from "react";
import { T } from "../styles/tokens";
import SectionLabel from "../components/ui/SectionLabel";
import Badge from "../components/ui/Badge";
import { students } from "../data/students";

const HERO_PREVIEW = students.slice(0, 3).map((s) => ({
  name: s.name, nilai: s.nilai, status: s.status,
}));

const FEATURES = [
  { icon: "📊", title: "Dashboard Visual",    desc: "Pantau nilai, aktivitas, dan status semua siswa dalam satu tampilan ringkas." },
  { icon: "🔍", title: "Analisis Mendalam",    desc: "Lihat detail performa tiap siswa dengan grafik metrik yang mudah dipahami." },
  { icon: "💡", title: "Rekomendasi Otomatis", desc: "Sistem memberikan saran tindak lanjut berbasis pola kesalahan yang terdeteksi." },
];

const FLOW_STEPS = [
  "Data Aktivitas Siswa", "Analisis Pola Belajar",
  "Identifikasi Kelemahan", "Rekomendasi Strategi", "Tindak Lanjut",
];

const PERF_BARS = [
  { label: "Baik",      pct: 37, color: T.green },
  { label: "Cukup",     pct: 25, color: T.amber },
  { label: "Perhatian", pct: 38, color: T.red   },
];

const ACTIVITIES = [
  { dot: T.green, text: "Eva menyelesaikan latihan" },
  { dot: T.red,   text: "Budi butuh remedial" },
  { dot: T.amber, text: "Citra naik ke level Baik" },
];

/* ── Video modal ─────────────────────────────────────────────────────────── */
function VideoModal({ onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(0,0,0,.7)", backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: 860, position: "relative" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: -40, right: 0, background: "none",
            border: "none", color: "#fff", fontSize: 24, cursor: "pointer", fontWeight: 700,
          }}
        >
          ✕
        </button>
        <div className="video-wrapper">
          {/* Replace the src below with your actual video URL / YouTube embed */}
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Penjelasan Learning Advisory System"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function PageHome({ setPage }) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="hero-section">
        <div className="dot-grid" style={{ position: "absolute", top: 40, right: 80, width: 200, height: 180, opacity: 0.4 }} />
        <div className="dot-grid" style={{ position: "absolute", bottom: 60, left: 20, width: 160, height: 140, opacity: 0.3 }} />

        {/* Left text */}
        <div className="hero-left">
          <div className="fade-up" style={{ animationDelay: ".05s" }}>
            <SectionLabel>LEARNING ADVISORY SYSTEM</SectionLabel>
          </div>
          <h1 className="fade-up hero-left" style={{
            fontFamily: "'DM Serif Display', serif", fontSize: 52, lineHeight: 1.1,
            color: T.text, margin: "14px 0 20px", animationDelay: ".12s",
          }}>
            <span style={{ color: T.blue }}>Sistem Cerdas</span> untuk<br />Pembelajaran Siswa
          </h1>
          <p className="fade-up" style={{
            color: T.sub, fontSize: 16, lineHeight: 1.75,
            maxWidth: 400, marginBottom: 32, animationDelay: ".2s",
          }}>
            Pantau performa belajar siswa secara real-time, identifikasi kelemahan,
            dan dapatkan rekomendasi strategi pembelajaran yang tepat sasaran.
          </p>
          <div className="fade-up hero-btn-row" style={{ display: "flex", gap: 14, animationDelay: ".28s" }}>
            <button className="btn-primary" onClick={() => setPage("dashboard")} style={{
              background: T.blue, color: "#fff", border: "none",
              borderRadius: 10, padding: "13px 28px", fontWeight: 600, fontSize: 15, cursor: "pointer",
            }}>
              Lihat Dashboard →
            </button>
            <button className="btn-outline" onClick={() => setPage("kuesioner")} style={{
              background: "transparent", color: T.blue, border: `1.5px solid ${T.blue}`,
              borderRadius: 10, padding: "13px 28px", fontWeight: 600, fontSize: 15, cursor: "pointer",
            }}>
              Isi Kuesioner
            </button>
          </div>
        </div>

        {/* Right visual */}
        <div className="hero-right">
          {/* BG blobs */}
          <div style={{ position: "absolute", width: 440, height: 440, borderRadius: 99999, background: "linear-gradient(135deg,#dbeafe55,#bfdbfe30)", right: -20, top: "50%", transform: "translateY(-50%)" }} />
          <div style={{ position: "absolute", width: 180, height: 180, borderRadius: 99999, background: "#bfdbfe20", left: 30, bottom: 30 }} />

          {/* Decorative rings */}
          <div style={{ position: "absolute", width: 90, height: 90, borderRadius: 99999, border: "2px dashed #2563eb28", top: 50, right: 50 }} />
          <div style={{ position: "absolute", width: 44, height: 44, borderRadius: 99999, border: "2px solid #2563eb35", bottom: 110, left: 55 }} />

          {/* Dot clusters */}
          <div style={{ position: "absolute", top: 70, left: 70, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7 }}>
            {Array(16).fill(0).map((_, i) => <div key={i} style={{ width: 4, height: 4, borderRadius: 99, background: T.blue, opacity: 0.18 }} />)}
          </div>
          <div style={{ position: "absolute", bottom: 50, right: 30, display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 7 }}>
            {Array(20).fill(0).map((_, i) => <div key={i} style={{ width: 4, height: 4, borderRadius: 99, background: T.blue, opacity: 0.14 }} />)}
          </div>

          {/* ── Main floating card ── */}
          <div className="float-card hero-visual-cards" style={{
            position: "absolute", zIndex: 4,
            top: "50%", left: "50%", transform: "translate(-34%, -50%) rotate(-2deg)",
            background: "#fff", borderRadius: 20, padding: 22, width: 285,
            boxShadow: "0 24px 60px rgba(37,99,235,.16)", border: "1px solid #e2e8f0",
          }}>
            <div style={{ fontSize: 10, color: T.muted, fontWeight: 700, marginBottom: 12, letterSpacing: 1 }}>RINGKASAN KELAS V-A</div>
            {HERO_PREVIEW.map((s) => (
              <div key={s.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #e2e8f0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 99, background: "#eff6ff", color: T.blue, fontWeight: 700, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.name[0]}</div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: T.text }}>{s.name}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: T.text }}>{s.nilai}</span>
                  <Badge s={s.status} />
                </div>
              </div>
            ))}
            <div style={{ marginTop: 12, background: "#eff6ff", borderRadius: 8, padding: "9px 12px", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 11, color: T.sub }}>Rata-rata kelas</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: T.blue }}>79.0</span>
            </div>
          </div>

          {/* Accent cards */}
          <div className="accent-card keep" style={{ position: "absolute", top: 40, right: 20, zIndex: 5, background: "#fff", borderRadius: 14, padding: "14px 18px", boxShadow: "0 8px 28px rgba(37,99,235,.13)", border: "1px solid #e2e8f0" }}>
            <div style={{ fontSize: 10, color: T.muted, fontWeight: 700, letterSpacing: 1 }}>RATA-RATA NILAI</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: T.blue, lineHeight: 1.2 }}>73.2</div>
            <div style={{ fontSize: 11, color: T.green, fontWeight: 600, marginTop: 4 }}>↑ +4.2 minggu ini</div>
          </div>

          <div className="accent-card" style={{ position: "absolute", top: 110, left: 10, zIndex: 5, background: "#fff", borderRadius: 14, padding: "12px 16px", boxShadow: "0 8px 24px rgba(0,0,0,.08)", border: "1px solid #e2e8f0", maxWidth: 200 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <div style={{ width: 28, height: 28, borderRadius: 99, background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>💡</div>
              <span style={{ fontSize: 12, fontWeight: 700, color: T.text }}>Rekomendasi Baru</span>
            </div>
            <div style={{ fontSize: 11, color: T.sub, lineHeight: 1.5 }}>3 siswa memerlukan<br />tindak lanjut segera</div>
          </div>

          <div className="accent-card" style={{ position: "absolute", top: "38%", right: 0, zIndex: 5, background: "#fff", borderRadius: 14, padding: "12px 16px", boxShadow: "0 8px 24px rgba(0,0,0,.08)", border: "1px solid #e2e8f0", maxWidth: 195 }}>
            <div style={{ fontSize: 10, color: T.muted, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>AKTIVITAS TERBARU</div>
            {ACTIVITIES.map((a, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 7 }}>
                <div style={{ width: 7, height: 7, borderRadius: 99, background: a.dot, marginTop: 3, flexShrink: 0 }} />
                <span style={{ fontSize: 11, color: T.sub, lineHeight: 1.4 }}>{a.text}</span>
              </div>
            ))}
          </div>

          <div className="accent-card keep" style={{ position: "absolute", bottom: 70, left: 20, zIndex: 5, background: "#fff", borderRadius: 14, padding: "14px 18px", boxShadow: "0 8px 24px rgba(0,0,0,.08)", border: "1px solid #e2e8f0" }}>
            <div style={{ fontSize: 10, color: T.muted, fontWeight: 700, letterSpacing: 1 }}>SISWA AKTIF</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: T.green, lineHeight: 1.2 }}>8 / 8</div>
            <div style={{ fontSize: 11, color: T.muted, marginTop: 4 }}>Semester Ganjil</div>
          </div>

          <div className="accent-card" style={{ position: "absolute", bottom: 50, right: 10, zIndex: 5, background: "#fff", borderRadius: 14, padding: "14px 18px", boxShadow: "0 8px 24px rgba(0,0,0,.08)", border: "1px solid #e2e8f0", width: 175 }}>
            <div style={{ fontSize: 10, color: T.muted, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>PERFORMA KELAS</div>
            {PERF_BARS.map((p) => (
              <div key={p.label} style={{ marginBottom: 7 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginBottom: 3 }}>
                  <span style={{ color: T.sub }}>{p.label}</span>
                  <span style={{ color: p.color, fontWeight: 700 }}>{p.pct}%</span>
                </div>
                <div style={{ background: "#e2e8f0", borderRadius: 99, height: 5 }}>
                  <div style={{ width: `${p.pct}%`, height: "100%", background: p.color, borderRadius: 99 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURES
      ══════════════════════════════════════ */}
      <section style={{ padding: "60px 48px", background: "#fff", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <SectionLabel>FITUR UTAMA</SectionLabel>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, marginTop: 8 }}>
            Semua yang Guru Butuhkan
          </h2>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="card-hover" style={{ background: "#f8f9fc", borderRadius: 16, padding: "28px 24px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 16, color: T.text, marginBottom: 8 }}>{f.title}</div>
              <div style={{ fontSize: 14, color: T.sub, lineHeight: 1.65 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          VIDEO PENJELASAN
      ══════════════════════════════════════ */}
      <section style={{ padding: "72px 48px", background: T.bg }}>
        <div className="video-section-grid" style={{ display: "flex", gap: 56, alignItems: "center", maxWidth: 1100, margin: "0 auto" }}>

          {/* Left: text */}
          <div style={{ flex: "0 0 380px", minWidth: 0 }}>
            <SectionLabel>VIDEO PENJELASAN</SectionLabel>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, margin: "12px 0 16px", lineHeight: 1.15 }}>
              Pahami Cara Kerja<br /><span style={{ color: T.blue }}>Sistem LAS</span>
            </h2>
            <p style={{ color: T.sub, fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>
              Tonton video singkat ini untuk memahami bagaimana Learning Advisory System membantu guru mengidentifikasi kelemahan siswa dan memberikan rekomendasi yang tepat.
            </p>

            {/* Checklist */}
            {[
              "Cara membaca dashboard performa siswa",
              "Memahami indikator analisis belajar",
              "Menggunakan rekomendasi pembelajaran",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 20, height: 20, borderRadius: 99, background: T.blue + "18", color: T.blue, fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>✓</div>
                <span style={{ fontSize: 14, color: T.sub, lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}

            <button
              className="btn-primary"
              onClick={() => setVideoOpen(true)}
              style={{ marginTop: 8, background: T.blue, color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontWeight: 600, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
            >
              <span style={{ fontSize: 16 }}>▶</span> Tonton Video
            </button>
          </div>

          {/* Right: video thumbnail */}
          <div style={{ flex: 1, minWidth: 0, position: "relative" }}>
            {/* Decorative bg */}
            <div style={{ position: "absolute", inset: -12, borderRadius: 24, background: `linear-gradient(135deg, ${T.blue}15, #93c5fd20)`, zIndex: 0 }} />

            {/* Thumbnail card */}
            <div style={{ position: "relative", zIndex: 1, borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 60px rgba(37,99,235,.15)", border: "1px solid #e2e8f0" }}>
              {/* Fake thumbnail - replace with actual screenshot */}
              <div style={{ paddingTop: "56.25%", background: "linear-gradient(135deg, #1e3a5f, #0f172a)", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
                  {/* Fake dashboard preview */}
                  <div style={{ width: "80%", background: "rgba(255,255,255,.06)", borderRadius: 12, padding: "16px 20px", border: "1px solid rgba(255,255,255,.1)" }}>
                    <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                      {[T.blue, T.green, T.amber, T.red].map((c, i) => (
                        <div key={i} style={{ flex: 1, background: c + "33", borderRadius: 8, padding: "8px 0", textAlign: "center" }}>
                          <div style={{ color: c, fontSize: 14, fontWeight: 800 }}>{[88, 91, 75, 58][i]}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ height: 4, background: "rgba(255,255,255,.1)", borderRadius: 99, overflow: "hidden" }}>
                      <div style={{ width: "73%", height: "100%", background: `linear-gradient(90deg, ${T.blue}, #60a5fa)`, borderRadius: 99 }} />
                    </div>
                  </div>

                  {/* Play button */}
                  <button
                    onClick={() => setVideoOpen(true)}
                    className="play-btn-pulse"
                    style={{
                      position: "relative",
                      width: 64, height: 64, borderRadius: 99,
                      background: T.blue, border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: `0 8px 32px ${T.blue}66`,
                    }}
                  >
                    <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "18px solid #fff", marginLeft: 4 }} />
                  </button>

                  <span style={{ color: "rgba(255,255,255,.6)", fontSize: 13 }}>Klik untuk memutar video</span>
                </div>
              </div>
            </div>

            {/* Duration badge */}
            <div style={{ position: "absolute", bottom: 16, right: 16, zIndex: 2, background: "rgba(0,0,0,.7)", borderRadius: 6, padding: "4px 10px" }}>
              <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>▶ 3:24</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section style={{ padding: "60px 48px", background: "#fff", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <SectionLabel>CARA KERJA</SectionLabel>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, marginTop: 8 }}>
            Alur Sistem
          </h2>
        </div>
        <div className="flow-steps-row" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", maxWidth: 860, margin: "0 auto" }}>
          {FLOW_STEPS.map((s, i, a) => (
            <div key={s} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ background: T.bg, border: "1.5px solid #2563eb33", borderRadius: 12, padding: "12px 18px", fontSize: 13, fontWeight: 600, color: T.blue, textAlign: "center", maxWidth: 130 }}>
                {s}
              </div>
              {i < a.length - 1 && <div className="flow-arrow" style={{ color: T.muted, margin: "0 8px", fontSize: 18 }}>→</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
