import { useState, useEffect } from "react";

function getRemaining(targetIso?: string) {
  if (!targetIso) return { d: 0, h: 0, m: 0, s: 0 };
  const diff = Math.max(0, new Date(targetIso).getTime() - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

export default function CountdownTimer({ targetDate }: { targetDate?: string }) {
  const [time, setTime] = useState(() => getRemaining(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const blocks = [
    { val: time.d, label: "Days" },
    { val: time.h, label: "Hours" },
    { val: time.m, label: "Mins" },
    { val: time.s, label: "Secs" },
  ];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {blocks.map((b, i) => (
        <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.6rem", fontWeight: 700, color: "#F4F1EC", lineHeight: 1, minWidth: "2.2rem" }}>
              {String(b.val).padStart(2, "0")}
            </div>
            <div style={{ fontSize: "9px", color: "#A9A19A", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "3px" }}>{b.label}</div>
          </div>
          {i < 3 && <span style={{ color: "#D9A441", fontSize: "1.3rem", fontWeight: 700, marginBottom: "14px" }}>:</span>}
        </div>
      ))}
    </div>
  );
}