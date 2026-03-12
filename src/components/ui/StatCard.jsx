import Card from "./Card";
import { T } from "../../styles/tokens";

export default function StatCard({ label, val, sub, accent }) {
  return (
    <Card style={{ borderTop: `3px solid ${accent}` }}>
      <div style={{ fontSize: 11, color: T.muted, fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>
        {label.toUpperCase()}
      </div>
      <div style={{ fontSize: 36, fontWeight: 800, color: accent, lineHeight: 1 }}>{val}</div>
      <div style={{ fontSize: 12, color: T.muted, marginTop: 6 }}>{sub}</div>
    </Card>
  );
}
