import { ReactNode } from "react";
import { IconPlay, IconFileText } from "./icons";

type ServerCardProps = {
  characterImg: string;
  title: string;
  subtitle: string;
  description: string;
  badgeLabel: string;
  badgeColor: "gold" | "purple";
  footerBadgeLabel: string;
  footerSubtitle: string;
  featuresHref?: string;
  featuresDisabled?: boolean;
  ctaSlot: ReactNode;
  accent?: "gold" | "purple";
}

export default function ServerCard({
  characterImg, title, subtitle, description,
  badgeLabel, badgeColor, footerBadgeLabel, footerSubtitle,
  featuresHref, featuresDisabled, ctaSlot, accent = "gold",
}: ServerCardProps) {
  const isGold = accent === "gold";
  const accentColor = isGold ? "#D9A441" : "#a78bfa";
  const cardBg = isGold ? "#1a1410" : "#1a1535";
  const borderColor = isGold ? "rgba(217,164,65,0.18)" : "rgba(167,139,250,0.18)";

  return (
    <div>
      {/* Wrapper — fixed top padding reserves room for the character to pop up, so both cards align */}
      <div style={{ position: "relative", paddingTop: "70px" }}>
        {/* Card body */}
        <div style={{
          position: "relative",
          borderRadius: "14px",
          overflow: "hidden",
          height: "270px",
          background: `linear-gradient(160deg, ${cardBg}, #0E0C0A)`,
          border: `1px solid ${borderColor}`,
          zIndex: 1,
        }}>
          {/* Badge */}
          <div style={{ position: "relative", zIndex: 2, padding: "44px 24px 20px", maxWidth: "58%" }}>{badgeLabel}</div>

          {/* Text content — fixed max-width, always clear of the character */}
          <div style={{ position: "relative", zIndex: 2, padding: "48px 24px 24px", maxWidth: "56%" }}>
            <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: "1.6rem", color: "#F4F1EC", lineHeight: 1, marginBottom: "4px" }}>{title}</div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", fontWeight: 600, color: accentColor, letterSpacing: "0.18em", marginBottom: "14px", textTransform: "uppercase" }}>{subtitle}</div>
            <p style={{ color: "#B0A89F", fontSize: "12.5px", lineHeight: 1.55, marginBottom: "12px" }}>{description}</p>
          </div>
        </div>

        {/* Character — FIXED box size, object-fit contain keeps proportions consistent across different art */}
        <div style={{
          position: "absolute",
          top: 0,
          right: "8%",
          width: "220px",
          height: "340px",
          zIndex: 2,
          pointerEvents: "none",
        }}>
          <img
            src={characterImg}
            alt={`${title} character art`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "bottom",
              filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.5))",
            }}
          />
        </div>
      </div>

      {/* Below-card info bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 4px 0", flexWrap: "wrap", gap: "8px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "14px", fontWeight: 700, color: "#F4F1EC" }}>{title}</span>
            <span style={{ fontSize: "10px", fontWeight: 700, padding: "3px 8px", borderRadius: "5px", background: isGold ? "#D9A441" : "rgba(167,139,250,0.15)", color: isGold ? "#120F0D" : "#a78bfa", border: isGold ? "none" : "1px solid rgba(167,139,250,0.3)", letterSpacing: "0.05em" }}>{footerBadgeLabel}</span>
          </div>
          <div style={{ fontSize: "12px", color: "#A9A19A", marginTop: "3px" }}>{footerSubtitle}</div>
        </div>
        {featuresDisabled ? (
          <button disabled style={{ display: "flex", alignItems: "center", gap: "7px", padding: "8px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", color: "#5a5460", fontSize: "12.5px", fontWeight: 500, background: "transparent", cursor: "not-allowed", opacity: 0.5 }}>
            <IconFileText />Server Features
          </button>
        ) : (
          <a href={featuresHref} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "7px", padding: "8px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", color: "#C8C0B8", fontSize: "12.5px", fontWeight: 500, textDecoration: "none", background: "transparent", transition: "all 0.15s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = accentColor; e.currentTarget.style.color = accentColor; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#C8C0B8"; }}
          ><IconFileText />Server Features</a>
        )}
      </div>
    </div>
  );
}

export { IconPlay };