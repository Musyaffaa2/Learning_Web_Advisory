import { useState } from "react";
import { T } from "../styles/tokens";
import Card from "../components/ui/Card";
import SectionLabel from "../components/ui/SectionLabel";

const TABS = [
  { id: "apa",     label: "Kenali Sistem ini" },
  { id: "data",    label: "Data Siswa" },
  { id: "cara",    label: "Cara Kerja Sistem" },
  { id: "manfaat", label: "Manfaat untuk Guru" },
];

const TAB_CONTENT = {
  apa: {
    title: "Learning Advisory System (LAS)",
    body: `Learning Advisory System (LAS) adalah sebuah sistem yang dirancang untuk membantu guru sekolah dasar dalam memahami cara belajar setiap siswa. Sistem ini menganalisis rekaman aktivitas siswa saat mengerjakan soal matematika di platform Monsakun — sebuah media pembelajaran interaktif berbasis penyusunan soal.

Dengan menggunakan data dari aktivitas belajar tersebut, sistem secara otomatis mengelompokkan siswa ke dalam beberapa kelompok berdasarkan kemiripan cara mereka mengerjakan soal. Hasil pengelompokan ini kemudian disajikan kepada guru dalam bentuk yang mudah dibaca, sehingga guru bisa lebih mudah mengenali siswa yang membutuhkan perhatian khusus.`,
    points: [
      "Kelompok siswa berdasarkan kemiripan pola mengerjakan soal",
      "Siswa yang memiliki kesulitan serupa agar mudah dibimbing bersama",
      "Perbandingan antara siswa yang kesulitan dengan siswa terdekat yang lebih baik",
      "Visualisasi yang membantu guru melihat peta belajar kelas secara keseluruhan",
    ],
  },
  data: {
    title: "Data yang Dikumpulkan dari Siswa",
    body: `Data yang digunakan dalam sistem ini berasal dari rekaman aktivitas siswa saat mengerjakan soal matematika di platform Monsakun. Data ini dikumpulkan dari 39 siswa SD kelas 1 di Jepang berusia 6 tahun.

Setiap kali siswa mengerjakan soal, platform Monsakun secara otomatis mencatat apa saja yang dilakukan siswa — mulai dari berapa lama mengerjakan, berapa kali salah memilih kartu, hingga berapa kali memperbaiki jawabannya. Dari catatan tersebut, diambil 13 informasi penting yang menggambarkan pola belajar setiap siswa.`,
    points: [
      "Data level 5 digunakan karena paling menantang — perbedaan cara belajar antar siswa lebih jelas terlihat",
      "Setiap siswa memiliki 13 informasi yang dianalisis dari setiap tugas yang dikerjakan",
      "Data mencakup 12 tugas (assignment) yang dikerjakan siswa di Monsakun",
      "Sistem tidak memerlukan penilaian manual dari guru — semua otomatis dari rekaman aktivitas",
    ],
    table: [
      { fitur: "ID Siswa",            desc: "Kode unik pengenal setiap siswa" },
      { fitur: "Lama mengerjakan",    desc: "Berapa lama (dalam detik) siswa menyelesaikan satu tugas" },
      { fitur: "Jumlah langkah",      desc: "Total langkah yang dilakukan siswa saat mengerjakan soal (memilih dan menghapus kartu)" },
      { fitur: "Langkah pilih",       desc: "Berapa kali siswa memilih kartu untuk menyusun soal" },
      { fitur: "Langkah hapus",       desc: "Berapa kali siswa menghapus kartu yang sudah dipilih" },
      { fitur: "Kartu 1",             desc: "Seberapa sering siswa menggunakan kartu soal jenis 1" },
      { fitur: "Kartu 2",             desc: "Seberapa sering siswa menggunakan kartu soal jenis 2" },
      { fitur: "Kartu 3",             desc: "Seberapa sering siswa menggunakan kartu soal jenis 3" },
      { fitur: "Kartu 4",             desc: "Seberapa sering siswa menggunakan kartu soal jenis 4" },
      { fitur: "Kartu 5",             desc: "Seberapa sering siswa menggunakan kartu soal jenis 5" },
      { fitur: "Kartu 6",             desc: "Seberapa sering siswa menggunakan kartu soal jenis 6" },
      { fitur: "Susunan unik",        desc: "Berapa banyak cara berbeda yang digunakan siswa menyusun soal" },
      { fitur: "Jumlah kesalahan",    desc: "Berapa kali siswa membuat kesalahan selama mengerjakan tugas" },
    ],
  },
  cara: {
    title: "Bagaimana Cara Sistem Bekerja?",
    body: `Sistem ini bekerja layaknya seorang asisten yang membaca ratusan catatan aktivitas siswa dan secara otomatis mengelompokkan siswa-siswa yang memiliki cara belajar serupa. Proses ini dilakukan oleh teknologi bernama SOM-m-AT — sebuah metode pengelompokan cerdas yang bisa memahami pola dari banyak data sekaligus.

Bayangkan seperti seorang guru yang melihat ratusan lembar jawaban dan mengelompokkan siswa yang pendekatannya mirip — hanya saja sistem melakukan ini secara otomatis, lebih cepat, dan berdasarkan 13 aspek sekaligus.`,
    steps: [
      {
        n: "1",
        title: "Kumpulkan data aktivitas siswa",
        desc: "Sistem membaca rekaman aktivitas 39 siswa dari platform Monsakun — berupa 13 informasi per siswa per tugas.",
      },
      {
        n: "2",
        title: "Tentukan titik awal pengelompokan",
        desc: "Sistem menyiapkan titik-titik awal secara acak sebagai dasar pengelompokan sebelum analisis dimulai.",
      },
      {
        n: "3",
        title: "Cari siswa yang paling mirip",
        desc: "Setiap siswa dicari kelompok terdekat yang paling cocok berdasarkan kemiripan 13 aspek aktivitasnya.",
      },
      {
        n: "4",
        title: "Perbaiki pengelompokan secara otomatis",
        desc: "Sistem terus menyempurnakan pengelompokan hingga hasilnya stabil dan akurat. Proses ini bisa diulang hingga 500 kali putaran.",
      },
      {
        n: "5",
        title: "Tampilkan hasil kepada guru",
        desc: "Hasil pengelompokan ditampilkan dalam bentuk visualisasi yang mudah dibaca, beserta informasi 10 siswa yang paling mirip satu sama lain di setiap tugas.",
      },
    ],
  },
  manfaat: {
    title: "Manfaat Sistem ini bagi Guru",
    body: `Sistem ini dirancang untuk meringankan beban guru dalam memahami pola belajar setiap siswa. Tanpa sistem ini, guru perlu memeriksa satu per satu rekaman aktivitas puluhan siswa.

Salah satu keunggulan utama sistem ini adalah kemampuannya menunjukkan siswa yang membutuhkan perhatian khusus — yaitu siswa dengan kesalahan terbanyak, langkah terlama, dan penggunaan kartu yang tidak efisien — beserta siswa-siswa lain yang paling mirip dengannya. Guru bisa melihat apa yang membedakan mereka dan memberikan arahan yang lebih tepat sasaran.`,
    points: [
      "Tidak memerlukan label atau penilaian manual dari guru sebelumnya",
      "Pengelompokan otomatis berdasarkan data nyata aktivitas siswa",
      "Visualisasi mudah dibaca tanpa perlu keahlian khusus",
      "Membantu guru memberikan nasehat belajar yang lebih personal dan tepat sasaran",
    ],
    steps: [
      {
        n: "a",
        title: "Temukan siswa yang paling membutuhkan bantuan",
        desc: "Sistem memilih siswa dengan kesulitan tertinggi berdasarkan 4 kriteria: jumlah kesalahan, penggunaan kartu tertentu (C4, C5, C6), jumlah langkah, dan lama mengerjakan.",
      },
      {
        n: "b",
        title: "Lihat siapa yang paling mirip dengan siswa tersebut",
        desc: "Dari setiap siswa yang kesulitan, sistem mencarikan 2–3 teman sekelas yang paling serupa caranya mengerjakan soal.",
      },
      {
        n: "c",
        title: "Bandingkan dan berikan arahan yang tepat",
        desc: "Dengan membandingkan 13 aspek antara siswa yang kesulitan dan teman terdekatnya, guru bisa melihat di mana letak perbedaannya dan memberikan nasehat belajar yang spesifik.",
      },
    ],
  },
};

export default function PageInformasi() {
  const [activeTab, setActiveTab] = useState("apa");
  const content = TAB_CONTENT[activeTab];

  return (
    <div className="page-content" style={{ padding: "40px 48px" }}>
      <SectionLabel>TENTANG SISTEM</SectionLabel>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, margin: "8px 0 6px" }}>
        Informasi Sistem
      </h2>
      <p style={{ color: T.sub, fontSize: 15, marginBottom: 32, maxWidth: 600 }}>
        Sistem ini membantu guru memahami pola belajar siswa berdasarkan aktivitas mengerjakan
        soal matematika di platform Monsakun, sehingga guru bisa memberikan arahan yang lebih tepat.
      </p>

      {/* ── Tabs ── */}
      <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
        {TABS.map((t) => (
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
              fontSize: 14, cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif", transition: "all .15s",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Video Penjelasan ── */}
      <Card style={{ marginBottom: 28, overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="video-section-grid">
          {/* Video embed */}
          <div
            className="video-embed-sm"
            style={{ flex: "0 0 420px", borderRadius: 12, overflow: "hidden", background: "#0f172a" }}
          >
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/UVJFSKYMowg"
                title="1 Menit Memahami Learning Advisory System"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
          </div>

          {/* Text */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: T.blue, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>
              VIDEO PENJELASAN
            </div>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: T.text, marginBottom: 10, lineHeight: 1.3 }}>
              1 Menit Memahami Sistem Penasehat Pembelajaran
            </h3>
            <p style={{ color: T.sub, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>
              Video ini menjelaskan bagaimana sistem menganalisis cara siswa mengerjakan soal
              matematika dan membantu guru memahami pola belajar tiap siswa secara visual.
            </p>
            {[
              "Siswa mengerjakan soal matematika di platform Monsakun",
              "Sistem mengelompokkan siswa berdasarkan kemiripan cara belajarnya",
              "Guru mendapat informasi yang siap digunakan untuk membimbing siswa",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                <div style={{ width: 6, height: 6, borderRadius: 99, background: T.blue, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: T.sub }}>{item}</span>
              </div>
            ))}
            <div style={{ marginTop: 14, display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 12, color: T.muted }}>⏱ Durasi:</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: T.text }}>1:28 menit</span>
            </div>
          </div>
        </div>
      </Card>

      {/* ── Tab content ── */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24, alignItems: "start" }}
        className="info-grid"
      >
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
              <div style={{ fontWeight: 700, color: T.text, marginBottom: 14 }}>✅ Yang Bisa Dilihat Guru</div>
              {content.points.map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 99, background: T.lblue, color: T.blue,
                    fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center",
                    justifyContent: "center", flexShrink: 0, marginTop: 1,
                  }}>✓</div>
                  <span style={{ color: T.sub, fontSize: 14, lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
            </Card>
          )}

          {/* Steps */}
          {content.steps && (
            <Card style={{ marginBottom: 20 }}>
              <div style={{ fontWeight: 700, color: T.text, marginBottom: 16 }}>
                {activeTab === "manfaat" ? "📋 Cara Guru Menggunakan Informasi Ini" : "📋 Langkah-langkah Cara Kerja Sistem"}
              </div>
              {content.steps.map((s, i) => (
                <div key={i} style={{
                  display: "flex", gap: 14, marginBottom: 16, paddingBottom: 16,
                  borderBottom: i < content.steps.length - 1 ? `1px solid ${T.border}` : "none",
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 99, background: T.blue, color: "#fff",
                    fontWeight: 800, fontSize: 13, display: "flex", alignItems: "center",
                    justifyContent: "center", flexShrink: 0,
                  }}>{s.n}</div>
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
            <Card style={{ marginTop: 4 }}>
              <div style={{ fontWeight: 700, color: T.text, marginBottom: 14 }}>📊 13 Informasi yang Dianalisis per Siswa</div>
              <div className="table-wrapper">
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                  <thead>
                    <tr style={{ borderBottom: `2px solid ${T.border}` }}>
                      {["Nama Informasi", "Artinya untuk Guru"].map((h) => (
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
          {/* Info highlight card */}
          <Card style={{ marginBottom: 16, background: T.lblue, borderColor: `${T.blue}33` }}>
            <div style={{ fontWeight: 700, color: T.blue, marginBottom: 10 }}>ℹ️ Platform Monsakun</div>
            <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.7, margin: 0 }}>
              Monsakun adalah media pembelajaran interaktif yang digunakan siswa untuk berlatih menyusun soal matematika.
              Setiap langkah yang dilakukan siswa saat mengerjakan soal tercatat secara otomatis oleh sistem.
            </p>
          </Card>

          {/* Params card */}
          <Card style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 700, color: T.text, marginBottom: 14 }}>⚙️ Ringkasan Sistem</div>
            {[
              { label: "Jumlah siswa",              val: "39 siswa"  },
              { label: "Jumlah tugas",              val: "12 tugas"  },
              { label: "Level yang dianalisis",     val: "Level 5"   },
              { label: "Jumlah kelompok siswa",     val: "3 kelompok"},
              { label: "Siswa terdekat ditampilkan", val: "10 siswa" },
              { label: "Platform data",             val: "Monsakun"  },
            ].map((p) => (
              <div key={p.label} style={{
                display: "flex", justifyContent: "space-between",
                padding: "7px 0", borderBottom: `1px solid ${T.border}`, fontSize: 13,
              }}>
                <span style={{ color: T.sub }}>{p.label}</span>
                <span style={{ fontWeight: 700, color: T.text }}>{p.val}</span>
              </div>
            ))}
          </Card>

          {/* Why level 5 */}
          <Card style={{ marginBottom: 16, background: T.lblue, borderColor: `${T.blue}33` }}>
            <div style={{ fontWeight: 700, color: T.blue, marginBottom: 10 }}>💡 Mengapa Level 5?</div>
            <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.7, margin: 0 }}>
              Level 5 paling menantang dibanding level lainnya. Rata-rata jumlah langkah dan
              kesalahan siswa di level ini jauh lebih tinggi, sehingga perbedaan cara belajar
              antar siswa lebih jelas terlihat dan mudah dianalisis.
            </p>
          </Card>

          {/* Reference card */}
          <Card style={{ background: T.lblue, borderColor: `${T.blue}33` }}>
            <div style={{ fontWeight: 700, color: T.blue, marginBottom: 10 }}>📚 Referensi</div>
            {[
              "Kohonen, T. (1982). Dasar metode pengelompokan berbasis kemiripan data.",
              "Vesanto & Alhoniemi (2000). Teknik pengelompokan berbasis peta topologi.",
              "Son, dkk. (2025). Pengembangan algoritma SOM-m-AT dan TAM 2.",
              "Data aktivitas siswa SD Jepang dari platform Monsakun, level 5.",
            ].map((r, i) => (
              <div key={i} style={{
                fontSize: 12, color: T.sub, lineHeight: 1.6, marginBottom: 8, paddingBottom: 8,
                borderBottom: i < 3 ? `1px solid ${T.border}` : "none",
              }}>
                {r}
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}