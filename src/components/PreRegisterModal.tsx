import { useState } from "react";
import Modal from "./Modal";
import { ServerData } from "../data/servers";

const PREREG_KEY = "playcrows_preregistrations";

export default function PreRegisterModal({ server, onClose }: { server: ServerData; onClose: () => void }) {
  const [loginId, setLoginId] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!loginId.trim() || !characterName.trim()) {
      setError("Please fill in both Login ID and Character Name.");
      return;
    }
    setError("");

    try {
      const raw = localStorage.getItem(PREREG_KEY);
      const list = raw ? JSON.parse(raw) : [];
      list.push({
        serverId: server.id,
        serverTitle: server.title,
        loginId: loginId.trim(),
        characterName: characterName.trim(),
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem(PREREG_KEY, JSON.stringify(list));
    } catch {
      // localStorage best-effort
    }

    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px", borderRadius: "8px",
    background: "#1a1410", border: "1px solid rgba(255,255,255,0.12)",
    color: "#F4F1EC", fontSize: "13.5px", marginBottom: "14px",
  };
  const labelStyle: React.CSSProperties = { fontSize: "11px", color: "#A9A19A", marginBottom: "6px", display: "block", textTransform: "uppercase", letterSpacing: "0.05em" };

  if (submitted) {
    return (
      <Modal title="Pre-Registration Complete" onClose={onClose}>
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <div style={{ fontSize: "40px", marginBottom: "12px" }}>✓</div>
          <p style={{ color: "#F4F1EC", fontSize: "14px", marginBottom: "6px", fontWeight: 600 }}>You're pre-registered for {server.title}!</p>
          <p style={{ color: "#A9A19A", fontSize: "12.5px" }}>Your launch rewards will be waiting when the server opens.</p>
          <button onClick={onClose} style={{ marginTop: "20px", padding: "10px 24px", borderRadius: "8px", background: "#D9A441", color: "#120F0D", fontWeight: 700, border: "none", cursor: "pointer", fontSize: "13px" }}>
            Close
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal title={`Pre-Register — ${server.title}`} onClose={onClose}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        {/* Left: form */}
        <div>
          <label style={labelStyle}>Login ID</label>
          <input style={inputStyle} value={loginId} onChange={e => setLoginId(e.target.value)} placeholder="Your login ID" />

          <label style={labelStyle}>Character Name</label>
          <input style={inputStyle} value={characterName} onChange={e => setCharacterName(e.target.value)} placeholder="Your character name" />

          {error && <p style={{ color: "#f87171", fontSize: "12px", marginBottom: "12px" }}>{error}</p>}

          <button onClick={handleSubmit} style={{ width: "100%", padding: "12px", borderRadius: "8px", background: "#D9A441", color: "#120F0D", fontWeight: 700, border: "none", cursor: "pointer", fontSize: "13.5px", marginTop: "4px" }}>
            Pre-Register
          </button>
        </div>

        {/* Right: rewards list */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "16px" }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", fontWeight: 700, color: "#D9A441", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
            Pre-Registration Rewards
          </div>
          {server.rewards && server.rewards.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {server.rewards.map(r => (
                <div key={r.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                  <span style={{ color: "#F4F1EC", fontSize: "12.5px" }}>{r.label}</span>
                  <span style={{ color: "#D9A441", fontSize: "12.5px", fontWeight: 700, whiteSpace: "nowrap" }}>{r.qty}</span>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: "#5a5450", fontSize: "12px" }}>No rewards listed yet.</p>
          )}
        </div>
      </div>
    </Modal>
  );
}