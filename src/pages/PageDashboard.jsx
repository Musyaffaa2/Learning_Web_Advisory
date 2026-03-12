import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from "recharts";

import { T } from "../styles/tokens";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import StatCard from "../components/ui/StatCard";
import SectionLabel from "../components/ui/SectionLabel";
import { students, weeklyData, pieData } from "../data/students";

const STAT_CARDS = [
  { label: "Total Siswa",      val: students.length, sub: "Kelas V-A, B, C", accent: T.blue  },
  { label: "Rata-rata Nilai",  val: "73",             sub: "Semester ini",    accent: T.amber },
  { label: "Perlu Perhatian",  val: 3,                sub: "Butuh bimbingan", accent: T.red   },
  { label: "Prestasi Baik",    val: 3,                sub: "Di atas rata-rata", accent: T.green },
];

export default function PageDashboard() {
  return (
    <div className="page-content" style={{ padding: "40px 48px" }}>
      <SectionLabel>RINGKASAN</SectionLabel>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.text, margin: "8px 0 28px" }}>
        Dashboard Guru
      </h2>

      {/* Stat row */}
      <div className="stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginBottom: 24 }}>
        {STAT_CARDS.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      {/* Charts */}
      <div className="chart-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 18, marginBottom: 24 }}>
        <Card>
          <div style={{ fontWeight: 700, color: T.text, marginBottom: 18 }}>Tren Performa Mingguan</div>
          <ResponsiveContainer width="100%" height={210}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="w" tick={{ fill: T.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis domain={[50, 100]} tick={{ fill: T.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13 }} />
              <Line type="monotone" dataKey="v" stroke={T.blue} strokeWidth={3} dot={{ fill: T.blue, r: 4, strokeWidth: 0 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <div style={{ fontWeight: 700, color: T.text, marginBottom: 18 }}>Status Siswa</div>
          <ResponsiveContainer width="100%" height={210}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={85} dataKey="value" paddingAngle={3}>
                {pieData.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 10 }} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <div style={{ fontWeight: 700, color: T.text, marginBottom: 18 }}>Data Seluruh Siswa</div>
        <div className="table-wrapper">
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${T.border}` }}>
              {["Nama", "Kelas", "Nilai", "Aktivitas", "Error Rate", "Latihan", "Status"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "8px 12px", color: T.muted, fontWeight: 600, fontSize: 12 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="student-row" style={{ borderBottom: `1px solid ${T.border}` }}>
                <td style={{ padding: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: 99, background: T.lblue, color: T.blue,
                      fontWeight: 700, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {s.name[0]}
                    </div>
                    <span style={{ fontWeight: 600, color: T.text }}>{s.name}</span>
                  </div>
                </td>
                <td style={{ padding: "12px", color: T.sub }}>{s.kelas}</td>
                <td style={{ padding: "12px", fontWeight: 700, color: s.nilai >= 80 ? T.green : s.nilai >= 65 ? T.amber : T.red }}>{s.nilai}</td>
                <td style={{ padding: "12px", color: T.sub }}>{s.aktivitas}%</td>
                <td style={{ padding: "12px", color: s.error > 50 ? T.red : s.error > 25 ? T.amber : T.green }}>{s.error}%</td>
                <td style={{ padding: "12px", color: T.sub }}>{s.latihan}%</td>
                <td style={{ padding: "12px" }}><Badge s={s.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </Card>
    </div>
  );
}
