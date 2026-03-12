import { statusColorMap } from "../../utils/helpers";

export default function Badge({ s }) {
  const { text, bg } = statusColorMap[s] || { text: "#94a3b8", bg: "#f1f5f9" };
  return (
    <span style={{
      display: "inline-block",
      padding: "3px 10px",
      borderRadius: 99,
      fontSize: 11,
      fontWeight: 700,
      color: text,
      background: bg,
    }}>
      {s}
    </span>
  );
}
