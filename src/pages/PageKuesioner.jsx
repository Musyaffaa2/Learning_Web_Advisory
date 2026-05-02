import { T } from "../styles/tokens";
import SectionLabel from "../components/ui/SectionLabel";
import Card from "../components/ui/Card";

// ✏️ Ganti URL ini dengan link Google Form kamu
const GOOGLE_FORM_URL = "https://forms.gle/GANTI_DENGAN_LINK_FORM_KAMU";

const STEPS = [
  { num: "1", icon: "👁️", title: "Pelajari Sistem",    desc: "Baca penjelasan metode dan lihat visualisasi hasil klasterisasi di halaman sebelumnya." },
  { num: "2", icon: "▶️", title: "Tonton Video",        desc: "Tonton video penjelasan singkat tentang cara kerja Learning Advisory System." },
  { num: "3", icon: "📝", title: "Isi Kuesioner",       desc: "Klik tombol di bawah untuk membuka Google Form dan isi kuesioner TAM2 ." },
];

// Variabel Independen
const KONSTRUK_INDEPENDEN = [
  { id: "PU",   label: "Perceived Usefulness",   color: T.blue,    n: 5 },
  { id: "PEOU", label: "Perceived Ease of Use",  color: T.green,   n: 5 },
  { id: "SN",   label: "Subjective Norm",        color: T.amber,   n: 3 },
  { id: "IMG",  label: "Image",                  color: "#7c3aed", n: 4 },
  { id: "JR",   label: "Job Relevance",          color: "#0891b2", n: 4 },
  { id: "OQ",   label: "Output Quality",         color: "#059669", n: 3 },
];

// Variabel Dependen
const KONSTRUK_DEPENDEN = [
  { id: "BI",   label: "Behavioral Intention to Use", color: "#db2777", n: 5 },
];

const TOTAL_ITEM = [...KONSTRUK_INDEPENDEN, ...KONSTRUK_DEPENDEN].reduce((a, k) => a + k.n, 0);

function KonstrukRow({ k }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between",
                  alignItems: "center", padding: "9px 0",
                  borderBottom: `1px solid ${T.border}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 8, height: 8, borderRadius: 99, background: k.color, flexShrink: 0 }} />
        <div>
          <span style={{ fontSize: 12, fontWeight: 700, color: k.color }}>{k.id} </span>
          <span style={{ fontSize: 13, color: T.sub }}>{k.label}</span>
        </div>
      </div>
      <span style={{ fontSize: 12, color: T.muted, fontWeight: 600 }}>{k.n} item</span>
    </div>
  );
}

export default function PageKuesioner() {
  return (
    <div className="page-content" style={{ padding: "40px 48px" }}>
      <SectionLabel>EVALUASI SISTEM</SectionLabel>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, margin: "8px 0 6px" }}>
        Kuesioner TAM2
      </h2>
      <p style={{ color: T.sub, fontSize: 15, marginBottom: 40, maxWidth: 560 }}>
        Bantu penelitian ini dengan mengisi kuesioner penerimaan teknologi. Sebelum mengisi,
        pastikan kamu sudah mempelajari sistem dan menonton video penjelasan terlebih dahulu.
      </p>

      {/* ── Langkah-langkah ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 40 }}
           className="how-it-works-grid">
        {STEPS.map((s, i, a) => (
          <div key={s.num} style={{ position: "relative" }}>
            {i < a.length - 1 && (
              <div style={{ position: "absolute", top: 24, left: "calc(100% - 10px)", width: 20, height: 2, background: `${T.blue}30`, zIndex: 1 }} />
            )}
            <Card>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 99, background: T.lblue,
                              color: T.blue, fontWeight: 800, fontSize: 18,
                              display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: 28, fontWeight: 800, color: `${T.blue}25`,
                              fontFamily: "'DM Serif Display', serif" }}>{s.num}</div>
              </div>
              <div style={{ fontWeight: 700, color: T.text, marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: T.sub, lineHeight: 1.65 }}>{s.desc}</div>
            </Card>
          </div>
        ))}
      </div>

      {/* ── Main CTA card ── */}
      <Card style={{ marginBottom: 32, background: `linear-gradient(135deg, ${T.blue}08, ${T.blue}04)`,
                     borderColor: `${T.blue}30`, textAlign: "center", padding: "48px 40px" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📋</div>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, color: T.text, marginBottom: 10 }}>
          Siap Mengisi Kuesioner?
        </h3>
        <p style={{ color: T.sub, fontSize: 15, lineHeight: 1.7, maxWidth: 440, margin: "0 auto 28px" }}>
          Kuesioner terdiri dari <strong>{TOTAL_ITEM} pernyataan</strong> dengan skala Likert 1–5.
          Pengisian membutuhkan waktu sekitar <strong>5–10 menit</strong>.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: T.blue, color: "#fff", borderRadius: 12,
            padding: "14px 36px", fontWeight: 700, fontSize: 16,
            textDecoration: "none", boxShadow: `0 8px 24px ${T.blue}44`,
          }}
        >
          <span style={{ fontSize: 20 }}>📝</span>
          Buka Google Form
          <span style={{ fontSize: 14 }}>↗</span>
        </a>
        <div style={{ marginTop: 14, fontSize: 12, color: T.muted }}>
          Akan membuka tab baru · Google Form
        </div>
      </Card>

      {/* ── Info konstruk + petunjuk ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
           className="identity-grid">

        {/* Konstruk TAM2 */}
        <Card>
          <div style={{ fontWeight: 700, color: T.text, marginBottom: 16 }}>📊 Konstruk Kuesioner (TAM2)</div>

          {/* Independen */}
          <div style={{ fontSize: 11, color: T.muted, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>
            VARIABEL INDEPENDEN
          </div>
          {KONSTRUK_INDEPENDEN.map(k => <KonstrukRow key={k.id} k={k} />)}

          {/* Dependen */}
          <div style={{ fontSize: 11, color: T.muted, fontWeight: 700, letterSpacing: 1,
                        marginTop: 14, marginBottom: 6 }}>
            VARIABEL DEPENDEN
          </div>
          {KONSTRUK_DEPENDEN.map(k => <KonstrukRow key={k.id} k={k} />)}

          {/* Total */}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0",
                        marginTop: 4, borderTop: `2px solid ${T.border}` }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: T.text }}>Total Item</span>
            <span style={{ fontSize: 13, fontWeight: 800, color: T.blue }}>{TOTAL_ITEM} item</span>
          </div>
        </Card>

        {/* Petunjuk */}
        <Card>
          <div style={{ fontWeight: 700, color: T.text, marginBottom: 16 }}>📌 Petunjuk Pengisian</div>
          {[
            "Baca setiap pernyataan dengan saksama sebelum menjawab.",
            "Pilih angka 1–5 yang paling sesuai dengan pendapat Anda.",
            "Tidak ada jawaban benar atau salah — jawab sejujurnya.",
            "Pastikan semua pernyataan telah diisi sebelum mengirim form.",
            "Jawaban Anda hanya digunakan untuk keperluan penelitian.",
          ].map((p, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
              <div style={{ width: 20, height: 20, borderRadius: 99, background: T.lblue, color: T.blue,
                            fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center",
                            justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                {i + 1}
              </div>
              <span style={{ fontSize: 13, color: T.sub, lineHeight: 1.6 }}>{p}</span>
            </div>
          ))}

          <div style={{ marginTop: 16, background: T.lblue, borderRadius: 10, padding: "12px 14px",
                        display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 18 }}>⏱</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: T.blue }}>Estimasi Waktu</div>
              <div style={{ fontSize: 12, color: T.sub }}>5–10 menit pengisian</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}