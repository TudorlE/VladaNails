import { MessageCircle } from "lucide-react";
import type { SocialLink } from "@/data/types";

const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg {...strokeProps} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg {...strokeProps} className={className} aria-hidden>
      <path d="M15 4h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.6 5.82c-1.05-.9-1.66-2.18-1.66-3.6V2h-3.44v13.2a2.4 2.4 0 1 1-2.02-2.37V9.36a5.83 5.83 0 0 0-1-.09A5.84 5.84 0 1 0 14.34 15V9.05a7.3 7.3 0 0 0 4.26 1.36V6.98a4.85 4.85 0 0 1-1.99-1.16z" />
    </svg>
  );
}

const iconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  whatsapp: MessageCircle,
  tiktok: TikTokIcon,
};

export function SocialIcon({ icon, className }: { icon: SocialLink["icon"]; className?: string }) {
  const IconComponent = iconMap[icon];
  return <IconComponent className={className} />;
}
