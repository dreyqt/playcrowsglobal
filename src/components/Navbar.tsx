import { useState, useRef } from "react";
import logo from "../assets/logo.png";
import { useServers } from "../hooks/useServers";
import { IconGrid, IconDiscord, IconNews, IconBook, IconChevronDown, IconUser, IconDownload, IconCrow, IconGamepad, IconMenu, IconX } from "./icons";

export default function Navbar() {
  const { servers } = useServers();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeServer, setActiveServer] = useState<string>(servers.length > 0 ? servers[0].id : "");
  const [mobileOpen, setMobileOpen] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onEnterServers = () => { if (leaveTimer.current) clearTimeout(leaveTimer.current); setDropdownOpen(true); };
  const onLeave = () => { leaveTimer.current = setTimeout(() => setDropdownOpen(false), 180); };
  const onEnterPanel = () => { if (leaveTimer.current) clearTimeout(leaveTimer.current); };

  const activeServerData = servers.find(s => s.id === activeServer);

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(18,15,13,0.96)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.07)", height: "60px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="https://playcrowswebsite.vercel.app" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none" }}>
              <img src={logo} alt="PLAYCROWS logo" style={{ width: "34px", height: "34px", borderRadius: "8px", objectFit: "cover" }} />
              <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: "15px", color: "#F4F1EC", letterSpacing: "0.08em" }}>PLAYCROWS</span>
            </a>
            <div style={{ width: "1px", height: "22px", background: "rgba(255,255,255,0.12)", margin: "0 20px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "2px" }} className="nav-desktop">
              <div style={{ position: "relative" }} onMouseEnter={onEnterServers} onMouseLeave={onLeave}>
                <button onClick={() => setDropdownOpen(o => !o)} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "8px", background: dropdownOpen ? "rgba(217,164,65,0.12)" : "transparent", border: "none", cursor: "pointer", color: dropdownOpen ? "#D9A441" : "#A9A19A", fontSize: "13.5px", fontWeight: 500, fontFamily: "'Inter', sans-serif", transition: "all 0.15s" }}
                  onMouseEnter={e => { if (!dropdownOpen) { e.currentTarget.style.color = "#F4F1EC"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; } }}
                  onMouseLeave={e => { if (!dropdownOpen) { e.currentTarget.style.color = "#A9A19A"; e.currentTarget.style.background = "transparent"; } }}
                >
                  <IconGrid />Servers
                  <span style={{ transform: dropdownOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s", display: "flex" }}><IconChevronDown /></span>
                </button>
              </div>
              <a href="https://discord.gg/sDBgM37ek" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "8px", color: "#A9A19A", fontSize: "13.5px", fontWeight: 500, textDecoration: "none", transition: "all 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#F4F1EC"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#A9A19A"; e.currentTarget.style.background = "transparent"; }}
              ><IconDiscord />Community</a>
              <a href="https://playcrowswebsite.vercel.app" style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "8px", color: "#A9A19A", fontSize: "13.5px", fontWeight: 500, textDecoration: "none", transition: "all 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#F4F1EC"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#A9A19A"; e.currentTarget.style.background = "transparent"; }}
              ><IconNews />News</a>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a href="https://playcrowswebsite.vercel.app" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.18)", color: "#F4F1EC", fontSize: "13px", fontWeight: 500, textDecoration: "none", transition: "all 0.15s", background: "transparent" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#D9A441"; e.currentTarget.style.color = "#D9A441"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "#F4F1EC"; }}
            ><IconDownload /><span className="hide-sm">Download PlayCrows</span><span className="show-sm">Download</span></a>
            <a href="https://playcrowswebsite.vercel.app" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", padding: "7px 14px", borderRadius: "8px", background: "#D9A441", color: "#120F0D", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "background 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#F0B94F"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#D9A441"; }}
            ><IconUser />Account<IconChevronDown /></a>
            <button className="nav-mobile-toggle" onClick={() => setMobileOpen(o => !o)} style={{ background: "none", border: "none", cursor: "pointer", color: "#F4F1EC", display: "none", padding: "4px" }}>
              {mobileOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>

        {dropdownOpen && (
          <div onMouseEnter={onEnterPanel} onMouseLeave={onLeave} style={{ position: "absolute", top: "60px", left: 0, right: 0, background: "rgba(18,15,12,0.6)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "16px 0", animation: "fadeSlideDown 0.18s ease" }}>
            <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
              <div style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "12px", marginBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.08)", scrollBehavior: "smooth" }}>
                {servers.map(server => (
                  <button
                    key={server.id}
                    onMouseEnter={() => setActiveServer(server.id)}
                    style={{
                      display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", padding: "10px 14px", borderRadius: "8px",
                      background: activeServer === server.id ? "rgba(217,164,65,0.1)" : "transparent",
                      border: activeServer === server.id ? "1px solid rgba(217,164,65,0.25)" : "1px solid transparent",
                      cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.15s", flexShrink: 0,
                    }}
                    onMouseLeave={e => { 
                      if (activeServer !== server.id) {
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: server.accent === "gold" ? "linear-gradient(135deg,#3a1f00,#8B5E1A)" : "linear-gradient(135deg,#1a1535,#3d2d6e)", display: "flex", alignItems: "center", justifyContent: "center", color: server.accent === "gold" ? "#D9A441" : "#a78bfa", fontSize: "14px" }}>
                      {server.accent === "gold" ? <IconCrow /> : <IconGamepad />}
                    </div>
                    <div style={{ fontSize: "10px", fontWeight: 600, color: "#F4F1EC", textAlign: "center", fontFamily: "'Cinzel', serif" }}>{server.title}</div>
                    <div style={{ fontSize: "9px", color: "#A9A19A" }}>{server.subtitle}</div>
                  </button>
                ))}
              </div>

              {activeServerData ? (
                <div style={{ animation: "fadeIn 0.15s ease", paddingBottom: "4px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <div style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", fontWeight: 700, color: "#F4F1EC" }}>{activeServerData.title}</div>
                    <span style={{ fontSize: "9px", fontWeight: 700, padding: "4px 8px", borderRadius: "4px", background: activeServerData.status === "online" ? "rgba(74,222,128,0.15)" : activeServerData.status === "coming_soon" ? "rgba(251,191,36,0.15)" : "rgba(248,113,113,0.15)", color: activeServerData.status === "online" ? "#4ade80" : activeServerData.status === "coming_soon" ? "#fbbf24" : "#f87171", border: `1px solid ${activeServerData.status === "online" ? "rgba(74,222,128,0.3)" : activeServerData.status === "coming_soon" ? "rgba(251,191,36,0.3)" : "rgba(248,113,113,0.3)"}`, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      {activeServerData.status === "online" ? "LIVE" : activeServerData.status === "coming_soon" ? "COMING SOON" : "MAINTENANCE"}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {[{ label: "Overview", desc: "Learn about the server" }, { label: "Server Features", desc: "Rates, events, and mechanics" }].map(item => (
                      <a key={item.label} href={activeServerData.featuresHref || "https://playcrowswebsite.vercel.app"} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderRadius: "0", background: "transparent", border: "none", textDecoration: "none", transition: "all 0.15s" }}>
                        <div><div style={{ fontSize: "12.5px", fontWeight: 600, color: "#F4F1EC" }}>{item.label}</div><div style={{ fontSize: "11px", color: "#A9A19A", marginTop: "2px" }}>{item.desc}</div></div>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A9A19A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </nav>

      {mobileOpen && (
        <div style={{ position: "fixed", top: "60px", left: 0, right: 0, bottom: 0, background: "rgba(18,15,13,0.98)", zIndex: 99, padding: "24px", display: "flex", flexDirection: "column", gap: "8px", backdropFilter: "blur(12px)" }}>
          {[{ label: "Servers", href: "#servers", icon: <IconGrid /> }, { label: "Community", href: "https://discord.gg/playcrows", icon: <IconDiscord /> }, { label: "News", href: "#", icon: <IconNews /> }, { label: "Wiki", href: "https://playcrowswebsite.vercel.app/wiki", icon: <IconBook /> }].map(item => (
            <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", borderRadius: "10px", background: "rgba(255,255,255,0.04)", color: "#F4F1EC", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}>{item.icon}{item.label}</a>
          ))}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", margin: "8px 0" }} />
          <a href="https://account.playcrows.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px", borderRadius: "10px", background: "#D9A441", color: "#120F0D", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}><IconUser />Account</a>
        </div>
      )}

      <style>{`
        @keyframes fadeSlideDown { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @media (max-width: 900px) { .nav-desktop { display:none !important; } .nav-mobile-toggle { display:flex !important; } .hide-sm { display:none !important; } }
        @media (min-width: 901px) { .show-sm { display:none !important; } }
      `}</style>
    </>
  );
}