import { useState } from "react";
import { T } from "../styles/tokens";
import SectionLabel from "../components/ui/SectionLabel";

const FEATURES = [
  {
    icon: "🧠",
    title: "Teknologi SOM-m-AT",
    desc: "Sistem menggunakan metode pengelompokan cerdas yang secara otomatis mengenali kemiripan pola belajar antar siswa tanpa perlu penilaian manual dari guru.",
  },
  {
    icon: "📊",
    title: "Visualisasi Kelompok Siswa",
    desc: "Hasil analisis ditampilkan dalam bentuk grafik yang mudah dipahami, membantu guru melihat pola cara belajar siswa secara keseluruhan.",
  },
  {
    icon: "💡",
    title: "Informasi untuk Guru",
    desc: "Sistem menyajikan informasi siapa saja siswa yang paling mirip pola belajarnya, sehingga guru bisa memberikan bimbingan yang lebih tepat sasaran.",
  },
  {
    icon: "🖥️",
    title: "Data dari Monsakun",
    desc: "Data bersumber dari aktivitas nyata siswa SD saat mengerjakan 12 tugas penyusunan soal matematika di platform Monsakun, level 5.",
  },
];

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Data Aktivitas Siswa",
    desc: "Sistem membaca rekaman aktivitas 39 siswa dari platform Monsakun — 12 tugas penyusunan soal matematika level 5.",
  },
  {
    num: "02",
    title: "13 Informasi per Siswa",
    desc: "Setiap aktivitas siswa diolah menjadi 13 informasi penting: lama mengerjakan, jumlah langkah, kesalahan, penggunaan kartu, dan variasi susunan.",
  },
  {
    num: "03",
    title: "Pengelompokan Otomatis",
    desc: "Sistem mengelompokkan siswa ke dalam 3 kelompok berdasarkan kemiripan cara mereka mengerjakan soal — tanpa penilaian manual.",
  },
  {
    num: "04",
    title: "Informasi untuk Guru",
    desc: "Hasil pengelompokan ditampilkan dalam grafik, beserta siapa saja siswa yang paling mirip pola belajarnya di setiap tugas.",
  },
];

/* ── Ilustrasi SVG Guru & Murid ────────────────────────────────────────── */
function IllustrationHero() {
  return (
    <svg
      viewBox="0 0 320 260"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 320, height: "auto" }}
    >
      {/* ── Background shapes ── */}
      <circle cx="160" cy="130" r="110" fill="#eff6ff" opacity="0.6" />
      <circle cx="80" cy="200" r="40" fill="#dbeafe" opacity="0.4" />
      <circle cx="250" cy="60" r="30" fill="#bfdbfe" opacity="0.35" />

      {/* ══ GURU (kiri) ══ */}
      <rect x="42" y="130" width="54" height="70" rx="10" fill="#2563eb" />
      <circle cx="69" cy="115" r="22" fill="#fcd34d" />
      <ellipse cx="69" cy="97" rx="22" ry="10" fill="#1e3a5f" />
      <circle cx="62" cy="114" r="3" fill="#1e3a5f" />
      <circle cx="76" cy="114" r="3" fill="#1e3a5f" />
      <path d="M62 121 Q69 127 76 121" stroke="#1e3a5f" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <polygon points="69,130 65,148 69,155 73,148" fill="#60a5fa" />
      <rect x="18" y="140" width="26" height="4" rx="2" fill="#2563eb" />
      <rect x="94" y="140" width="20" height="4" rx="2" fill="#2563eb" />
      <rect x="50" y="198" width="14" height="22" rx="4" fill="#1e3a5f" />
      <rect x="72" y="198" width="14" height="22" rx="4" fill="#1e3a5f" />
      <ellipse cx="57" cy="220" rx="10" ry="4" fill="#0f172a" />
      <ellipse cx="79" cy="220" rx="10" ry="4" fill="#0f172a" />

      {/* Papan tulis */}
      <rect x="10" y="108" width="48" height="34" rx="4" fill="#1e3a5f" />
      <rect x="13" y="111" width="42" height="28" rx="2" fill="#1e40af" />
      <text x="34" y="121" textAnchor="middle" fill="#93c5fd" fontSize="5" fontWeight="bold">SOM</text>
      <text x="34" y="129" textAnchor="middle" fill="#60a5fa" fontSize="4">m-AT</text>
      <line x1="17" y1="132" x2="51" y2="132" stroke="#3b82f6" strokeWidth="0.8" />
      <line x1="22" y1="142" x2="22" y2="150" stroke="#1e3a5f" strokeWidth="2" />
      <line x1="46" y1="142" x2="46" y2="150" stroke="#1e3a5f" strokeWidth="2" />

      {/* ══ MURID 1 (tengah kanan) ══ */}
      <rect x="135" y="148" width="46" height="58" rx="9" fill="#16a34a" />
      <circle cx="158" cy="133" r="18" fill="#fcd34d" />
      <ellipse cx="158" cy="118" rx="18" ry="8" fill="#92400e" />
      <circle cx="153" cy="132" r="2.5" fill="#1e3a5f" />
      <circle cx="163" cy="132" r="2.5" fill="#1e3a5f" />
      <path d="M152 138 Q158 143 164 138" stroke="#1e3a5f" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="120" y="158" width="18" height="24" rx="2" fill="#fef3c7" />
      <rect x="121" y="162" width="16" height="1.5" rx="1" fill="#d97706" />
      <rect x="121" y="166" width="12" height="1.5" rx="1" fill="#d97706" />
      <rect x="121" y="170" width="14" height="1.5" rx="1" fill="#d97706" />
      <rect x="143" y="204" width="12" height="18" rx="4" fill="#166534" />
      <rect x="160" y="204" width="12" height="18" rx="4" fill="#166534" />
      <ellipse cx="149" cy="222" rx="9" ry="3.5" fill="#0f172a" />
      <ellipse cx="166" cy="222" rx="9" ry="3.5" fill="#0f172a" />

      {/* ══ MURID 2 (kanan) ══ */}
      <rect x="210" y="152" width="44" height="54" rx="9" fill="#dc2626" />
      <circle cx="232" cy="137" r="18" fill="#fcd34d" />
      <ellipse cx="232" cy="122" rx="18" ry="8" fill="#1e3a5f" />
      <ellipse cx="222" cy="128" rx="7" ry="5" fill="#1e3a5f" />
      <circle cx="227" cy="136" r="2.5" fill="#1e3a5f" />
      <circle cx="237" cy="136" r="2.5" fill="#1e3a5f" />
      <path d="M226 143 Q232 148 238 143" stroke="#1e3a5f" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="252" y="162" width="22" height="28" rx="3" fill="#e2e8f0" />
      <rect x="254" y="165" width="18" height="20" rx="2" fill="#93c5fd" />
      <circle cx="263" cy="188" r="2" fill="#94a3b8" />
      <rect x="217" y="204" width="12" height="18" rx="4" fill="#991b1b" />
      <rect x="234" y="204" width="12" height="18" rx="4" fill="#991b1b" />
      <ellipse cx="223" cy="222" rx="9" ry="3.5" fill="#0f172a" />
      <ellipse cx="240" cy="222" rx="9" ry="3.5" fill="#0f172a" />

      {/* ══ Elemen dekoratif ══ */}
      <text x="108" y="105" fontSize="14" fill="#fbbf24">★</text>
      <text x="285" y="140" fontSize="10" fill="#60a5fa">★</text>
      <text x="180" y="88" fontSize="8" fill="#34d399">✦</text>
      <line x1="20" y1="228" x2="300" y2="228" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4,4" />

      {/* Label kelompok di atas kepala murid */}
      <rect x="138" y="108" width="40" height="14" rx="7" fill="#dcfce7" />
      <text x="158" y="119" textAnchor="middle" fill="#16a34a" fontSize="6" fontWeight="bold">Kelompok 1</text>
      <rect x="210" y="112" width="44" height="14" rx="7" fill="#fef3c7" />
      <text x="232" y="123" textAnchor="middle" fill="#d97706" fontSize="6" fontWeight="bold">Kelompok 2</text>
    </svg>
  );
}

export default function PageHome({ setPage }) {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ══ HERO ══ */}
      <section className="hero-section">
        {/* BG decorations */}
        <div className="dot-grid" style={{ position: "absolute", top: 40, right: 80, width: 200, height: 200, opacity: 0.4 }} />
        <div className="dot-grid" style={{ position: "absolute", bottom: 60, left: 0, width: 160, height: 140, opacity: 0.3 }} />
        <div style={{ position: "absolute", top: "25%", right: "6%", width: 16, height: 16, borderRadius: 99, border: `2px solid ${T.blue}`, opacity: 0.4 }} />
        <div style={{ position: "absolute", bottom: "20%", right: "22%", width: 10, height: 10, borderRadius: 99, background: T.blue, opacity: 0.25 }} />

        {/* Left */}
        <div className="hero-left">
          <div className="fade-up" style={{ animationDelay: ".05s" }}>
            <SectionLabel>LEARNING ADVISORY SYSTEM</SectionLabel>
          </div>
          <h1
            className="fade-up"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 50,
              lineHeight: 1.1,
              color: T.text,
              margin: "14px 0 20px",
              animationDelay: ".12s",
            }}
          >
            Leaning Advisory System
            <br />
            dengan <span style={{ color: T.blue }}>SOM-m-AT</span>
          </h1>
          <p
            className="fade-up"
            style={{
              color: T.sub,
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 420,
              marginBottom: 32,
              animationDelay: ".2s",
            }}
          >
            Sistem yang mengelompokkan siswa berdasarkan kemiripan pola belajar
            dari data aktivitas mengerjakan soal matematika di platform{" "}
            <strong>Monsakun</strong>, untuk membantu guru memahami karakteristik
            belajar setiap siswa secara lebih mudah dan cepat.
          </p>
          <div className="fade-up hero-btn-row" style={{ display: "flex", gap: 14, animationDelay: ".28s" }}>
            <button
              className="btn-primary"
              onClick={() => setPage("informasi")}
              style={{
                background: T.blue, color: "#fff", border: "none",
                borderRadius: 10, padding: "13px 28px",
                fontWeight: 600, fontSize: 15, cursor: "pointer",
              }}
            >
              Pelajari Sistem →
            </button>
            <button
              className="btn-outline"
              onClick={() => setPage("visualisasi")}
              style={{
                background: "transparent", color: T.blue,
                border: `1.5px solid ${T.blue}`, borderRadius: 10,
                padding: "13px 28px", fontWeight: 600, fontSize: 15, cursor: "pointer",
              }}
            >
              Lihat Hasil Pengelompokan
            </button>
          </div>
        </div>

        {/* Right visual */}
        <div className="hero-right">
          {/* BG blob */}
          <div style={{
            position: "absolute", width: 420, height: 420, borderRadius: 99999,
            background: "linear-gradient(135deg,#dbeafe50,#bfdbfe28)",
            right: -20, top: "50%", transform: "translateY(-50%)",
          }} />

          {/* Dashed rings */}
          <div style={{ position: "absolute", width: 100, height: 100, borderRadius: 99999, border: "2px dashed #2563eb25", top: 40, right: 40 }} />
          <div style={{ position: "absolute", width: 48, height: 48, borderRadius: 99999, border: "2px solid #2563eb30", bottom: 100, left: 50 }} />

          {/* Dot clusters */}
          <div style={{ position: "absolute", top: 70, left: 60, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7 }}>
            {Array(16).fill(0).map((_, i) => (
              <div key={i} style={{ width: 4, height: 4, borderRadius: 99, background: T.blue, opacity: 0.18 }} />
            ))}
          </div>
          <div style={{ position: "absolute", bottom: 45, right: 25, display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 7 }}>
            {Array(20).fill(0).map((_, i) => (
              <div key={i} style={{ width: 4, height: 4, borderRadius: 99, background: T.blue, opacity: 0.14 }} />
            ))}
          </div>

          {/* Ilustrasi SVG */}
          <div
            className="float-card"
            style={{
              position: "absolute", zIndex: 4,
              top: "50%", left: "50%", transform: "translate(-38%, -52%)",
              background: "#fff", borderRadius: 24, padding: "20px 16px", width: 300,
              boxShadow: "0 24px 60px rgba(37,99,235,.14)", border: "1px solid #e2e8f0",
            }}
          >
            <IllustrationHero />
            <div style={{
              marginTop: 10, background: "#eff6ff", borderRadius: 8,
              padding: "8px 12px", display: "flex", justifyContent: "space-between",
            }}>
              <span style={{ fontSize: 11, color: T.sub }}>Data dari Monsakun</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: T.blue }}>13 Informasi</span>
            </div>
          </div>

          {/* Accent: fitur input */}
          <div style={{
            position: "absolute", top: 40, right: 15, zIndex: 5,
            background: "#fff", borderRadius: 14, padding: "14px 18px",
            boxShadow: "0 8px 28px rgba(37,99,235,.13)", border: "1px solid #e2e8f0",
          }}>
            <div style={{ fontSize: 10, color: T.muted, fontWeight: 700, letterSpacing: 1 }}>INFORMASI SISWA</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: T.blue, lineHeight: 1.2 }}>13</div>
            <div style={{ fontSize: 11, color: T.green, fontWeight: 600, marginTop: 4 }}>✓ Per tugas per siswa</div>
          </div>

          {/* Accent: platform */}
          <div style={{
            position: "absolute", top: 115, left: 5, zIndex: 5,
            background: "#fff", borderRadius: 14, padding: "12px 16px",
            boxShadow: "0 8px 24px rgba(0,0,0,.08)", border: "1px solid #e2e8f0",
            maxWidth: 195,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 99, background: "#fef3c7",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13,
              }}>🖥️</div>
              <span style={{ fontSize: 12, fontWeight: 700, color: T.text }}>Platform Monsakun</span>
            </div>
            <div style={{ fontSize: 11, color: T.sub, lineHeight: 1.5 }}>
              12 tugas penyusunan soal
              <br />
              matematika level 5
            </div>
          </div>

          {/* Accent: jumlah siswa */}
          <div style={{
            position: "absolute", bottom: 70, left: 15, zIndex: 5,
            background: "#fff", borderRadius: 14, padding: "14px 18px",
            boxShadow: "0 8px 24px rgba(0,0,0,.08)", border: "1px solid #e2e8f0",
          }}>
            <div style={{ fontSize: 10, color: T.muted, fontWeight: 700, letterSpacing: 1 }}>JUMLAH SISWA</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: T.amber, lineHeight: 1.2 }}>39</div>
            <div style={{ fontSize: 11, color: T.muted, marginTop: 4 }}>Siswa SD</div>
          </div>

          {/* Accent: jumlah kelompok */}
          <div style={{
            position: "absolute", bottom: 50, right: 8, zIndex: 5,
            background: "#fff", borderRadius: 14, padding: "14px 18px",
            boxShadow: "0 8px 24px rgba(0,0,0,.08)", border: "1px solid #e2e8f0",
            width: 170,
          }}>
            <div style={{ fontSize: 10, color: T.muted, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>
              HASIL PENGELOMPOKAN
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, marginBottom: 6 }}>
              {[
                { label: "Kelompok 1", color: T.green },
                { label: "Kelompok 2", color: T.amber },
                { label: "Kelompok 3", color: T.red },
              ].map((g) => (
                <div key={g.label} style={{
                  borderRadius: 8, padding: "6px 4px", textAlign: "center",
                  background: g.color + "20",
                }}>
                  <div style={{ fontSize: 9, color: g.color, fontWeight: 700, lineHeight: 1.3 }}>{g.label}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 10, color: T.muted }}>3 kelompok pola belajar</div>
          </div>
        </div>
      </section>

      {/* ══ FITUR ══ */}
      <section
        className="page-section"
        style={{ padding: "64px 48px", background: "#fff", borderTop: "1px solid #e2e8f0" }}
      >
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <SectionLabel>FITUR SISTEM</SectionLabel>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, marginTop: 8 }}>
            Apa yang Ditawarkan Sistem Ini?
          </h2>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card-hover"
              style={{
                background: T.bg, borderRadius: 16, padding: "28px 24px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 16, color: T.text, marginBottom: 8 }}>{f.title}</div>
              <div style={{ fontSize: 14, color: T.sub, lineHeight: 1.7 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="page-section" style={{ padding: "64px 48px", background: T.bg }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <SectionLabel>ALUR SISTEM</SectionLabel>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, marginTop: 8 }}>
            Cara Kerja Learning Advisory System
          </h2>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, maxWidth: 1000, margin: "0 auto" }}
          className="how-it-works-grid"
        >
          {HOW_IT_WORKS.map((s, i) => (
            <div key={s.num} style={{ position: "relative" }}>
              {i < HOW_IT_WORKS.length - 1 && (
                <div style={{
                  position: "absolute", top: 24, left: "calc(100% - 10px)",
                  width: 20, height: 2, background: `${T.blue}40`, zIndex: 1,
                }} />
              )}
              <div style={{
                background: "#fff", borderRadius: 16, padding: "24px 20px",
                border: "1px solid #e2e8f0", height: "100%",
              }}>
                <div style={{
                  fontSize: 28, fontWeight: 800, color: `${T.blue}30`,
                  marginBottom: 12, fontFamily: "'DM Serif Display', serif",
                }}>
                  {s.num}
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: T.text, marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: T.sub, lineHeight: 1.65 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ VIDEO ══ */}
      <section
        className="page-section"
        style={{ padding: "64px 48px", background: "#fff", borderTop: "1px solid #e2e8f0" }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <SectionLabel>VIDEO PENJELASAN</SectionLabel>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, marginTop: 8 }}>
              1 Menit Memahami Sistem LAS
            </h2>
            <p style={{ color: T.sub, fontSize: 15, marginTop: 10, maxWidth: 500, margin: "10px auto 0" }}>
              Tonton video animasi berikut untuk memahami cara kerja sistem dan
              bagaimana hasil pengelompokan siswa disajikan kepada guru.
            </p>
          </div>

          <div className="video-section-grid" style={{ display: "flex", gap: 40, alignItems: "center" }}>
            <div className="video-embed" style={{ flex: "1 1 0", minWidth: 0 }}>
              <div style={{
                position: "relative", paddingTop: "56.25%", borderRadius: 16,
                overflow: "hidden", boxShadow: "0 24px 60px rgba(37,99,235,.15)",
                border: "1px solid #e2e8f0",
              }}>
                <iframe
                  src="https://www.youtube.com/embed/UVJFSKYMowg"
                  title="1 Menit Memahami Learning Advisory System"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
            </div>

            <div style={{ flex: "1 1 0", minWidth: 0 }}>
              <div style={{ fontSize: 10, color: T.blue, fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>
                APA YANG AKAN DIPELAJARI
              </div>
              {[
                { icon: "🖥️", text: "Cara platform Monsakun merekam aktivitas siswa saat mengerjakan soal matematika" },
                { icon: "🧠", text: "Bagaimana sistem mengelompokkan siswa secara otomatis berdasarkan kemiripan cara belajar" },
                { icon: "📊", text: "Cara membaca hasil pengelompokan siswa melalui tampilan grafik di website ini" },
                { icon: "🎯", text: "Bagaimana guru bisa menggunakan informasi ini untuk memberikan bimbingan yang lebih tepat" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 12,
                  padding: "12px 0", borderBottom: `1px solid ${T.border}`,
                }}>
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                  <span style={{ fontSize: 14, color: T.sub, lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
              <div style={{ marginTop: 16, display: "flex", gap: 16 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: T.blue }}>1:28</div>
                  <div style={{ fontSize: 11, color: T.muted }}>Durasi</div>
                </div>
                <div style={{ width: 1, background: T.border }} />
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: T.green }}>HD</div>
                  <div style={{ fontSize: 11, color: T.muted }}>Kualitas</div>
                </div>
                <div style={{ width: 1, background: T.border }} />
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: T.amber }}>ID</div>
                  <div style={{ fontSize: 11, color: T.muted }}>Bahasa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section style={{ padding: "64px 48px", background: `linear-gradient(135deg, ${T.blue}, #1d4ed8)` }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: "#fff", marginBottom: 16 }}>
            Siap Mencoba Sistem Ini?
          </h2>
          <p style={{ color: "rgba(255,255,255,.8)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Pelajari cara kerja sistem, lihat hasil pengelompokan siswa, dan isi
            kuesioner untuk membantu penelitian ini.
          </p>
          <div className="cta-btn-row" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => setPage("informasi")}
              style={{
                background: "#fff", color: T.blue, border: "none",
                borderRadius: 10, padding: "13px 28px", fontWeight: 700, fontSize: 15, cursor: "pointer",
              }}
            >
              Pelajari Sistem
            </button>
            <button
              onClick={() => setPage("kuesioner")}
              style={{
                background: "transparent", color: "#fff",
                border: "2px solid rgba(255,255,255,.6)",
                borderRadius: 10, padding: "13px 28px", fontWeight: 600, fontSize: 15, cursor: "pointer",
              }}
            >
              Isi Kuesioner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}