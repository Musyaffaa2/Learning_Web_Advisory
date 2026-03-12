import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

import { T } from "../styles/tokens";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import SectionLabel from "../components/ui/SectionLabel";
import { students } from "../data/students";
import { diagnosisText, statusColorMap } from "../utils/helpers";

const METRICS = (s) => [
  { label: "Nilai Ujian",       val: s.nilai,     color: T.blue  },
  { label: "Tingkat Aktivitas", val: s.aktivitas, color: T.green },
  { label: "Error Rate",        val: s.error,     color: T.red   },
  { label: "Latihan Berhasil",  val: s.latihan,   color: T.amber },
];

export default function PageAnalysis() {
  const [sel, setSel] = useState(students[1]);
  const diagBg = statusColorMap[sel.status];

  return (
    <div className="page-content" style={{ padding: "40px 48px" }}>
      <SectionLabel>DETAIL SISWA</SectionLabel>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, margin: "8px 0 28px" }}>
        Analisis Siswa
      </h2>

      <div className="analysis-layout" style={{ display: "flex", gap: 20 }}>
        {/* ── Student picker ── */}
        <div className="analysis-picker" style={{ width: 210, flexShrink: 0 }}>
          <div style={{ fontSize: 11, color: T.muted, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>
            PILIH SISWA
          </div>
          {students.map((s) => (
            <button
              key={s.id}
              className="sidebar-item"
              onClick={() => setSel(s)}
              style={{
                width: "100%", textAlign: "left", padding: "10px 14px", marginBottom: 6,
                borderRadius: 10, cursor: "pointer",
                background: sel.id === s.id ? T.lblue : T.card,
                border: `1px solid ${sel.id === s.id ? T.blue : T.border}`,
                color: sel.id === s.id ? T.blue : T.text,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 13 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: T.muted }}>{s.kelas}</div>
            </button>
          ))}
        </div>

        {/* ── Detail panel ── */}
        <div style={{ flex: 1 }}>
          {/* Header */}
          <Card style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 99, background: T.lblue, color: T.blue,
                  fontSize: 20, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {sel.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: T.text }}>{sel.name}</div>
                  <div style={{ fontSize: 13, color: T.muted }}>Kelas {sel.kelas}</div>
                </div>
              </div>
              <Badge s={sel.status} />
            </div>
          </Card>

          {/* Metric cards */}
          <div className="metric-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            {METRICS(sel).map((m) => (
              <Card key={m.label}>
                <div style={{ fontSize: 12, color: T.muted, fontWeight: 600, marginBottom: 8 }}>
                  {m.label.toUpperCase()}
                </div>
                <div style={{ fontSize: 28, fontWeight: 800, color: m.color, marginBottom: 8 }}>{m.val}%</div>
                <div style={{ background: T.border, borderRadius: 99, height: 6 }}>
                  <div style={{ width: `${m.val}%`, height: "100%", background: m.color, borderRadius: 99, transition: "width .5s" }} />
                </div>
              </Card>
            ))}
          </div>

          {/* Bar chart */}
          <Card style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 700, color: T.text, marginBottom: 14 }}>Perbandingan Indikator</div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart
                data={[
                  { n: "Nilai",     v: sel.nilai },
                  { n: "Aktivitas", v: sel.aktivitas },
                  { n: "Error",     v: sel.error },
                  { n: "Latihan",   v: sel.latihan },
                ]}
                margin={{ top: 0, right: 0, bottom: 0, left: -20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="n" tick={{ fill: T.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fill: T.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 10 }} />
                <Bar dataKey="v" radius={[6, 6, 0, 0]}>
                  {[T.blue, T.green, T.red, T.amber].map((c, i) => <Cell key={i} fill={c} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Diagnosis */}
          <Card style={{ background: diagBg.bg, borderColor: diagBg.text + "55" }}>
            <div style={{ fontWeight: 700, color: T.text, marginBottom: 8 }}>🔍 Diagnosis Sistem</div>
            <p style={{ color: T.sub, fontSize: 14, lineHeight: 1.7 }}>{diagnosisText(sel)}</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
