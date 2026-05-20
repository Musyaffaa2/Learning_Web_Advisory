import { useState } from "react";
import { T } from "../styles/tokens";
import SectionLabel from "../components/ui/SectionLabel";

const FEATURES = [
  {
    icon: "🧠",
    title: "SOM-m-AT",
    desc: "Metode Self-Organizing Map modifikasi berbasis Adaptive Training untuk mengklasterisasi pola belajar siswa secara otomatis.",
  },
  {
    icon: "📊",
    title: "Visualisasi Cluster",
    desc: "Hasil analisis ditampilkan dalam bentuk grafik yang mudah dipahami, membantu guru melihat pola kemampuan siswa.",
  },
  {
    icon: "💡",
    title: "Insight Pembelajaran",
    desc: "Sistem menyajikan informasi pola belajar siswa sebagai bahan pertimbangan guru dalam pengambilan keputusan.",
  },
  {
    icon: "📝",
    title: "Evaluasi TAM2",
    desc: "Penerimaan teknologi diukur menggunakan model TAM2 melalui kuesioner terstruktur yang diisi oleh guru.",
  },
];

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Data Monsakun",
    desc: "Data aktivitas problem posing siswa dari platform Monsakun digunakan sebagai input sistem.",
  },
  {
    num: "02",
    title: "Ekstraksi 13 Fitur",
    desc: "Setiap hasil pekerjaan siswa diolah menjadi 13 fitur yang merepresentasikan pola penyusunan soal.",
  },
  {
    num: "03",
    title: "Proses SOM-m-AT",
    desc: "Algoritma menganalisis pola dan mengelompokkan siswa ke dalam cluster berdasarkan kemiripan pola belajar.",
  },
  {
    num: "04",
    title: "Visualisasi & Evaluasi",
    desc: "Hasil klasterisasi ditampilkan dalam grafik, lalu guru diminta mengisi kuesioner penerimaan teknologi.",
  },
];

export default function PageHome({ setPage }) {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ══ HERO ══ */}
      <section className="hero-section">
        {/* BG decorations */}
        <div
          className="dot-grid"
          style={{
            position: "absolute",
            top: 40,
            right: 80,
            width: 200,
            height: 200,
            opacity: 0.4,
          }}
        />
        <div
          className="dot-grid"
          style={{
            position: "absolute",
            bottom: 60,
            left: 0,
            width: 160,
            height: 140,
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "25%",
            right: "6%",
            width: 16,
            height: 16,
            borderRadius: 99,
            border: `2px solid ${T.blue}`,
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "22%",
            width: 10,
            height: 10,
            borderRadius: 99,
            background: T.blue,
            opacity: 0.25,
          }}
        />

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
            Sistem Penasihat Pembelajaran
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
            Sistem yang mengklasterisasi pola belajar siswa berdasarkan data
            aktivitas <strong>problem posing</strong> dari platform{" "}
            <strong>Monsakun</strong>, menggunakan metode{" "}
            <strong>Self-Organizing Map modifikasi Adaptive Training</strong>,
            untuk membantu guru memahami karakteristik belajar siswa.
          </p>
          <div
            className="fade-up hero-btn-row"
            style={{ display: "flex", gap: 14, animationDelay: ".28s" }}
          >
            <button
              className="btn-primary"
              onClick={() => setPage("informasi")}
              style={{
                background: T.blue,
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "13px 28px",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Pelajari Metode →
            </button>
            <button
              className="btn-outline"
              onClick={() => setPage("visualisasi")}
              style={{
                background: "transparent",
                color: T.blue,
                border: `1.5px solid ${T.blue}`,
                borderRadius: 10,
                padding: "13px 28px",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Lihat Visualisasi
            </button>
          </div>
        </div>

        {/* Right visual */}
        <div className="hero-right">
          <div
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              borderRadius: 99999,
              background: "linear-gradient(135deg,#dbeafe50,#bfdbfe28)",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />

          {/* Dashed rings */}
          <div
            style={{
              position: "absolute",
              width: 100,
              height: 100,
              borderRadius: 99999,
              border: "2px dashed #2563eb25",
              top: 40,
              right: 40,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 48,
              height: 48,
              borderRadius: 99999,
              border: "2px solid #2563eb30",
              bottom: 100,
              left: 50,
            }}
          />

          {/* Dot clusters */}
          <div
            style={{
              position: "absolute",
              top: 70,
              left: 60,
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 7,
            }}
          >
            {Array(16)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: 99,
                    background: T.blue,
                    opacity: 0.18,
                  }}
                />
              ))}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 45,
              right: 25,
              display: "grid",
              gridTemplateColumns: "repeat(5,1fr)",
              gap: 7,
            }}
          >
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: 99,
                    background: T.blue,
                    opacity: 0.14,
                  }}
                />
              ))}
          </div>

          {/* Main mock card */}
          <div
            className="float-card"
            style={{
              position: "absolute",
              zIndex: 4,
              top: "50%",
              left: "50%",
              transform: "translate(-34%, -50%) rotate(-2deg)",
              background: "#fff",
              borderRadius: 20,
              padding: 24,
              width: 290,
              boxShadow: "0 24px 60px rgba(37,99,235,.16)",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: T.muted,
                fontWeight: 700,
                marginBottom: 14,
                letterSpacing: 1,
              }}
            >
              HASIL KLASTERISASI SOM-m-AT
            </div>
            {[
              { label: "Cluster 1 — Tinggi", n: 3, pct: 37, color: T.green },
              { label: "Cluster 2 — Sedang", n: 2, pct: 25, color: T.amber },
              { label: "Cluster 3 — Rendah", n: 3, pct: 38, color: T.red },
            ].map((c) => (
              <div key={c.label} style={{ marginBottom: 12 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{ fontSize: 12, color: T.text, fontWeight: 600 }}
                  >
                    {c.label}
                  </span>
                  <span
                    style={{ fontSize: 12, color: c.color, fontWeight: 700 }}
                  >
                    {c.n} siswa
                  </span>
                </div>
                <div
                  style={{ background: "#f1f5f9", borderRadius: 99, height: 6 }}
                >
                  <div
                    style={{
                      width: `${c.pct}%`,
                      height: "100%",
                      background: c.color,
                      borderRadius: 99,
                    }}
                  />
                </div>
              </div>
            ))}
            <div
              style={{
                marginTop: 14,
                background: "#eff6ff",
                borderRadius: 8,
                padding: "9px 12px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 11, color: T.sub }}>
                Data dari Monsakun
              </span>
              <span style={{ fontSize: 13, fontWeight: 700, color: T.blue }}>
                13 Fitur
              </span>
            </div>
          </div>

          {/* Accent: fitur */}
          <div
            style={{
              position: "absolute",
              top: 40,
              right: 15,
              zIndex: 5,
              background: "#fff",
              borderRadius: 14,
              padding: "14px 18px",
              boxShadow: "0 8px 28px rgba(37,99,235,.13)",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: T.muted,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              FITUR INPUT
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: T.blue,
                lineHeight: 1.2,
              }}
            >
              13
            </div>
            <div
              style={{
                fontSize: 11,
                color: T.green,
                fontWeight: 600,
                marginTop: 4,
              }}
            >
              ✓ Problem posing
            </div>
          </div>

          {/* Accent: platform */}
          <div
            style={{
              position: "absolute",
              top: 115,
              left: 5,
              zIndex: 5,
              background: "#fff",
              borderRadius: 14,
              padding: "12px 16px",
              boxShadow: "0 8px 24px rgba(0,0,0,.08)",
              border: "1px solid #e2e8f0",
              maxWidth: 195,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 6,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 99,
                  background: "#fef3c7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                }}
              >
                🖥️
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: T.text }}>
                Platform Monsakun
              </span>
            </div>
            <div style={{ fontSize: 11, color: T.sub, lineHeight: 1.5 }}>
              3 assignment
              <br />
              problem posing matematika
            </div>
          </div>

          {/* Accent: assignment */}
          <div
            style={{
              position: "absolute",
              bottom: 70,
              left: 15,
              zIndex: 5,
              background: "#fff",
              borderRadius: 14,
              padding: "14px 18px",
              boxShadow: "0 8px 24px rgba(0,0,0,.08)",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: T.muted,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              JUMLAH ASSIGNMENT
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: T.amber,
                lineHeight: 1.2,
              }}
            >
              3
            </div>
            <div style={{ fontSize: 11, color: T.muted, marginTop: 4 }}>
              Data sekunder siswa SD
            </div>
          </div>

          {/* Accent: nodes */}
          <div
            style={{
              position: "absolute",
              bottom: 50,
              right: 8,
              zIndex: 5,
              background: "#fff",
              borderRadius: 14,
              padding: "14px 18px",
              boxShadow: "0 8px 24px rgba(0,0,0,.08)",
              border: "1px solid #e2e8f0",
              width: 170,
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: T.muted,
                fontWeight: 700,
                letterSpacing: 1,
                marginBottom: 8,
              }}
            >
              TOPOLOGI SOM
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 5,
              }}
            >
              {Array(16)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: "100%",
                      aspectRatio: "1",
                      borderRadius: 4,
                      background:
                        [T.green, T.blue, T.amber, T.red][i % 4] +
                        (i % 3 === 0 ? "cc" : "44"),
                    }}
                  />
                ))}
            </div>
            <div style={{ fontSize: 10, color: T.muted, marginTop: 6 }}>
              4×4 Grid Neurons
            </div>
          </div>
        </div>
      </section>

      {/* ══ FITUR ══ */}
      <section
        className="page-section"
        style={{
          padding: "64px 48px",
          background: "#fff",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <SectionLabel>FITUR SISTEM</SectionLabel>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 34,
              color: T.text,
              marginTop: 8,
            }}
          >
            Apa yang Ditawarkan Sistem Ini?
          </h2>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card-hover"
              style={{
                background: T.bg,
                borderRadius: 16,
                padding: "28px 24px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  color: T.text,
                  marginBottom: 8,
                }}
              >
                {f.title}
              </div>
              <div style={{ fontSize: 14, color: T.sub, lineHeight: 1.7 }}>
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section
        className="page-section"
        style={{ padding: "64px 48px", background: T.bg }}
      >
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <SectionLabel>ALUR SISTEM</SectionLabel>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 34,
              color: T.text,
              marginTop: 8,
            }}
          >
            Cara Kerja LAS
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 20,
            maxWidth: 1000,
            margin: "0 auto",
          }}
          className="how-it-works-grid"
        >
          {HOW_IT_WORKS.map((s, i) => (
            <div key={s.num} style={{ position: "relative" }}>
              {i < HOW_IT_WORKS.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    left: "calc(100% - 10px)",
                    width: 20,
                    height: 2,
                    background: `${T.blue}40`,
                    zIndex: 1,
                  }}
                />
              )}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "24px 20px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: `${T.blue}30`,
                    marginBottom: 12,
                    fontFamily: "'DM Serif Display', serif",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                    color: T.text,
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </div>
                <div style={{ fontSize: 13, color: T.sub, lineHeight: 1.65 }}>
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ VIDEO ══ */}
      <section
        className="page-section"
        style={{
          padding: "64px 48px",
          background: "#fff",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <SectionLabel>VIDEO PENJELASAN</SectionLabel>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 34,
                color: T.text,
                marginTop: 8,
              }}
            >
              1 Menit Memahami Sistem LAS
            </h2>
            <p
              style={{
                color: T.sub,
                fontSize: 15,
                marginTop: 10,
                maxWidth: 500,
                margin: "10px auto 0",
              }}
            >
              Tonton video animasi berikut untuk memahami cara kerja LAS dan
              metode SOM-m-AT secara visual.
            </p>
          </div>

          <div
            className="video-section-grid"
            style={{ display: "flex", gap: 40, alignItems: "center" }}
          >
            {/* Video embed */}
            <div className="video-embed" style={{ flex: "1 1 0", minWidth: 0 }}>
              <div
                style={{
                  position: "relative",
                  paddingTop: "56.25%",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(37,99,235,.15)",
                  border: "1px solid #e2e8f0",
                }}
              >
                {/* ✏️ Ganti dengan ID YouTube video kamu */}
                <iframe
                  src="https://www.youtube.com/embed/UVJFSKYMowg"
                  title="1 Menit Memahami Learning Advisory System"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </div>
            </div>

            {/* Side text */}
            <div style={{ flex: "1 1 0", minWidth: 0 }}>
              <div
                style={{
                  fontSize: 10,
                  color: T.blue,
                  fontWeight: 700,
                  letterSpacing: 2,
                  marginBottom: 10,
                }}
              >
                APA YANG AKAN DIPELAJARI
              </div>
              {[
                {
                  icon: "🖥️",
                  text: "Data problem posing siswa dari platform Monsakun",
                },
                { icon: "🧠", text: "Proses klasterisasi dengan SOM-m-AT" },
                {
                  icon: "📊",
                  text: "Cara membaca visualisasi hasil cluster siswa",
                },
                { icon: "📝", text: "Proses pengisian kuesioner TAM2" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: `1px solid ${T.border}`,
                  }}
                >
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                  <span style={{ fontSize: 14, color: T.sub, lineHeight: 1.5 }}>
                    {item.text}
                  </span>
                </div>
              ))}
              <div style={{ marginTop: 16, display: "flex", gap: 16 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: T.blue }}>
                    1:28
                  </div>
                  <div style={{ fontSize: 11, color: T.muted }}>Durasi</div>
                </div>
                <div style={{ width: 1, background: T.border }} />
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{ fontSize: 22, fontWeight: 800, color: T.green }}
                  >
                    HD
                  </div>
                  <div style={{ fontSize: 11, color: T.muted }}>Kualitas</div>
                </div>
                <div style={{ width: 1, background: T.border }} />
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{ fontSize: 22, fontWeight: 800, color: T.amber }}
                  >
                    ID
                  </div>
                  <div style={{ fontSize: 11, color: T.muted }}>Bahasa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section
        style={{
          padding: "64px 48px",
          background: `linear-gradient(135deg, ${T.blue}, #1d4ed8)`,
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 34,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Siap Mencoba Sistem Ini?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,.8)",
              fontSize: 16,
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Pelajari metode SOM-m-AT, lihat contoh visualisasi hasilnya, dan isi
            kuesioner untuk membantu penelitian ini.
          </p>
          <div
            className="cta-btn-row"
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setPage("informasi")}
              style={{
                background: "#fff",
                color: T.blue,
                border: "none",
                borderRadius: 10,
                padding: "13px 28px",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Pelajari Metode
            </button>
            <button
              onClick={() => setPage("kuesioner")}
              style={{
                background: "transparent",
                color: "#fff",
                border: "2px solid rgba(255,255,255,.6)",
                borderRadius: 10,
                padding: "13px 28px",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
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
