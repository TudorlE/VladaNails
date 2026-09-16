import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Button styled after paintnailslondon.co.uk's `.pnl-hero-btn` — square
 * corners, uppercase tracked label, a fill that swipes in on hover. Used
 * only inside `.theme-paint`-scoped sections (Hero, Booking, Products);
 * the rest of the site keeps the rounded-pill `Button` component.
 */
type Variant = "sage" | "ghost" | "solid";

const variants: Record<Variant, string> = {
  sage: "border-[#B4BFB4] text-[#6c3231] before:bg-[#B4BFB4] hover:text-[#B4BFB4]",
  ghost:
    "border-[#6c3231]/35 text-[#6c3231] before:bg-[#6c3231] hover:text-[#fef9ed] before:translate-y-full hover:before:translate-y-0",
  // Filled by default, same maroon as the selected "Serviciu" pill in
  // Booking — used for the navbar CTA so it reads as solid, not outline.
  solid:
    "border-[#6c3231] bg-[#6c3231] text-[#fef9ed] before:bg-[#4f2523] before:translate-y-full hover:before:translate-y-0",
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type PaintButtonProps = CommonProps &
  (
    | ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

export function PaintButton({
  children,
  variant = "sage",
  className,
  href,
  ...rest
}: PaintButtonProps) {
  const classes = cn(
    "relative isolate overflow-hidden inline-flex items-center justify-center whitespace-nowrap border px-7 py-[18px] font-sans text-[10px] font-medium uppercase tracking-[0.18em]",
    "before:absolute before:inset-0 before:-z-10 before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.65,0,0.35,1)]",
    "transition-colors duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]",
    variant === "sage" && "before:translate-y-0 hover:before:-translate-y-full",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
