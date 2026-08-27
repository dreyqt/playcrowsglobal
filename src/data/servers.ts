import picture1 from "../assets/picture1.png";
import picture2 from "../assets/picture2.png";
import picture3 from "../assets/picture3.png";


export type ServerStatus = "online" | "coming_soon" | "maintenance" | "pre_register";
export type Accent = "gold" | "purple";

export interface Reward {
  id: string;
  label: string;
  qty: string;
}

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
  rewards?: Reward[];
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
  {
    id: "playcrows-v2",
    title: "PLAYCROWS V2",
    subtitle: "Private Server",
    description: "Boot camp for PLAYCROWS V2 — pre-register now and lock in exclusive launch rewards before the gates open.",
    image: picture3,
    status: "pre_register",
    accent: "purple",
    badgeLabel: "PRE-REGISTER",
    footerSubtitle: "MMORPG",
    rewards: [
      { id: "r1", label: "Morion (Bound)", qty: "×200" },
      { id: "r2", label: "Gold Chest (Bound)", qty: "×500" },
      { id: "r3", label: "Sunset's Mount Summon Style x11 (Bound)", qty: "×20" },
      { id: "r4", label: "Sunset's Weapon Summon Style x11 (Bound)", qty: "×20" },
      { id: "r5", label: "[L] Weapon Style Challenge Ticket (Bound)", qty: "×1" },
      { id: "r6", label: "[L] Mount Summon Challenge Ticket (Bound)", qty: "×1" },
    ],
  },
];

export const STATUS_LABEL: Record<ServerStatus, string> = {
  online: "LIVE",
  coming_soon: "COMING SOON",
  maintenance: "MAINTENANCE",
  pre_register: "PRE-REGISTER",
};