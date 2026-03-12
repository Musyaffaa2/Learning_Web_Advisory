import { useState } from "react";
import { T } from "../styles/tokens";
import Card from "../components/ui/Card";
import SectionLabel from "../components/ui/SectionLabel";
import { konstruk } from "../data/kuesioner";

const ALL_ITEMS = konstruk.flatMap((k) => k.items.map((_, i) => ({ key: `${k.id}_${i}` })));
const SCALE_LABELS = ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"];

function KuesionerSuccess({ name, school, scores, onReset }) {
  return (
    <div style={{ padding: "60px 48px", maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
      <div style={{
        width: 72, height: 72, borderRadius: 99, background: "#f0fdf4",
        margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36,
      }}>✅</div>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: T.text, marginBottom: 8 }}>
        Terima Kasih!
      </h2>
      <p style={{ color: T.sub, marginBottom: 32 }}>
        Respons {name || "Anda"} dari {school || "sekolah Anda"} telah berhasil dicatat.
      </p>

      <Card style={{ textAlign: "left", marginBottom: 24 }}>
        <div style={{ fontWeight: 700, color: T.text, marginBottom: 16 }}>Ringkasan Skor</div>
        {konstruk.map((k) => (
          <div key={k.id} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "10px 0", borderBottom: `1px solid ${T.border}`,
          }}>
            <span style={{ color: T.sub, fontSize: 14 }}>{k.label}</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 60, height: 6, borderRadius: 99, background: T.border, overflow: "hidden" }}>
                <div style={{ width: `${(scores[k.id] / 5) * 100}%`, height: "100%", background: k.color, borderRadius: 99 }} />
              </div>
              <span style={{ fontSize: 16, fontWeight: 800, color: k.color }}>{scores[k.id]}</span>
            </div>
          </div>
        ))}
      </Card>

      <button className="btn-primary" onClick={onReset} style={{
        background: T.blue, color: "#fff", border: "none", borderRadius: 10,
        padding: "12px 28px", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
      }}>
        Isi Ulang Kuesioner
      </button>
    </div>
  );
}

export default function PageKuesioner() {
  const [answers, setAnswers] = useState({});
  const [name, setName]       = useState("");
  const [school, setSchool]   = useState("");
  const [submitted, setSubmitted] = useState(false);

  const total  = ALL_ITEMS.length;
  const filled = Object.keys(answers).length;
  const pct    = Math.round((filled / total) * 100);

  const handleSubmit = () => {
    if (filled < total) {
      alert(`Masih ada ${total - filled} pertanyaan yang belum diisi.`);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setAnswers({});
    setName("");
    setSchool("");
  };

  const scores = Object.fromEntries(
    konstruk.map((k) => {
      const vals = k.items.map((_, i) => answers[`${k.id}_${i}`] || 0);
      return [k.id, (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2)];
    })
  );

  if (submitted) {
    return <KuesionerSuccess name={name} school={school} scores={scores} onReset={handleReset} />;
  }

  return (
    <div className="page-content" style={{ padding: "40px 48px", maxWidth: 700 }}>
      <SectionLabel>EVALUASI SISTEM</SectionLabel>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, margin: "8px 0 6px" }}>
        Kuesioner TAM2
      </h2>
      <p style={{ color: T.sub, fontSize: 14, marginBottom: 28, lineHeight: 1.6 }}>
        Setelah melihat demonstrasi sistem, mohon isi kuesioner berikut dengan jujur.<br />
        <strong>Skala:</strong> 1 = Sangat Tidak Setuju &nbsp;·&nbsp; 5 = Sangat Setuju
      </p>

      {/* Progress */}
      <Card style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: T.sub }}>Progress Pengisian</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: T.blue }}>{filled}/{total} ({pct}%)</span>
        </div>
        <div style={{ background: T.border, borderRadius: 99, height: 8, overflow: "hidden" }}>
          <div style={{
            width: `${pct}%`, height: "100%",
            background: `linear-gradient(90deg, ${T.blue}, #60a5fa)`,
            borderRadius: 99, transition: "width .35s",
          }} />
        </div>
      </Card>

      {/* Identity */}
      <Card style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 700, color: T.text, marginBottom: 14 }}>Identitas Responden</div>
        <div className="identity-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            { label: "Nama Guru (Opsional)",    val: name,   set: setName,   ph: "Masukkan nama..." },
            { label: "Asal Sekolah (Opsional)", val: school, set: setSchool, ph: "Nama sekolah..."  },
          ].map((f) => (
            <div key={f.label}>
              <div style={{ fontSize: 12, color: T.muted, fontWeight: 600, marginBottom: 6 }}>
                {f.label.toUpperCase()}
              </div>
              <input
                value={f.val}
                onChange={(e) => f.set(e.target.value)}
                placeholder={f.ph}
                style={{
                  width: "100%", border: `1px solid ${T.border}`, borderRadius: 8,
                  padding: "10px 14px", color: T.text, fontSize: 14, outline: "none",
                  background: T.bg, fontFamily: "'DM Sans', sans-serif",
                }}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Questions */}
      {konstruk.map((k) => (
        <Card key={k.id} style={{ marginBottom: 20, borderTop: `3px solid ${k.color}` }}>
          <div style={{ fontWeight: 700, color: k.color, fontSize: 15, marginBottom: 18 }}>{k.label}</div>
          {k.items.map((q, i) => {
            const key = `${k.id}_${i}`;
            return (
              <div key={key} style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 14, color: T.text, lineHeight: 1.55, marginBottom: 10 }}>
                  <span style={{ fontWeight: 700, color: k.color, marginRight: 6 }}>{k.id}{i + 1}.</span>
                  {q}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {[1, 2, 3, 4, 5].map((v) => (
                    <button
                      key={v}
                      className="radio-btn"
                      onClick={() => setAnswers((a) => ({ ...a, [key]: v }))}
                      title={SCALE_LABELS[v - 1]}
                      style={{
                        flex: 1, padding: "10px 4px",
                        border: `1.5px solid ${answers[key] === v ? k.color : T.border}`,
                        borderRadius: 8, cursor: "pointer", fontWeight: 800, fontSize: 14,
                        background: answers[key] === v ? k.color : "#fff",
                        color: answers[key] === v ? "#fff" : T.muted,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {v}
                    </button>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 11, color: T.muted }}>
                  <span>Sangat Tidak Setuju</span>
                  <span>Sangat Setuju</span>
                </div>
              </div>
            );
          })}
        </Card>
      ))}

      <button
        className="btn-primary"
        onClick={handleSubmit}
        style={{
          width: "100%", padding: 15,
          background: filled === total ? T.blue : "#e2e8f0",
          color: filled === total ? "#fff" : T.muted,
          border: "none", borderRadius: 12, fontWeight: 700, fontSize: 15,
          cursor: filled === total ? "pointer" : "not-allowed",
          fontFamily: "'DM Sans', sans-serif", transition: "all .2s",
        }}
      >
        {filled === total ? "Kirim Kuesioner ✓" : `Lengkapi semua pertanyaan (${total - filled} tersisa)`}
      </button>
    </div>
  );
}
