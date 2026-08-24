  import { IconShield, IconUsers, IconInfinity, IconPlay } from "./icons";

  export default function Hero() {
    return (
      <section style={{ paddingTop: "60px", background: "#120F0D" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "24px 24px 0" }}>
          <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", minHeight: "520px", border: "1px solid rgba(255,255,255,0.08)", background: "#1a1410" }}>
          <img src="/assets/landingpage.png" alt="PLAYCROWS hero" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(18,15,13,0.3) 0%, rgba(18,15,13,0.5) 40%, rgba(18,15,13,0.9) 65%, rgba(18,15,13,0.98) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(18,15,13,0.65) 100%)" }} />
            <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "flex-end", minHeight: "520px", padding: "48px 60px" }}>
              <div style={{ maxWidth: "500px", width: "100%" }}>
                <div style={{ marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ height: "1px", width: "28px", background: "#D9A441" }} />
                  <span style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "0.22em", color: "#D9A441", fontWeight: 600 }}>THE ADVENTURE BEGINS</span>
                </div>
                <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.1, color: "#F4F1EC", margin: "0 0 16px" }}>
                  The Home of<br /><span style={{ color: "#D9A441" }}>PLAYCROWS</span>
                </h1>
                <p style={{ color: "#C8BFB7", fontSize: "15px", lineHeight: 1.7, margin: "0 0 6px" }}>
                  A new adventure begins. Gather your friends, choose your path, and build your legacy in the world of PLAYCROWS.
                </p>
                <p style={{ color: "#A9A19A", fontSize: "13px", margin: "0 0 28px", fontStyle: "italic" }}>Your adventure. Your community. Your legacy.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", marginBottom: "32px" }}>
                  {[{ icon: <IconShield />, label: "No Pay to Win" }, { icon: <IconUsers />, label: "Active Community" }, { icon: <IconInfinity />, label: "Never Wipe" }].map(f => (
                    <div key={f.label} style={{ display: "flex", alignItems: "center", gap: "7px", color: "#D0C8BF", fontSize: "13px" }}>
                      <span style={{ color: "#D9A441", display: "flex" }}>{f.icon}</span>{f.label}
                    </div>
                  ))}
                </div>
                <a href="https://account.playcrows.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "13px 30px", borderRadius: "10px", background: "#D9A441", color: "#120F0D", fontWeight: 700, fontSize: "14px", fontFamily: "'Cinzel', serif", letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 4px 24px rgba(217,164,65,0.3)" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#F0B94F"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 32px rgba(217,164,65,0.5)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#D9A441"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(217,164,65,0.3)"; }}
                ><IconPlay />Play PLAYCROWS</a>
              </div>
            </div>
          </div>              
        </div>
      </section>
    );
  }