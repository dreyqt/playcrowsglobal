import { useState } from "react";

export default function AdminLogin({ onLogin }: { onLogin: (password: string) => boolean }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = onLogin(password);
    if (!ok) {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#120F0D", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", fontFamily: "'Inter', sans-serif" }}>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "360px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "32px 28px" }}>
        <h1 style={{ fontFamily: "'Cinzel', serif", color: "#F4F1EC", fontSize: "1.3rem", marginBottom: "6px", textAlign: "center" }}>Admin Access</h1>
        <p style={{ color: "#A9A19A", fontSize: "12.5px", textAlign: "center", marginBottom: "24px" }}>Enter the admin password to continue</p>

        <input
          type="password"
          autoFocus
          value={password}
          onChange={e => { setPassword(e.target.value); setError(false); }}
          placeholder="Password"
          style={{
            width: "100%", padding: "11px 14px", borderRadius: "8px",
            background: "#1a1410", border: `1px solid ${error ? "#f87171" : "rgba(255,255,255,0.12)"}`,
            color: "#F4F1EC", fontSize: "13.5px", marginBottom: "10px",
          }}
        />
        {error && <p style={{ color: "#f87171", fontSize: "12px", marginBottom: "10px" }}>Incorrect password.</p>}

        <button type="submit" style={{ width: "100%", padding: "11px", borderRadius: "8px", background: "#D9A441", color: "#120F0D", fontWeight: 700, border: "none", cursor: "pointer", fontSize: "13.5px", marginTop: "8px" }}>
          Log in
        </button>

        <a href="/" style={{ display: "block", textAlign: "center", color: "#6b6460", fontSize: "12px", marginTop: "18px", textDecoration: "none" }}>
          &larr; Back to site
        </a>
      </form>
    </div>
  );
}