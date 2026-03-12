import { T } from "../../styles/tokens";

export default function Card({ children, style = {} }) {
  return (
    <div style={{
      background: T.card,
      borderRadius: 16,
      border: `1px solid ${T.border}`,
      padding: "22px 24px",
      boxShadow: "0 2px 8px rgba(0,0,0,.04)",
      ...style,
    }}>
      {children}
    </div>
  );
}
