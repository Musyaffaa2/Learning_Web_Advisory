import { T } from "../../styles/tokens";

export default function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
      <div style={{ width: 20, height: 2, background: T.blue }} />
      <span style={{ fontSize: 11, letterSpacing: 2, fontWeight: 700, color: T.blue }}>
        {children}
      </span>
    </div>
  );
}
