import { useState } from "react";
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis,
  Radar, BarChart, Bar, Cell, Legend,
} from "recharts";
import { T } from "../styles/tokens";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import SectionLabel from "../components/ui/SectionLabel";

/* ── DATA ─────────────────────────────────────────────────────────────── */
const students = [
  { id:1, name:"Andi Pratama",   kelas:"V-A", nilai:88, aktivitas:92, error:12, latihan:85, cluster:1, status:"Baik" },
  { id:2, name:"Budi Santoso",   kelas:"V-A", nilai:58, aktivitas:40, error:68, latihan:35, cluster:3, status:"Perlu Perhatian" },
  { id:3, name:"Citra Dewi",     kelas:"V-B", nilai:75, aktivitas:70, error:30, latihan:72, cluster:2, status:"Cukup" },
  { id:4, name:"Dani Kurniawan", kelas:"V-B", nilai:62, aktivitas:55, error:55, latihan:50, cluster:3, status:"Perlu Perhatian" },
  { id:5, name:"Eva Rahayu",     kelas:"V-A", nilai:91, aktivitas:95, error:8,  latihan:93, cluster:1, status:"Baik" },
  { id:6, name:"Fajar Nugroho",  kelas:"V-C", nilai:70, aktivitas:65, error:38, latihan:60, cluster:2, status:"Cukup" },
  { id:7, name:"Gita Permata",   kelas:"V-C", nilai:55, aktivitas:38, error:72, latihan:30, cluster:3, status:"Perlu Perhatian" },
  { id:8, name:"Hendra Wijaya",  kelas:"V-A", nilai:84, aktivitas:80, error:18, latihan:80, cluster:1, status:"Baik" },
];

const clusterInfo = {
  1: { label: "Cluster 1 — Tinggi",  color: T.green, desc: "Siswa dengan kemampuan belajar tinggi. Nilai dan aktivitas di atas rata-rata, error rate rendah." },
  2: { label: "Cluster 2 — Sedang",  color: T.amber, desc: "Siswa dengan kemampuan belajar sedang. Performa cukup baik namun masih ada ruang peningkatan." },
  3: { label: "Cluster 3 — Rendah",  color: T.red,   desc: "Siswa dengan kemampuan belajar rendah. Memerlukan perhatian dan bimbingan tambahan dari guru." },
};

const rekoMap = {
  1: ["Soal pengayaan tingkat tinggi", "Tantangan olimpiade matematika", "Menjadi tutor sebaya"],
  2: ["Latihan soal variasi sedang",   "Eksplorasi perkalian lanjutan",  "Kerjakan latihan mandiri"],
  3: ["Latihan soal dasar penjumlahan","Bimbingan intensif 2× seminggu","Ulangan remedial materi dasar"],
};

// Scatter: nilai vs aktivitas colored by cluster
const scatterData = students.map(s => ({
  x: s.nilai, y: s.aktivitas, name: s.name,
  color: clusterInfo[s.cluster].color,
  cluster: s.cluster,
}));

// Radar per cluster
const radarData = [
  { subject: "Nilai",     C1: 88, C2: 72, C3: 58 },
  { subject: "Aktivitas", C1: 89, C2: 68, C3: 39 },
  { subject: "Lat. OK",   C1: 86, C2: 66, C3: 32 },
  { subject: "Error",     C1: 13, C2: 34, C3: 65 },
];

// Bar: avg per cluster
const barData = [
  { name: "Cluster 1", nilai: 88, aktivitas: 89, latihan: 86, error: 13 },
  { name: "Cluster 2", nilai: 72, aktivitas: 68, latihan: 66, error: 34 },
  { name: "Cluster 3", nilai: 58, aktivitas: 39, latihan: 32, error: 65 },
];

/* ── CUSTOM SCATTER DOT ──────────────────────────────────────────────── */
const CustomDot = (props) => {
  const { cx, cy, payload } = props;
  return <circle cx={cx} cy={cy} r={7} fill={payload.color} stroke="#fff" strokeWidth={2} />;
};

export default function PageVisualisasi() {
  const [activeCluster, setActiveCluster] = useState(null);

  const filteredStudents = activeCluster
    ? students.filter(s => s.cluster === activeCluster)
    : students;

  return (
    <div className="page-content" style={{ padding: "40px 48px" }}>
      <SectionLabel>HASIL ANALISIS</SectionLabel>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, margin: "8px 0 6px" }}>
        Visualisasi Klasterisasi
      </h2>
      <p style={{ color: T.sub, fontSize: 15, marginBottom: 32, maxWidth: 600 }}>
        Hasil klasterisasi siswa menggunakan metode SOM-m-AT berdasarkan data aktivitas belajar.
        Klik cluster untuk memfilter tampilan.
      </p>

      {/* ── Cluster filter pills ── */}
      <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
        <button onClick={() => setActiveCluster(null)} style={{
          padding: "8px 18px", borderRadius: 99, border: `1.5px solid`,
          borderColor: !activeCluster ? T.blue : T.border,
          background: !activeCluster ? T.lblue : "#fff",
          color: !activeCluster ? T.blue : T.sub,
          fontWeight: !activeCluster ? 700 : 500, fontSize: 13,
          cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
        }}>
          Semua Cluster
        </button>
        {[1, 2, 3].map(c => (
          <button key={c} onClick={() => setActiveCluster(activeCluster === c ? null : c)} style={{
            padding: "8px 18px", borderRadius: 99, border: `1.5px solid`,
            borderColor: activeCluster === c ? clusterInfo[c].color : T.border,
            background: activeCluster === c ? clusterInfo[c].color + "18" : "#fff",
            color: activeCluster === c ? clusterInfo[c].color : T.sub,
            fontWeight: activeCluster === c ? 700 : 500, fontSize: 13,
            cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
          }}>
            ● {clusterInfo[c].label}
          </button>
        ))}
      </div>

      {/* ── Cluster summary cards ── */}
      <div className="stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 28 }}>
        {[1, 2, 3].map(c => {
          const list = students.filter(s => s.cluster === c);
          const avg  = Math.round(list.reduce((a, s) => a + s.nilai, 0) / list.length);
          const ci   = clusterInfo[c];
          return (
            <Card key={c} style={{ borderTop: `3px solid ${ci.color}`, cursor: "pointer", transition: "all .2s",
                                    boxShadow: activeCluster === c ? `0 8px 24px ${ci.color}33` : undefined }}
                  onClick={() => setActiveCluster(activeCluster === c ? null : c)}>
              <div style={{ fontSize: 11, color: T.muted, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>{ci.label.toUpperCase()}</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: ci.color }}>{list.length}</div>
              <div style={{ fontSize: 12, color: T.muted, marginBottom: 8 }}>siswa · rata-rata {avg}</div>
              <div style={{ fontSize: 12, color: T.sub, lineHeight: 1.5 }}>{ci.desc}</div>
            </Card>
          );
        })}
      </div>

      {/* ── Charts row ── */}
      <div className="chart-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
        {/* Scatter */}
        <Card>
          <div style={{ fontWeight: 700, color: T.text, marginBottom: 4 }}>Scatter Plot — Nilai vs Aktivitas</div>
          <div style={{ fontSize: 12, color: T.muted, marginBottom: 16 }}>Setiap titik mewakili satu siswa, warna menunjukkan cluster</div>
          <ResponsiveContainer width="100%" height={240}>
            <ScatterChart margin={{ top: 10, right: 20, bottom: 10, left: -10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="x" name="Nilai" domain={[40, 100]} label={{ value: "Nilai", position: "bottom", offset: -4, style: { fill: T.muted, fontSize: 12 } }} tick={{ fill: T.muted, fontSize: 11 }} />
              <YAxis dataKey="y" name="Aktivitas" domain={[20, 100]} label={{ value: "Aktivitas", angle: -90, position: "insideLeft", style: { fill: T.muted, fontSize: 12 } }} tick={{ fill: T.muted, fontSize: 11 }} />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={({ payload }) => {
                  if (!payload?.length) return null;
                  const d = payload[0].payload;
                  return (
                    <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 10, padding: "10px 14px", fontSize: 13 }}>
                      <div style={{ fontWeight: 700, color: T.text, marginBottom: 4 }}>{d.name}</div>
                      <div style={{ color: T.sub }}>Nilai: <strong>{d.x}</strong></div>
                      <div style={{ color: T.sub }}>Aktivitas: <strong>{d.y}</strong></div>
                      <div style={{ color: clusterInfo[d.cluster].color, fontWeight: 700, marginTop: 4 }}>{clusterInfo[d.cluster].label}</div>
                    </div>
                  );
                }}
              />
              <Scatter
                data={activeCluster ? scatterData.filter(d => d.cluster === activeCluster) : scatterData}
                shape={<CustomDot />}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </Card>

        {/* Radar */}
        <Card>
          <div style={{ fontWeight: 700, color: T.text, marginBottom: 4 }}>Radar — Profil Per Cluster</div>
          <div style={{ fontSize: 12, color: T.muted, marginBottom: 16 }}>Perbandingan rata-rata fitur antar cluster</div>
          <ResponsiveContainer width="100%" height={240}>
            <RadarChart data={radarData}>
              <PolarGrid stroke={T.border} />
              <PolarAngleAxis dataKey="subject" tick={{ fill: T.muted, fontSize: 12 }} />
              {(!activeCluster || activeCluster === 1) && <Radar name="Cluster 1" dataKey="C1" stroke={T.green} fill={T.green} fillOpacity={0.15} strokeWidth={2} />}
              {(!activeCluster || activeCluster === 2) && <Radar name="Cluster 2" dataKey="C2" stroke={T.amber} fill={T.amber} fillOpacity={0.15} strokeWidth={2} />}
              {(!activeCluster || activeCluster === 3) && <Radar name="Cluster 3" dataKey="C3" stroke={T.red}   fill={T.red}   fillOpacity={0.15} strokeWidth={2} />}
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13 }} />
            </RadarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* ── Bar chart ── */}
      <Card style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 700, color: T.text, marginBottom: 4 }}>Perbandingan Rata-rata Fitur Per Cluster</div>
        <div style={{ fontSize: 12, color: T.muted, marginBottom: 16 }}>Nilai, aktivitas, latihan berhasil, dan error rate per cluster</div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={activeCluster ? barData.filter((_, i) => i + 1 === activeCluster) : barData}
                    margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="name" tick={{ fill: T.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{ fill: T.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="nilai"     name="Nilai"     fill={T.blue}  radius={[4,4,0,0]} />
            <Bar dataKey="aktivitas" name="Aktivitas" fill={T.green} radius={[4,4,0,0]} />
            <Bar dataKey="latihan"   name="Latihan"   fill={T.amber} radius={[4,4,0,0]} />
            <Bar dataKey="error"     name="Error"     fill={T.red}   radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* ── Student table + rekomendasi ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20, alignItems: "start" }}
           className="info-grid">
        <Card>
          <div style={{ fontWeight: 700, color: T.text, marginBottom: 16 }}>
            Data Siswa {activeCluster ? `— ${clusterInfo[activeCluster].label}` : ""}
          </div>
          <div className="table-wrapper">
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${T.border}` }}>
                  {["Nama", "Kelas", "Nilai", "Aktivitas", "Error", "Cluster"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "8px 10px", color: T.muted, fontWeight: 600, fontSize: 12 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map(s => (
                  <tr key={s.id} className="student-row" style={{ borderBottom: `1px solid ${T.border}` }}>
                    <td style={{ padding: "10px", fontWeight: 600, color: T.text }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 26, height: 26, borderRadius: 99, background: T.lblue, color: T.blue, fontWeight: 700, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.name[0]}</div>
                        {s.name}
                      </div>
                    </td>
                    <td style={{ padding: "10px", color: T.sub }}>{s.kelas}</td>
                    <td style={{ padding: "10px", fontWeight: 700, color: s.nilai >= 80 ? T.green : s.nilai >= 65 ? T.amber : T.red }}>{s.nilai}</td>
                    <td style={{ padding: "10px", color: T.sub }}>{s.aktivitas}%</td>
                    <td style={{ padding: "10px", color: s.error > 50 ? T.red : s.error > 25 ? T.amber : T.green }}>{s.error}%</td>
                    <td style={{ padding: "10px" }}>
                      <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 99, fontSize: 11, fontWeight: 700,
                                     color: clusterInfo[s.cluster].color, background: clusterInfo[s.cluster].color + "18" }}>
                        C{s.cluster}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Rekomendasi sidebar */}
        <div>
          {[1, 2, 3].filter(c => !activeCluster || activeCluster === c).map(c => (
            <Card key={c} style={{ marginBottom: 16, borderLeft: `4px solid ${clusterInfo[c].color}` }}>
              <div style={{ fontWeight: 700, color: clusterInfo[c].color, fontSize: 13, marginBottom: 10 }}>
                {clusterInfo[c].label}
              </div>
              <div style={{ fontSize: 11, color: T.muted, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>REKOMENDASI</div>
              {rekoMap[c].map((r, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                  <div style={{ width: 18, height: 18, borderRadius: 99, background: clusterInfo[c].color + "20", color: clusterInfo[c].color, fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    {i + 1}
                  </div>
                  <span style={{ fontSize: 12, color: T.sub, lineHeight: 1.5 }}>{r}</span>
                </div>
              ))}
            </Card>
          ))}

          {/* Model performance */}
          <Card style={{ background: T.lblue, borderColor: `${T.blue}33` }}>
            <div style={{ fontWeight: 700, color: T.blue, marginBottom: 12 }}>📈 Performa Model</div>
            {[
              { label: "Quantization Error", val: "0.042" },
              { label: "Topographic Error",  val: "0.0" },
              { label: "Silhouette Score",   val: "0.71" },
              { label: "Akurasi Validasi",   val: "91.4%" },
            ].map(p => (
              <div key={p.label} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: `1px solid ${T.border}`, fontSize: 13 }}>
                <span style={{ color: T.sub }}>{p.label}</span>
                <span style={{ fontWeight: 700, color: T.blue }}>{p.val}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
