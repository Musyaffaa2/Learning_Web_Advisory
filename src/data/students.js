export const students = [
  { id: 1, name: "Andi Pratama",   kelas: "V-A", nilai: 88, aktivitas: 92, error: 12, latihan: 85, status: "Baik" },
  { id: 2, name: "Budi Santoso",   kelas: "V-A", nilai: 58, aktivitas: 40, error: 68, latihan: 35, status: "Perlu Perhatian" },
  { id: 3, name: "Citra Dewi",     kelas: "V-B", nilai: 75, aktivitas: 70, error: 30, latihan: 72, status: "Cukup" },
  { id: 4, name: "Dani Kurniawan", kelas: "V-B", nilai: 62, aktivitas: 55, error: 55, latihan: 50, status: "Perlu Perhatian" },
  { id: 5, name: "Eva Rahayu",     kelas: "V-A", nilai: 91, aktivitas: 95, error: 8,  latihan: 93, status: "Baik" },
  { id: 6, name: "Fajar Nugroho",  kelas: "V-C", nilai: 70, aktivitas: 65, error: 38, latihan: 60, status: "Cukup" },
  { id: 7, name: "Gita Permata",   kelas: "V-C", nilai: 55, aktivitas: 38, error: 72, latihan: 30, status: "Perlu Perhatian" },
  { id: 8, name: "Hendra Wijaya",  kelas: "V-A", nilai: 84, aktivitas: 80, error: 18, latihan: 80, status: "Baik" },
];

export const weeklyData = [
  { w: "M1", v: 65 }, { w: "M2", v: 68 }, { w: "M3", v: 64 }, { w: "M4", v: 71 },
  { w: "M5", v: 75 }, { w: "M6", v: 72 }, { w: "M7", v: 78 }, { w: "M8", v: 82 },
];

export const pieData = [
  { name: "Baik",             value: 3, color: "#16a34a" },
  { name: "Cukup",            value: 2, color: "#d97706" },
  { name: "Perlu Perhatian",  value: 3, color: "#dc2626" },
];

export const rekoMap = {
  "Perlu Perhatian": [
    "Latihan soal penjumlahan bertingkat",
    "Latihan soal cerita matematika",
    "Ulangan remedial materi dasar",
    "Bimbingan intensif 2× seminggu",
  ],
  "Cukup": [
    "Latihan soal variasi sedang",
    "Eksplorasi soal perkalian lanjutan",
    "Kerjakan latihan mandiri",
  ],
  "Baik": [
    "Soal pengayaan tingkat tinggi",
    "Tantangan olimpiade matematika",
    "Jadikan tutor sebaya",
  ],
};
