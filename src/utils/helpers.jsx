export const statusColorMap = {
  "Baik":             { text: "#16a34a", bg: "#f0fdf4" },
  "Cukup":            { text: "#d97706", bg: "#fffbeb" },
  "Perlu Perhatian":  { text: "#dc2626", bg: "#fef2f2" },
};

export const diagnosisText = (student) => {
  const { name, status, error, aktivitas, nilai } = student;
  if (status === "Perlu Perhatian") {
    return (
      <>Siswa <strong>{name}</strong> menunjukkan error rate tinggi ({error}%) dan aktivitas rendah ({aktivitas}%).
      Diperlukan <strong style={{ color: "#dc2626" }}>intervensi segera</strong> berupa bimbingan intensif.</>
    );
  }
  if (status === "Cukup") {
    return (
      <>Siswa <strong>{name}</strong> berada di level menengah. Performa stabil namun masih ada ruang peningkatan.
      Disarankan latihan soal variasi untuk meningkatkan kepercayaan diri.</>
    );
  }
  return (
    <>Siswa <strong>{name}</strong> menunjukkan performa sangat baik (nilai {nilai}, aktivitas {aktivitas}%).
    Dapat diberikan soal pengayaan atau dijadikan tutor sebaya.</>
  );
};
