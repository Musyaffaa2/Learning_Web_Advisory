import { useState } from "react";
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis,
  Radar, BarChart, Bar, Legend,
} from "recharts";
import { T } from "../styles/tokens";
import Card from "../components/ui/Card";
import SectionLabel from "../components/ui/SectionLabel";

/* ── DATA (dari Tabel 4.1 buku — siswa ke-1 s/d ke-12, dirangkum) ── */
// 13 fitur per siswa: lama, langkah, set, remove, c1-c6, unique, error
// Ini adalah data contoh representatif dari 39 siswa, menampilkan
// siswa-siswa yang memiliki kemunculan ≥ 7 sebagai tetangga terdekat.
const students = [
  { id:1,  name:"Siswa 1",  cluster:2, lama:145, langkah:22, set:14, remove:8,  c1:3, c2:5, c3:4, c4:2, c5:1, c6:3, unique:6,  error:8  },
  { id:2,  name:"Siswa 2",  cluster:2, lama:132, langkah:19, set:12, remove:7,  c1:4, c2:4, c3:3, c4:2, c5:2, c6:2, unique:5,  error:7  },
  { id:3,  name:"Siswa 3",  cluster:1, lama:98,  langkah:14, set:10, remove:4,  c1:5, c2:6, c3:5, c4:1, c5:1, c6:2, unique:8,  error:3  },
  { id:4,  name:"Siswa 4",  cluster:1, lama:104, langkah:15, set:11, remove:4,  c1:5, c2:5, c3:4, c4:1, c5:1, c6:3, unique:7,  error:4  },
  { id:5,  name:"Siswa 5",  cluster:2, lama:138, langkah:20, set:13, remove:7,  c1:3, c2:4, c3:4, c4:2, c5:2, c6:3, unique:5,  error:9  },
  { id:6,  name:"Siswa 6",  cluster:1, lama:110, langkah:16, set:11, remove:5,  c1:4, c2:5, c3:5, c4:1, c5:1, c6:2, unique:7,  error:4  },
  { id:7,  name:"Siswa 7",  cluster:3, lama:210, langkah:35, set:18, remove:17, c1:2, c2:2, c3:3, c4:5, c5:6, c6:7, unique:3,  error:24 },
  { id:8,  name:"Siswa 8",  cluster:3, lama:225, langkah:38, set:19, remove:19, c1:1, c2:2, c3:2, c4:6, c5:7, c6:8, unique:2,  error:28 },
  { id:9,  name:"Siswa 9",  cluster:2, lama:155, langkah:24, set:15, remove:9,  c1:3, c2:4, c3:3, c4:3, c5:2, c6:3, unique:4,  error:11 },
  { id:10, name:"Siswa 10", cluster:1, lama:102, langkah:14, set:10, remove:4,  c1:5, c2:6, c3:4, c4:1, c5:1, c6:2, unique:8,  error:3  },
  { id:11, name:"Siswa 11", cluster:3, lama:198, langkah:33, set:16, remove:17, c1:2, c2:2, c3:2, c4:5, c5:6, c6:6, unique:3,  error:22 },
  { id:12, name:"Siswa 12", cluster:2, lama:148, langkah:21, set:13, remove:8,  c1:3, c2:4, c3:4, c4:2, c5:2, c6:4, unique:5,  error:10 },
];

// Data Tabel 4.1: 10 siswa terdekat dengan siswa ke-1 di setiap assignment
const proximityTable = [
  { asg:"asg1",  d1:37, d2:25, d3:5,  d4:27, d5:24, d6:28, d7:10, d8:18, d9:17, d10:23 },
  { asg:"asg2",  d1:33, d2:16, d3:20, d4:22, d5:30, d6:5,  d7:10, d8:11, d9:18, d10:9  },
  { asg:"asg3",  d1:2,  d2:28, d3:33, d4:6,  d5:17, d6:25, d7:37, d8:7,  d9:4,  d10:19 },
  { asg:"asg4",  d1:17, d2:8,  d3:34, d4:0,  d5:36, d6:5,  d7:31, d8:3,  d9:14, d10:27 },
  { asg:"asg5",  d1:27, d2:23, d3:34, d4:22, d5:3,  d6:14, d7:0,  d8:29, d9:37, d10:16 },
  { asg:"asg6",  d1:30, d2:33, d3:0,  d4:29, d5:8,  d6:18, d7:5,  d8:23, d9:32, d10:27 },
  { asg:"asg7",  d1:23, d2:7,  d3:3,  d4:27, d5:10, d6:15, d7:14, d8:31, d9:25, d10:33 },
  { asg:"asg8",  d1:29, d2:13, d3:11, d4:25, d5:14, d6:4,  d7:12, d8:30, d9:15, d10:5  },
  { asg:"asg9",  d1:26, d2:6,  d3:9,  d4:10, d5:0,  d6:21, d7:25, d8:27, d9:5,  d10:2  },
  { asg:"asg10", d1:18, d2:10, d3:2,  d4:8,  d5:17, d6:5,  d7:12, d8:3,  d9:15, d10:14 },
  { asg:"asg11", d1:18, d2:21, d3:8,  d4:17, d5:19, d6:22, d7:4,  d8:15, d9:14, d10:13 },
  { asg:"asg12", d1:19, d2:3,  d3:18, d4:4,  d5:10, d6:17, d7:15, d8:13, d9:7,  d10:0  },
];
// Siswa ke-5 (nilai 5) muncul 7 kali di kolom D1-D10 → teman terdekat siswa ke-1

const clusterInfo = {
  1: {
    label:    "Kelompok 1",
    sublabel: "Pola Belajar Baik",
    color:    T.green,
    bgColor:  "#f0fdf4",
    emoji:    "🟢",
    desc:     "Siswa mengerjakan soal dengan langkah sedikit, jarang membuat kesalahan, dan menggunakan beragam kartu soal. Cara belajarnya sudah efisien.",
    saran:    "Berikan tantangan soal yang lebih kompleks atau dorong siswa ini untuk membantu teman-temannya yang masih kesulitan.",
    stats:    { lama: "~104 dtk", langkah: "~15", error: "~4", unique: "~7" },
  },
  2: {
    label:    "Kelompok 2",
    sublabel: "Pola Belajar Sedang",
    color:    T.amber,
    bgColor:  "#fffbeb",
    emoji:    "🟡",
    desc:     "Siswa sudah cukup baik, tetapi masih sering menghapus kartu dan memerlukan waktu lebih lama. Ada beberapa indikator yang perlu ditingkatkan.",
    saran:    "Berikan latihan tambahan dan perhatikan apakah siswa terlalu banyak mencoba-coba kartu sebelum menemukan jawaban yang tepat.",
    stats:    { lama: "~144 dtk", langkah: "~21", error: "~9", unique: "~5" },
  },
  3: {
    label:    "Kelompok 3",
    sublabel: "Perlu Bimbingan Khusus",
    color:    T.red,
    bgColor:  "#fef2f2",
    emoji:    "🔴",
    desc:     "Siswa membutuhkan waktu paling lama, paling banyak melakukan kesalahan, dan cenderung menggunakan kartu C4, C5, C6 secara berulang tanpa variasi.",
    saran:    "Prioritaskan bimbingan intensif untuk kelompok ini. Bandingkan cara kerja siswa ini dengan teman terdekatnya yang lebih baik untuk menemukan titik perbedaannya.",
    stats:    { lama: "~211 dtk", langkah: "~35", error: "~25", unique: "~3" },
  },
};

// Data rata-rata per kelompok untuk radar & bar (berdasarkan 13 fitur)
const radarData = [
  { subject: "Waktu",   C1: 40, C2: 65, C3: 95 },
  { subject: "Langkah", C1: 35, C2: 60, C3: 90 },
  { subject: "Error",   C1: 20, C2: 50, C3: 90 },
  { subject: "Variasi", C1: 85, C2: 55, C3: 25 },
  { subject: "Hapus",   C1: 30, C2: 55, C3: 88 },
];

const barData = [
  { name: "Kelompok 1", waktu: 104, langkah: 15, error: 4,  variasi: 7 },
  { name: "Kelompok 2", waktu: 144, langkah: 21, error: 9,  variasi: 5 },
  { name: "Kelompok 3", waktu: 211, langkah: 35, error: 25, variasi: 3 },
];

/* ── KOMPONEN KECIL ─────────────────────────────────────────────────── */
const CustomDot = ({ cx, cy, payload }) => (
  <circle cx={cx} cy={cy} r={8}
    fill={clusterInfo[payload.cluster].color}
    stroke="#fff" strokeWidth={2.5} />
);

function InfoBox({ children }) {
  return (
    <div style={{
      background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10,
      padding: "10px 14px", display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 16,
    }}>
      <span style={{ fontSize: 16, flexShrink: 0 }}>💬</span>
      <p style={{ fontSize: 13, color: "#1e40af", lineHeight: 1.6, margin: 0 }}>{children}</p>
    </div>
  );
}

function StepBadge({ num, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
      <div style={{
        width: 28, height: 28, borderRadius: 99, background: T.blue,
        color: "#fff", fontWeight: 800, fontSize: 13,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>{num}</div>
      <span style={{ fontWeight: 700, fontSize: 15, color: T.text }}>{label}</span>
    </div>
  );
}

/* ── HALAMAN UTAMA ──────────────────────────────────────────────────── */
export default function PageVisualisasi() {
  const [activeCluster, setActiveCluster] = useState(null);
  const [showGuide, setShowGuide] = useState(true);
  const [activeProximityStudent, setActiveProximityStudent] = useState(1);

  const filteredStudents = activeCluster
    ? students.filter(s => s.cluster === activeCluster)
    : students;

  const scatterData = students.map(s => ({
    x: s.error, y: s.lama, name: s.name, cluster: s.cluster, langkah: s.langkah,
  }));

  // Hitung kemunculan tiap siswa (D1-D10) di tabel kedekatan untuk siswa terpilih
  const countMap = {};
  const dKeys = ["d1","d2","d3","d4","d5","d6","d7","d8","d9","d10"];
  proximityTable.forEach(row => {
    dKeys.forEach(k => {
      const val = row[k];
      countMap[val] = (countMap[val] || 0) + 1;
    });
  });
  const proximityResult = Object.entries(countMap)
    .map(([siswa, count]) => ({ siswa: `Siswa ${siswa}`, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return (
    <div className="page-content" style={{ padding: "40px 48px" }}>

      {/* ── Header ── */}
      <SectionLabel>HASIL ANALISIS</SectionLabel>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, margin: "8px 0 6px" }}>
        Visualisasi Hasil Pengelompokan
      </h2>
      <p style={{ color: T.sub, fontSize: 15, marginBottom: 24, maxWidth: 640 }}>
        Berikut adalah hasil pengelompokan 39 siswa SD berdasarkan pola aktivitas
        mengerjakan soal matematika di platform Monsakun (level 5, 12 tugas).
      </p>

      {/* ── Panduan singkat ── */}
      {showGuide && (
        <div style={{
          background: "#f8faff", border: "1px solid #bfdbfe", borderRadius: 14,
          padding: "18px 20px", marginBottom: 28, position: "relative",
        }}>
          <button onClick={() => setShowGuide(false)} style={{
            position: "absolute", top: 12, right: 14, background: "none",
            border: "none", cursor: "pointer", fontSize: 18, color: T.muted,
          }}>✕</button>
          <div style={{ fontWeight: 700, color: T.blue, marginBottom: 10, fontSize: 14 }}>
            📖 Cara Membaca Halaman Ini
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }} className="how-it-works-grid">
            {[
              { n:"1", icon:"🔘", title:"Pilih Kelompok",  desc:"Klik salah satu kelompok untuk menyorot siswa-siswa di kelompok tersebut pada semua grafik." },
              { n:"2", icon:"📊", title:"Baca Grafik",     desc:"Setiap grafik menampilkan satu sisi informasi. Ada penjelasan singkat di atas setiap grafik." },
              { n:"3", icon:"💡", title:"Lihat Saran Guru", desc:"Di panel kanan, ada saran tindak lanjut yang bisa langsung digunakan guru untuk tiap kelompok." },
            ].map(g => (
              <div key={g.n} style={{ display: "flex", gap: 10 }}>
                <div style={{
                  width: 24, height: 24, borderRadius: 99, background: T.blue, color: "#fff",
                  fontWeight: 800, fontSize: 11, display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0, marginTop: 2,
                }}>{g.n}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: T.text, marginBottom: 3 }}>{g.icon} {g.title}</div>
                  <div style={{ fontSize: 12, color: T.sub, lineHeight: 1.55 }}>{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── LANGKAH 1: Kelompok siswa ── */}
      <StepBadge num="1" label="Tiga Kelompok Siswa" />
      <InfoBox>
        Sistem mengelompokkan 39 siswa ke dalam <strong>3 kelompok</strong> berdasarkan kemiripan
        cara mereka mengerjakan soal — seperti berapa lama, berapa kali salah, dan kartu apa yang
        sering dipakai. Klik kelompok di bawah untuk melihat detail masing-masing.
      </InfoBox>

      {/* Filter pills */}
      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        <button onClick={() => setActiveCluster(null)} style={{
          padding: "8px 18px", borderRadius: 99, border: `1.5px solid`,
          borderColor: !activeCluster ? T.blue : T.border,
          background: !activeCluster ? T.lblue : "#fff",
          color: !activeCluster ? T.blue : T.sub,
          fontWeight: !activeCluster ? 700 : 500, fontSize: 13,
          cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all .15s",
        }}>
          Semua Kelompok
        </button>
        {[1, 2, 3].map(c => (
          <button key={c} onClick={() => setActiveCluster(activeCluster === c ? null : c)} style={{
            padding: "8px 18px", borderRadius: 99, border: `1.5px solid`,
            borderColor: activeCluster === c ? clusterInfo[c].color : T.border,
            background: activeCluster === c ? clusterInfo[c].color + "18" : "#fff",
            color: activeCluster === c ? clusterInfo[c].color : T.sub,
            fontWeight: activeCluster === c ? 700 : 500, fontSize: 13,
            cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all .15s",
          }}>
            {clusterInfo[c].emoji} {clusterInfo[c].label} — {clusterInfo[c].sublabel}
          </button>
        ))}
      </div>

      {/* Cluster cards */}
      <div className="stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 32 }}>
        {[1, 2, 3].map(c => {
          const list = students.filter(s => s.cluster === c);
          const ci = clusterInfo[c];
          return (
            <Card key={c} onClick={() => setActiveCluster(activeCluster === c ? null : c)} style={{
              borderTop: `4px solid ${ci.color}`, cursor: "pointer", transition: "all .2s",
              opacity: activeCluster && activeCluster !== c ? 0.45 : 1,
              boxShadow: activeCluster === c ? `0 8px 28px ${ci.color}44` : undefined,
              background: activeCluster === c ? ci.bgColor : "#fff",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div>
                  <div style={{ fontSize: 11, color: T.muted, fontWeight: 700, letterSpacing: 1 }}>{ci.label.toUpperCase()}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: ci.color, marginTop: 2 }}>{ci.sublabel}</div>
                </div>
                <div style={{ fontSize: 28 }}>{ci.emoji}</div>
              </div>
              <div style={{ fontSize: 36, fontWeight: 800, color: ci.color, lineHeight: 1 }}>{list.length}</div>
              <div style={{ fontSize: 12, color: T.muted, marginBottom: 10 }}>siswa dalam kelompok ini</div>
              {/* Rata-rata indikator kunci */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
                {[
                  { k: "Rata-rata waktu",   v: ci.stats.lama    },
                  { k: "Rata-rata langkah", v: ci.stats.langkah },
                  { k: "Rata-rata error",   v: ci.stats.error   },
                  { k: "Variasi susunan",   v: ci.stats.unique  },
                ].map(stat => (
                  <div key={stat.k} style={{ background: ci.color + "12", borderRadius: 8, padding: "6px 8px" }}>
                    <div style={{ fontSize: 10, color: T.muted }}>{stat.k}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: ci.color }}>{stat.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 12, color: T.sub, lineHeight: 1.6, borderTop: `1px solid ${T.border}`, paddingTop: 10 }}>
                {ci.desc}
              </div>
            </Card>
          );
        })}
      </div>

      {/* ── LANGKAH 2: Scatter — error vs lama ── */}
      <StepBadge num="2" label="Sebaran Siswa: Waktu vs Kesalahan" />
      <InfoBox>
        Grafik ini menampilkan posisi setiap siswa berdasarkan <strong>dua hal penting</strong>:
        seberapa banyak kesalahan yang dibuat (sumbu horizontal) dan berapa lama mengerjakan soal
        (sumbu vertikal). Siswa di pojok <strong>kiri bawah</strong> (sedikit kesalahan, cepat selesai)
        adalah yang paling baik. Siswa di pojok <strong>kanan atas</strong> membutuhkan perhatian lebih.
      </InfoBox>

      <Card style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4, flexWrap: "wrap", gap: 8 }}>
          <div style={{ fontWeight: 700, color: T.text }}>Posisi Siswa Berdasarkan Jumlah Kesalahan &amp; Lama Mengerjakan</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[1,2,3].map(c => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: T.sub }}>
                <div style={{ width: 10, height: 10, borderRadius: 99, background: clusterInfo[c].color }} />
                {clusterInfo[c].label}
              </div>
            ))}
          </div>
        </div>
        <div style={{ fontSize: 12, color: T.muted, marginBottom: 16 }}>
          Arahkan kursor ke titik untuk melihat detail siswa tersebut
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <ScatterChart margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="x" name="Jumlah Kesalahan" type="number" domain={[0, 32]}
              label={{ value: "← Jumlah Kesalahan →", position: "bottom", offset: 10, style: { fill: T.muted, fontSize: 11 } }}
              tick={{ fill: T.muted, fontSize: 11 }} />
            <YAxis dataKey="y" name="Lama (detik)" type="number" domain={[80, 240]}
              label={{ value: "Lama (dtk)", angle: -90, position: "insideLeft", offset: 10, style: { fill: T.muted, fontSize: 11 } }}
              tick={{ fill: T.muted, fontSize: 11 }} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} content={({ payload }) => {
              if (!payload?.length) return null;
              const d = payload[0].payload;
              const ci = clusterInfo[d.cluster];
              return (
                <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 12, padding: "12px 16px", fontSize: 13, boxShadow: "0 4px 12px rgba(0,0,0,.08)" }}>
                  <div style={{ fontWeight: 700, color: T.text, marginBottom: 6 }}>{d.name}</div>
                  <div style={{ color: T.sub, marginBottom: 2 }}>Kesalahan: <strong style={{ color: T.text }}>{d.x} kali</strong></div>
                  <div style={{ color: T.sub, marginBottom: 2 }}>Lama mengerjakan: <strong style={{ color: T.text }}>{d.y} detik</strong></div>
                  <div style={{ color: T.sub, marginBottom: 6 }}>Jumlah langkah: <strong style={{ color: T.text }}>{d.langkah} langkah</strong></div>
                  <div style={{ padding: "4px 10px", borderRadius: 99, background: ci.color + "18", color: ci.color, fontWeight: 700, fontSize: 12, display: "inline-block" }}>
                    {ci.emoji} {ci.label} — {ci.sublabel}
                  </div>
                </div>
              );
            }} />
            <Scatter
              data={activeCluster ? scatterData.filter(d => d.cluster === activeCluster) : scatterData}
              shape={<CustomDot />}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </Card>

      {/* ── LANGKAH 3: Radar + Bar ── */}
      <StepBadge num="3" label="Perbandingan Rata-rata Antar Kelompok" />
      <InfoBox>
        Dua grafik ini membandingkan karakteristik rata-rata setiap kelompok.
        <strong> Grafik jaring laba-laba (kiri)</strong> menunjukkan "bentuk" profil tiap kelompok —
        semakin ke luar area <strong>Waktu, Langkah, Error, dan Hapus</strong> berarti semakin
        membutuhkan perhatian. Semakin ke luar area <strong>Variasi</strong> berarti semakin baik.
        <strong> Grafik batang (kanan)</strong> menampilkan angka rata-rata asli tiap indikator.
      </InfoBox>

      <div className="chart-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
        {/* Radar */}
        <Card>
          <div style={{ fontWeight: 700, color: T.text, marginBottom: 4 }}>Profil Rata-rata Per Kelompok</div>
          <div style={{ fontSize: 12, color: T.muted, marginBottom: 12 }}>
            Waktu/Langkah/Error/Hapus: semakin kecil = semakin baik. Variasi: semakin besar = semakin baik.
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <RadarChart data={radarData}>
              <PolarGrid stroke={T.border} />
              <PolarAngleAxis dataKey="subject" tick={{ fill: T.sub, fontSize: 12 }} />
              {(!activeCluster || activeCluster === 1) && <Radar name="Kelompok 1" dataKey="C1" stroke={T.green} fill={T.green} fillOpacity={0.2} strokeWidth={2} />}
              {(!activeCluster || activeCluster === 2) && <Radar name="Kelompok 2" dataKey="C2" stroke={T.amber} fill={T.amber} fillOpacity={0.2} strokeWidth={2} />}
              {(!activeCluster || activeCluster === 3) && <Radar name="Kelompok 3" dataKey="C3" stroke={T.red}   fill={T.red}   fillOpacity={0.2} strokeWidth={2} />}
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 12 }} />
            </RadarChart>
          </ResponsiveContainer>
        </Card>

        {/* Bar */}
        <Card>
          <div style={{ fontWeight: 700, color: T.text, marginBottom: 4 }}>Nilai Rata-rata Indikator Utama</div>
          <div style={{ fontSize: 12, color: T.muted, marginBottom: 16 }}>
            Waktu dalam detik, langkah & error dalam jumlah, variasi dalam jumlah susunan unik
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={activeCluster ? barData.filter((_, i) => i + 1 === activeCluster) : barData}
              margin={{ top: 0, right: 10, bottom: 0, left: -10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fill: T.muted, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: T.muted, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="waktu"   name="Waktu (dtk)"    fill={T.blue}  radius={[4,4,0,0]} />
              <Bar dataKey="langkah" name="Langkah"        fill={T.amber} radius={[4,4,0,0]} />
              <Bar dataKey="error"   name="Kesalahan"      fill={T.red}   radius={[4,4,0,0]} />
              <Bar dataKey="variasi" name="Variasi susunan" fill={T.green} radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* ── LANGKAH 4: Tabel kedekatan siswa ke-1 ── */}
      <StepBadge num="4" label="Tabel Kemiripan Siswa (Contoh: Siswa ke-1)" />
      <InfoBox>
        Tabel ini menampilkan <strong>10 siswa yang paling mirip</strong> dengan siswa ke-1 pada
        setiap tugas (assignment 1–12). Angka dalam tabel adalah nomor ID siswa tersebut. Dari tabel
        ini, guru dapat melihat siapa yang paling sering muncul sebagai tetangga terdekat —
        siswa yang muncul <strong>≥ 7 kali</strong> dianggap benar-benar mirip pola belajarnya.
      </InfoBox>

      <Card style={{ marginBottom: 32, overflowX: "auto" }}>
        <div style={{ fontWeight: 700, color: T.text, marginBottom: 4 }}>
          Sepuluh Siswa Terdekat dengan Siswa ke-1 pada Setiap Tugas
        </div>
        <div style={{ fontSize: 12, color: T.muted, marginBottom: 16 }}>
          Angka = nomor ID siswa. Angka yang dilingkari (<strong style={{ color: T.blue }}>siswa ke-5</strong>) muncul 7 kali → dianggap paling mirip dengan siswa ke-1
        </div>
        <div className="table-wrapper">
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${T.border}` }}>
                <th style={{ textAlign: "left", padding: "8px 10px", color: T.muted, fontWeight: 600, fontSize: 11, minWidth: 80 }}>Tugas</th>
                {["D1","D2","D3","D4","D5","D6","D7","D8","D9","D10"].map(h => (
                  <th key={h} style={{ textAlign: "center", padding: "8px 8px", color: T.muted, fontWeight: 600, fontSize: 11, minWidth: 44 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {proximityTable.map((row, i) => (
                <tr key={i} className="student-row" style={{ borderBottom: `1px solid ${T.border}` }}>
                  <td style={{ padding: "9px 10px", fontWeight: 600, color: T.blue, fontSize: 12 }}>{row.asg}</td>
                  {[row.d1,row.d2,row.d3,row.d4,row.d5,row.d6,row.d7,row.d8,row.d9,row.d10].map((val, j) => {
                    const isHighlight = val === 5;
                    return (
                      <td key={j} style={{ padding: "9px 8px", textAlign: "center", fontSize: 13,
                        fontWeight: isHighlight ? 800 : 400,
                        color: isHighlight ? T.blue : T.sub,
                      }}>
                        {isHighlight
                          ? <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center",
                              width: 24, height: 24, borderRadius: 99, border: `2px solid ${T.blue}`, color: T.blue,
                              fontWeight: 800, fontSize: 12 }}>{val}</span>
                          : val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 14, padding: "10px 14px", background: T.lblue, borderRadius: 10, fontSize: 13, color: T.blue }}>
          💡 <strong>Kesimpulan:</strong> Siswa ke-5 muncul sebanyak <strong>7 kali</strong> dalam 12 tugas sebagai salah satu dari 10 siswa
          terdekat siswa ke-1. Karena 7 &gt; 6 (separuh dari 12 tugas), siswa ke-5 ditetapkan sebagai teman terdekat siswa ke-1.
          Proses yang sama dilakukan untuk siswa ke-2 hingga ke-40.
        </div>
      </Card>

      {/* ── LANGKAH 5: Daftar siswa + saran ── */}
      <StepBadge num="5" label="Detail Siswa &amp; Saran Tindak Lanjut untuk Guru" />
      <InfoBox>
        Tabel di bawah menampilkan daftar siswa beserta kelompoknya dan indikator utamanya.
        Di panel kanan, terdapat <strong>saran tindak lanjut</strong> untuk setiap kelompok
        berdasarkan karakteristik cara belajar yang ditemukan sistem.
      </InfoBox>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20, alignItems: "start" }} className="info-grid">

        {/* Tabel siswa */}
        <Card>
          <div style={{ fontWeight: 700, color: T.text, marginBottom: 4 }}>
            Daftar Siswa {activeCluster
              ? `— ${clusterInfo[activeCluster].label} (${clusterInfo[activeCluster].sublabel})`
              : "(Semua Kelompok)"}
          </div>
          <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>
            {activeCluster
              ? `Menampilkan ${filteredStudents.length} siswa dalam ${clusterInfo[activeCluster].label}`
              : `Menampilkan ${students.length} siswa contoh dari 39 siswa (3 kelompok)`}
          </div>
          <div className="table-wrapper">
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${T.border}` }}>
                  {["Siswa", "Lama (dtk)", "Langkah", "Hapus", "Kesalahan", "Variasi", "Kelompok"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "8px 10px", color: T.muted, fontWeight: 600, fontSize: 11 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map(s => {
                  const ci = clusterInfo[s.cluster];
                  return (
                    <tr key={s.id} className="student-row" style={{ borderBottom: `1px solid ${T.border}` }}>
                      <td style={{ padding: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{
                            width: 28, height: 28, borderRadius: 99, background: ci.color + "18",
                            color: ci.color, fontWeight: 700, fontSize: 12,
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>{s.id}</div>
                          <span style={{ fontWeight: 600, color: T.text }}>{s.name}</span>
                        </div>
                      </td>
                      <td style={{ padding: "10px", color: s.lama > 180 ? T.red : s.lama > 130 ? T.amber : T.green, fontWeight: 600, fontSize: 13 }}>{s.lama}</td>
                      <td style={{ padding: "10px", color: T.sub, fontSize: 13 }}>{s.langkah}</td>
                      <td style={{ padding: "10px", color: T.sub, fontSize: 13 }}>{s.remove}</td>
                      <td style={{ padding: "10px" }}>
                        <span style={{ fontWeight: 700, color: s.error > 18 ? T.red : s.error > 8 ? T.amber : T.green, fontSize: 13 }}>{s.error}</span>
                      </td>
                      <td style={{ padding: "10px", color: T.sub, fontSize: 13 }}>{s.unique}</td>
                      <td style={{ padding: "10px" }}>
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: 4,
                          padding: "3px 10px", borderRadius: 99, fontSize: 11, fontWeight: 700,
                          color: ci.color, background: ci.color + "18",
                        }}>
                          {ci.emoji} {ci.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Sidebar: saran guru */}
        <div>
          {[1, 2, 3].filter(c => !activeCluster || activeCluster === c).map(c => {
            const ci = clusterInfo[c];
            return (
              <Card key={c} style={{ marginBottom: 16, borderLeft: `4px solid ${ci.color}`, background: ci.bgColor }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 18 }}>{ci.emoji}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: ci.color, fontSize: 13 }}>{ci.label}</div>
                    <div style={{ fontSize: 11, color: T.muted }}>{ci.sublabel}</div>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: T.sub, lineHeight: 1.6, marginBottom: 10, padding: "8px", background: "#fff", borderRadius: 8 }}>
                  💡 <strong>Saran untuk guru:</strong> {ci.saran}
                </div>
              </Card>
            );
          })}

          {/* 4 kriteria siswa terburuk */}
          <Card style={{ background: "#fff7ed", borderColor: `${T.amber}44` }}>
            <div style={{ fontWeight: 700, color: T.amber, marginBottom: 10 }}>⚠️ 4 Kriteria Siswa yang Perlu Prioritas</div>
            <div style={{ fontSize: 11, color: T.sub, marginBottom: 12, lineHeight: 1.5 }}>
              Sistem memilih siswa yang paling membutuhkan bimbingan berdasarkan urutan berikut:
            </div>
            {[
              { n:"1", label:"Jumlah kesalahan terbanyak", desc:"Prioritas utama — semakin banyak kesalahan, semakin perlu diperhatikan" },
              { n:"2", label:"Penggunaan kartu C4, C5, C6", desc:"Kartu-kartu ini biasanya dipakai saat siswa belum memahami pola soal" },
              { n:"3", label:"Jumlah langkah terbanyak",   desc:"Semakin banyak langkah, semakin tidak efisien cara mengerjakan soal" },
              { n:"4", label:"Lama mengerjakan terpanjang", desc:"Waktu pengerjaan sangat lama bisa jadi tanda kesulitan memahami soal" },
            ].map(p => (
              <div key={p.n} style={{ display: "flex", gap: 10, marginBottom: 10, paddingBottom: 10, borderBottom: p.n < "4" ? `1px solid ${T.border}` : "none" }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 99, background: T.amber + "22", color: T.amber,
                  fontWeight: 800, fontSize: 11, display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0, marginTop: 1,
                }}>{p.n}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 12, color: T.text, marginBottom: 2 }}>{p.label}</div>
                  <div style={{ fontSize: 11, color: T.sub, lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}