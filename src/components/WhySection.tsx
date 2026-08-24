import { IconUsers, IconShield, IconInfinity } from "./icons";

export default function WhySection() {
  return (
    <section style={{ background: "#0E0C0A", padding: "72px 24px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "0.22em", color: "#D9A441", fontWeight: 600, marginBottom: "12px" }}>WHY CHOOSE US</div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#F4F1EC", margin: 0 }}>Why PLAYCROWS</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {[
            { icon: <IconUsers />, title: "Active Community", desc: "Build your adventure alongside thousands of PLAYCROWS players. Events, guilds, and real connections every day." },
            { icon: <IconShield />, title: "Fair Gameplay", desc: "Enjoy a fully balanced experience without pay-to-win mechanics. Skill and dedication determine your legend." },
            { icon: <IconInfinity />, title: "Long-Term Adventure", desc: "A server architected for players who want a persistent, living gaming community — never wipe, always growing." },
          ].map((f, i) => (
            <div key={i} style={{ padding: "30px 26px", borderRadius: "14px", background: "rgba(35,29,25,0.55)", border: "1px solid rgba(255,255,255,0.07)", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(217,164,65,0.2)"; e.currentTarget.style.background = "rgba(35,29,25,0.85)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(35,29,25,0.55)"; }}
            >
              <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(217,164,65,0.1)", border: "1px solid rgba(217,164,65,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D9A441", marginBottom: "18px" }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: "13.5px", color: "#F4F1EC", margin: "0 0 10px" }}>{f.title}</h3>
              <p style={{ color: "#A9A19A", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}