const NAIL_PATH =
  "M0.5,0 C0.62,0 0.72,0.05 0.8,0.15 C0.94,0.15 1,0.32 1,0.5 C1,0.72 0.95,0.9 0.8,0.98 L0.2,0.98 C0.05,0.9 0,0.72 0,0.5 C0,0.32 0.06,0.15 0.2,0.15 C0.28,0.05 0.38,0 0.5,0 Z";

/**
 * The site's signature nail silhouette, reused as a small filled icon
 * (gallery placeholders, category keys) — same geometry as the `.clip-nail`
 * mask applied to hero/portrait imagery, so the motif reads as one system.
 */
export function NailIcon({
  fill = "currentColor",
  className,
  glossy = true,
}: {
  fill?: string;
  className?: string;
  glossy?: boolean;
}) {
  return (
    <svg viewBox="0 0 1 1" className={className} aria-hidden>
      <path d={NAIL_PATH} fill={fill} />
      {glossy ? (
        <ellipse cx="0.68" cy="0.28" rx="0.12" ry="0.08" fill="white" opacity="0.35" />
      ) : null}
    </svg>
  );
}
