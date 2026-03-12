import { T } from "../styles/tokens";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import SectionLabel from "../components/ui/SectionLabel";
import { students, rekoMap } from "../data/students";
import { statusColorMap } from "../utils/helpers";

const STATUS_GROUPS = ["Perlu Perhatian", "Cukup", "Baik"];

export default function PageRekomendasi() {
  return (
    <div className="page-content" style={{ padding: "40px 48px" }}>
      <SectionLabel>TINDAK LANJUT</SectionLabel>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, margin: "8px 0 28px" }}>
        Rekomendasi Pembelajaran
      </h2>

      {STATUS_GROUPS.map((g) => {
        const list = students.filter((s) => s.status === g);
        const { text: color } = statusColorMap[g];

        return (
          <Card key={g} style={{ marginBottom: 20, borderLeft: `4px solid ${color}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <Badge s={g} />
              <span style={{ fontSize: 13, color: T.muted }}>{list.length} siswa</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {/* Student list */}
              <div>
                <div style={{ fontSize: 11, color: T.muted, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>
                  DAFTAR SISWA
                </div>
                {list.map((s) => (
                  <div key={s.id} style={{
                    display: "flex", justifyContent: "space-between",
                    padding: "8px 0", borderBottom: `1px solid ${T.border}`, fontSize: 14,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{
                        width: 26, height: 26, borderRadius: 99, background: T.lblue, color: T.blue,
                        fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {s.name[0]}
                      </div>
                      <span style={{ color: T.text, fontWeight: 500 }}>{s.name}</span>
                    </div>
                    <span style={{ color: T.muted }}>
                      {s.kelas} · <strong style={{ color: T.text }}>{s.nilai}</strong>
                    </span>
                  </div>
                ))}
              </div>

              {/* Recommendations */}
              <div>
                <div style={{ fontSize: 11, color: T.muted, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>
                  REKOMENDASI SISTEM
                </div>
                {rekoMap[g].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 99, background: color + "18", color,
                      fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 1,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {i + 1}
                    </div>
                    <span style={{ color: T.sub, fontSize: 14, lineHeight: 1.5 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
