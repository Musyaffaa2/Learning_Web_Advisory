# Learning Advisory System — Prototype

Prototype web sederhana untuk skripsi TAM2 berbasis React + Vite.

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

Buka browser di `http://localhost:5173`

---

## 📁 Struktur Folder

```
las-prototype/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # Entry point React
    ├── App.jsx               # Root app + routing sederhana
    │
    ├── pages/                # Halaman utama
    │   ├── PageHome.jsx
    │   ├── PageDashboard.jsx
    │   ├── PageAnalysis.jsx
    │   ├── PageRekomendasi.jsx
    │   └── PageKuesioner.jsx
    │
    ├── components/
    │   ├── layout/
    │   │   └── Navbar.jsx    # Navigasi atas
    │   └── ui/               # Komponen reusable
    │       ├── Badge.jsx
    │       ├── Card.jsx
    │       ├── SectionLabel.jsx
    │       └── StatCard.jsx
    │
    ├── data/                 # Data dummy & konstan
    │   ├── students.js       # Data siswa, chart, rekomendasi
    │   └── kuesioner.js      # Konstruk TAM2
    │
    ├── styles/
    │   ├── tokens.js         # Design tokens (warna, dll)
    │   └── GlobalStyles.js   # CSS global + animasi
    │
    └── utils/
        └── helpers.jsx       # Fungsi bantu (statusColorMap, diagnosisText)
```

---

## 📦 Dependencies

| Package   | Kegunaan               |
|-----------|------------------------|
| react     | UI library             |
| react-dom | DOM rendering          |
| recharts  | Grafik & chart         |
| vite      | Build tool (dev)       |

---

## 📝 Halaman

| Halaman       | Deskripsi                                          |
|---------------|----------------------------------------------------|
| Beranda       | Landing page penjelasan sistem + hero animasi      |
| Dashboard     | Stat cards, grafik tren, pie chart, tabel siswa    |
| Analisis      | Detail performa per siswa + diagnosis              |
| Rekomendasi   | Rekomendasi pembelajaran per kelompok status       |
| Kuesioner     | Form TAM2 (PU, PEOU, SN, VR, BI) + hasil skor     |
