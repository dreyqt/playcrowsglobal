import logo from "../assets/logo.png";
import { IconDiscord, IconFacebook } from "./icons";

export default function Footer() {
  return (
    <footer style={{ background: "#0A0806", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "56px 24px 32px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <img src={logo} alt="PLAYCROWS logo" style={{ width: "34px", height: "34px", borderRadius: "8px", objectFit: "cover" }} />
              <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: "15px", color: "#F4F1EC", letterSpacing: "0.08em" }}>PLAYCROWS</span>
            </div>
            <p style={{ color: "#5a5450", fontSize: "13px", lineHeight: 1.7, margin: "0 0 22px", maxWidth: "240px" }}>The home of your next adventure. A premium private gaming network built for the community.</p>
            <div style={{ display: "flex", gap: "10px" }}>
              {[{ href: "https://discord.gg/playcrows", icon: <IconDiscord />, label: "Discord" }, { href: "https://facebook.com/playcrows", icon: <IconFacebook />, label: "Facebook" }].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} style={{ width: "34px", height: "34px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b6460", transition: "all 0.15s", textDecoration: "none" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#D9A441"; e.currentTarget.style.borderColor = "rgba(217,164,65,0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#6b6460"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>
          {[
            { title: "Community", links: [{ label: "Discord", href: "https://discord.gg/playcrows" }, { label: "Facebook", href: "https://facebook.com/playcrows" }] },
            { title: "Game", links: [{ label: "PLAYCROWS", href: "https://playcrowswebsite.vercel.app" }, { label: "DDTANK", href: "#" }, { label: "Server Features", href: "https://playcrowswebsite.vercel.app" }, { label: "News", href: "#" }] },
            { title: "Information", links: [{ label: "About", href: "https://playcrowswebsite.vercel.app/about" }, { label: "Rules", href: "https://playcrowswebsite.vercel.app/rules" }, { label: "Privacy Policy", href: "https://playcrowswebsite.vercel.app/privacy" }, { label: "Terms of Service", href: "https://playcrowswebsite.vercel.app/terms" }] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "#D9A441", textTransform: "uppercase", margin: "0 0 18px" }}>{col.title}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map(l => (
                  <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ color: "#5a5450", fontSize: "13px", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#F4F1EC"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#5a5450"; }}
                  >{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
          <p style={{ color: "#3a3430", fontSize: "12px", margin: 0 }}>© 2026 PLAYCROWS. All Rights Reserved.</p>
          <p style={{ color: "#2e2a28", fontSize: "11px", margin: 0, lineHeight: 1.6, maxWidth: "580px" }}>PLAYCROWS is a private gaming community and is not affiliated with the original game publisher or its respective trademarks.</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}