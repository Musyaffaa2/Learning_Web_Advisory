import { useState } from "react";
import { T } from "../styles/tokens";
import Card from "../components/ui/Card";
import SectionLabel from "../components/ui/SectionLabel";

const TABS = [
  { id: "som",      label: "Apa itu SOM?" },
  { id: "modif",    label: "Modifikasi m-AT" },
  { id: "proses",   label: "Proses Training" },
  { id: "las",      label: "Penerapan di LAS" },
];

const TAB_CONTENT = {
  som: {
    title: "Self-Organizing Map (SOM)",
    body: `Self-Organizing Map (SOM) adalah jenis jaringan saraf tiruan yang dikembangkan oleh Teuvo Kohonen pada tahun 1982. SOM merupakan metode pembelajaran tidak terawasi (unsupervised learning) yang mampu memetakan data berdimensi tinggi ke dalam representasi berdimensi rendah (biasanya 2D) sambil mempertahankan struktur topologi data aslinya.

SOM bekerja dengan cara mengompetisikan neuron-neuron pada grid (peta) untuk merespons input tertentu. Neuron yang paling mirip dengan input disebut Best Matching Unit (BMU) dan bobotnya — serta bobot tetangga-tetangganya — diperbarui agar lebih mendekati input.`,
    points: [
      "Unsupervised learning — tidak membutuhkan label data",
      "Preservasi topologi ruang input dalam peta 2D",
      "Mampu menangani data berdimensi tinggi",
      "Cocok untuk klasterisasi dan visualisasi data",
    ],
  },
  modif: {
    title: "Modifikasi m-AT (Modified Adaptive Training)",
    body: `Modifikasi m-AT (Modified Adaptive Training) adalah pengembangan dari SOM standar yang mengatasi keterbatasan learning rate tetap. Pada SOM konvensional, learning rate (α) ditetapkan secara manual dan menurun secara linear atau eksponensial, yang sering mengakibatkan konvergensi yang tidak optimal.

Pada SOM-m-AT, learning rate disesuaikan secara adaptif berdasarkan performa model pada setiap iterasi. Jika error menurun, learning rate dipertahankan; jika error meningkat atau stagnan, learning rate disesuaikan secara otomatis untuk menghindari local minima.`,
    points: [
      "Learning rate adaptif — menyesuaikan secara otomatis",
      "Konvergensi lebih cepat dibanding SOM standar",
      "Menghindari local minima pada proses training",
      "Hasil klasterisasi lebih stabil dan konsisten",
    ],
  },
  proses: {
    title: "Proses Training SOM-m-AT",
    body: `Proses training SOM-m-AT terdiri dari beberapa tahap yang diulang hingga konvergen. Setiap iterasi melibatkan pemilihan BMU, pembaruan bobot, dan penyesuaian learning rate adaptif.`,
    steps: [
      { n: "1", title: "Inisialisasi",       desc: "Bobot neuron diinisialisasi secara acak atau menggunakan PCA initialization untuk konvergensi lebih cepat." },
      { n: "2", title: "Pemilihan BMU",      desc: "Untuk setiap data input, neuron dengan jarak Euclidean terkecil dipilih sebagai Best Matching Unit (BMU)." },
      { n: "3", title: "Update Bobot",       desc: "Bobot BMU dan tetangganya diperbarui menggunakan fungsi neighborhood (Gaussian) dan learning rate saat ini." },
      { n: "4", title: "Adaptive Rate",      desc: "Learning rate dievaluasi dan disesuaikan berdasarkan perubahan quantization error antar epoch." },
      { n: "5", title: "Cek Konvergensi",    desc: "Proses diulang hingga quantization error di bawah threshold atau jumlah epoch maksimum tercapai." },
    ],
  },
  las: {
    title: "Penerapan SOM-m-AT pada LAS",
    body: `Dalam konteks Learning Advisory System (LAS), SOM-m-AT digunakan untuk mengklasterisasi siswa berdasarkan data aktivitas belajar mereka. Setiap siswa direpresentasikan sebagai vektor fitur yang mencakup nilai ujian, tingkat aktivitas, error rate, dan persentase latihan berhasil.`,
    points: [
      "Input: vektor fitur per siswa (nilai, aktivitas, error rate, latihan)",
      "Output: cluster yang merepresentasikan tingkat kemampuan belajar",
      "Cluster diinterpretasikan guru sebagai dasar strategi pembelajaran",
      "Rekomendasi diberikan per cluster secara otomatis",
    ],
    table: [
      { fitur: "Nilai Ujian",        desc: "Skor rata-rata ujian harian & ulangan" },
      { fitur: "Tingkat Aktivitas",  desc: "Frekuensi kehadiran & partisipasi kelas" },
      { fitur: "Error Rate",         desc: "Persentase kesalahan pada latihan soal" },
      { fitur: "Latihan Berhasil",   desc: "Persentase soal latihan yang diselesaikan" },
    ],
  },
};

export default function PageInformasi() {
  const [activeTab, setActiveTab] = useState("som");
  const content = TAB_CONTENT[activeTab];

  return (
    <div className="page-content" style={{ padding: "40px 48px" }}>
      <SectionLabel>METODE PENELITIAN</SectionLabel>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, margin: "8px 0 6px" }}>
        Informasi Sistem
      </h2>
      <p style={{ color: T.sub, fontSize: 15, marginBottom: 32, maxWidth: 600 }}>
        Penjelasan lengkap tentang metode SOM-m-AT yang digunakan dalam Learning Advisory System ini.
      </p>

      {/* ── Tabs ── */}
      <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button
            key={t.id}
            className="tab-btn"
            onClick={() => setActiveTab(t.id)}
            style={{
              padding: "9px 18px", borderRadius: 8, border: `1.5px solid`,
              borderColor: activeTab === t.id ? T.blue : T.border,
              background: activeTab === t.id ? T.lblue : "#fff",
              color: activeTab === t.id ? T.blue : T.sub,
              fontWeight: activeTab === t.id ? 700 : 500,
              fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
              transition: "all .15s",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Video Penjelasan ── */}
      <Card style={{ marginBottom: 28, overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="video-section-grid">
          {/* Thumbnail / embed */}
          <div style={{ flex: "0 0 420px", position: "relative", borderRadius: 12, overflow: "hidden",
                        background: "#0f172a", aspectRatio: "16/9" }}>
            {/* Ganti src dengan URL embed video YouTube kamu */}
            {/* Contoh: https://www.youtube.com/embed/VIDEO_ID */}
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Penjelasan SOM-m-AT"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          {/* Text */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: T.blue, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>VIDEO PENJELASAN</div>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: T.text, marginBottom: 10, lineHeight: 1.3 }}>
              Cara Kerja Metode SOM-m-AT
            </h3>
            <p style={{ color: T.sub, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>
              Video ini menjelaskan secara visual bagaimana algoritma SOM-m-AT mengklasterisasi
              data siswa, proses adaptive training, dan cara membaca hasil klasterisasi.
            </p>
            {[
              "Konsep dasar Self-Organizing Map",
              "Mekanisme adaptive learning rate",
              "Interpretasi hasil cluster siswa",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                <div style={{ width: 6, height: 6, borderRadius: 99, background: T.blue, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: T.sub }}>{item}</span>
              </div>
            ))}
            <div style={{ marginTop: 14, display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 12, color: T.muted }}>⏱ Durasi:</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: T.text }}>5:30 menit</span>
            </div>
          </div>
        </div>
      </Card>

      {/* ── Tab content ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24, alignItems: "start" }}
           className="info-grid">

        {/* Main content */}
        <div>
          <Card style={{ marginBottom: 20 }}>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: T.text, marginBottom: 16 }}>
              {content.title}
            </h3>
            {content.body.split("\n\n").map((para, i) => (
              <p key={i} style={{ color: T.sub, fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>{para}</p>
            ))}
          </Card>

          {/* Points */}
          {content.points && (
            <Card style={{ marginBottom: 20 }}>
              <div style={{ fontWeight: 700, color: T.text, marginBottom: 14 }}>✅ Keunggulan</div>
              {content.points.map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 99, background: T.lblue, color: T.blue, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>✓</div>
                  <span style={{ color: T.sub, fontSize: 14, lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
            </Card>
          )}

          {/* Steps */}
          {content.steps && (
            <Card>
              <div style={{ fontWeight: 700, color: T.text, marginBottom: 16 }}>📋 Tahapan Proses</div>
              {content.steps.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16, paddingBottom: 16, borderBottom: i < content.steps.length - 1 ? `1px solid ${T.border}` : "none" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 99, background: T.blue, color: "#fff", fontWeight: 800, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: T.text, marginBottom: 4 }}>{s.title}</div>
                    <div style={{ color: T.sub, fontSize: 13, lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </Card>
          )}

          {/* Table */}
          {content.table && (
            <Card style={{ marginTop: 20 }}>
              <div style={{ fontWeight: 700, color: T.text, marginBottom: 14 }}>📊 Fitur Input Sistem</div>
              <div className="table-wrapper">
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                  <thead>
                    <tr style={{ borderBottom: `2px solid ${T.border}` }}>
                      {["Fitur", "Deskripsi"].map(h => (
                        <th key={h} style={{ textAlign: "left", padding: "8px 12px", color: T.muted, fontWeight: 600, fontSize: 12 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {content.table.map((r, i) => (
                      <tr key={i} className="student-row" style={{ borderBottom: `1px solid ${T.border}` }}>
                        <td style={{ padding: "11px 12px", fontWeight: 600, color: T.blue }}>{r.fitur}</td>
                        <td style={{ padding: "11px 12px", color: T.sub }}>{r.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div>
          {/* Formula card */}
          <Card style={{ marginBottom: 16, background: "#0f172a", border: "none" }}>
            <div style={{ fontSize: 11, color: "#64748b", fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>RUMUS UTAMA</div>
            <div style={{ fontFamily: "monospace", fontSize: 13, lineHeight: 2 }}>
              <div style={{ color: "#60a5fa", marginBottom: 4 }}>// BMU Selection</div>
              <div style={{ color: "#e2e8f0" }}>BMU = argmin‖x - wᵢ‖</div>
              <div style={{ color: "#60a5fa", marginTop: 8, marginBottom: 4 }}>// Weight Update</div>
              <div style={{ color: "#e2e8f0" }}>wᵢ(t+1) = wᵢ(t) + α(t)</div>
              <div style={{ color: "#e2e8f0" }}>  × h(BMU,i,t)</div>
              <div style={{ color: "#e2e8f0" }}>  × (x - wᵢ(t))</div>
              <div style={{ color: "#60a5fa", marginTop: 8, marginBottom: 4 }}>// Adaptive Rate</div>
              <div style={{ color: "#e2e8f0" }}>α(t) = α₀ × f(QE(t))</div>
            </div>
          </Card>

          {/* Params card */}
          <Card style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 700, color: T.text, marginBottom: 14 }}>⚙️ Parameter Model</div>
            {[
              { label: "Grid Size",         val: "4 × 4" },
              { label: "Learning Rate (α₀)", val: "0.5" },
              { label: "Neighborhood (σ₀)", val: "2.0" },
              { label: "Max Epoch",         val: "500" },
              { label: "Jumlah Cluster",    val: "3" },
            ].map(p => (
              <div key={p.label} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid ${T.border}`, fontSize: 13 }}>
                <span style={{ color: T.sub }}>{p.label}</span>
                <span style={{ fontWeight: 700, color: T.text }}>{p.val}</span>
              </div>
            ))}
          </Card>

          {/* Reference card */}
          <Card style={{ background: T.lblue, borderColor: `${T.blue}33` }}>
            <div style={{ fontWeight: 700, color: T.blue, marginBottom: 10 }}>📚 Referensi</div>
            {[
              "Kohonen, T. (1982). Self-organized formation of topologically correct feature maps.",
              "Vesanto & Alhoniemi (2000). Clustering of the self-organizing map.",
              "Penelitian ini mengacu pada disertasi terkait LAS berbasis SOM.",
            ].map((r, i) => (
              <div key={i} style={{ fontSize: 12, color: T.sub, lineHeight: 1.6, marginBottom: 8, paddingBottom: 8, borderBottom: i < 2 ? `1px solid ${T.border}` : "none" }}>
                {r}
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
