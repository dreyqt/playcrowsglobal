import picture1 from "../assets/picture1.png";
import picture2 from "../assets/picture2.png";

export type ServerStatus = "online" | "coming_soon" | "maintenance";
export type Accent = "gold" | "purple";

export interface ServerData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  status: ServerStatus;
  accent: Accent;
  badgeLabel: string;
  footerSubtitle: string;
  featuresHref?: string;
  playHref?: string;
  openingAt?: string;
}

export const DEFAULT_SERVERS: ServerData[] = [
  {
    id: "playcrows",
    title: "PLAYCROWS",
    subtitle: "Night Crows",
    description: "Experience a reimagined Night Crows adventure with an active community, enhanced progression, and a world built for long-term gameplay.",
    image: picture1,
    status: "online",
    accent: "gold",
    badgeLabel: "MAIN",
    footerSubtitle: "Night Crows Private Server",
    featuresHref: "https://playcrowswebsite.vercel.app",
    playHref: "https://account.playcrows.com",
  },
  {
    id: "ddtank",
    title: "DDTANK",
    subtitle: "Multiplayer Battle",
    description: "A classic multiplayer battle experience is coming soon. Prepare your team and get ready for the next PLAYCROWS adventure.",
    image: picture2,
    status: "coming_soon",
    accent: "purple",
    badgeLabel: "COMING SOON",
    footerSubtitle: "Classic Multiplayer Battle",
    openingAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const STATUS_LABEL: Record<ServerStatus, string> = {
  online: "LIVE",
  coming_soon: "COMING SOON",
  maintenance: "MAINTENANCE",
};