/**
 * Global SVG resources referenced by class name elsewhere (e.g. `.clip-nail`
 * uses `url(#nail-clip)`). Rendered once in the root layout, zero visual
 * footprint. clipPathUnits="objectBoundingBox" makes the path scale with
 * whatever element it's applied to.
 */
export function SvgDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
      <defs>
        <clipPath id="nail-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0 C0.62,0 0.72,0.05 0.8,0.15 C0.94,0.15 1,0.32 1,0.5 C1,0.72 0.95,0.9 0.8,0.98 L0.2,0.98 C0.05,0.9 0,0.72 0,0.5 C0,0.32 0.06,0.15 0.2,0.15 C0.28,0.05 0.38,0 0.5,0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}
