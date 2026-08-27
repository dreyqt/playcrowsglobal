import ServerCard from "./ServerCard";
import CountdownTimer from "./CountdownTimer";
import { IconPlay } from "./icons";
import { useServers } from "../hooks/useServers";
import { STATUS_LABEL } from "../data/servers";

export default function ServerCards() {
  const { servers } = useServers();

  return (
    <section id="servers" style={{ background: "#120F0D", padding: "56px 24px 64px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ marginBottom: "36px" }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#F4F1EC", margin: "0 0 6px" }}>Our Servers</h2>
          <p style={{ color: "#A9A19A", fontSize: "13.5px", margin: 0 }}>Choose your world. Start your adventure.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
          {servers.map(s => (
            <ServerCard
              key={s.id}
              characterImg={s.image}
              title={s.title}  
              subtitle={s.subtitle}  
              description={s.description}
              badgeLabel={STATUS_LABEL[s.status]}
              badgeColor={s.accent === "gold" ? "gold" : "purple"}
              footerBadgeLabel={STATUS_LABEL[s.status]}
              footerSubtitle={s.footerSubtitle}
              featuresHref={s.featuresHref}
              featuresDisabled={s.status !== "online"}
              accent={s.accent}
              ctaSlot={
                s.status === "online" ? (
                  <a href={s.playHref || "#"} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 28px", borderRadius: "8px", background: "#D9A441", color: "#120F0D", fontWeight: 700, fontSize: "13.5px", textDecoration: "none", boxShadow: "0 4px 16px rgba(217,164,65,0.3)" }}>
                    <IconPlay />Play now
                  </a>
                ) : s.status === "coming_soon" ? (
                  <div>
                    <div style={{ fontSize: "10px", fontWeight: 700, color: "#a78bfa", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px", fontFamily: "'Cinzel', serif" }}>Opening in</div>
                    <CountdownTimer targetDate={s.openingAt} />
                  </div>
                ) : (
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 28px", borderRadius: "8px", background: "rgba(248,113,113,0.12)", border: "1px solid rgba(248,113,113,0.3)", color: "#f87171", fontWeight: 700, fontSize: "13px" }}>
                    Under Maintenance
                  </div>
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}