import { cn } from "@/lib/utils";

const tones = {
  peach:
    "radial-gradient(circle at 30% 30%, rgba(247,191,168,0.55), rgba(236,220,199,0.35) 45%, transparent 72%)",
  coral:
    "radial-gradient(circle at 35% 35%, rgba(240,135,111,0.45), rgba(247,191,168,0.3) 45%, transparent 72%)",
  gold: "radial-gradient(circle at 30% 30%, rgba(184,137,74,0.4), rgba(236,220,199,0.3) 45%, transparent 72%)",
} as const;

export function GradientBlob({
  className,
  tone = "peach",
  animate = true,
}: {
  className?: string;
  tone?: keyof typeof tones;
  animate?: boolean;
}) {
  return (
    <div
      aria-hidden
      style={{ backgroundImage: tones[tone] }}
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        animate && "animate-drift",
        className,
      )}
    />
  );
}

export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70" />
      <span className="size-1.5 rotate-45 bg-gold" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}

export function NoisyGrain({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]", className)}
    >
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}

export function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 48 48"
      className={cn("pointer-events-none absolute size-10 text-gold/70", className)}
    >
      <path
        d="M2 2v14M2 2h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="2" cy="2" r="2" fill="currentColor" />
    </svg>
  );
}
