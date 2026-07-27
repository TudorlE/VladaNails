import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap font-sans font-medium tracking-wide transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-ivory dark:bg-gold dark:text-ink hover:bg-gold hover:text-ink shadow-luxury hover:shadow-gold-glow",
  secondary:
    "border border-ink/20 text-foreground hover:border-gold hover:bg-gold/[0.06] hover:text-gold dark:border-foreground/20",
  ghost: "text-foreground hover:text-gold",
};

const sizes: Record<Size, string> = {
  md: "h-12 rounded-full px-7 text-sm",
  lg: "h-14 rounded-full px-9 text-base",
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: boolean;
}

type ButtonProps = CommonProps &
  (
    | ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon = true,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 -translate-x-[120%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]"
      />
      <span className="relative">{children}</span>
      {icon ? (
        <ArrowUpRight
          className="relative size-4 -translate-y-0.5 translate-x-0 opacity-70 transition-all duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-1 group-hover:opacity-100"
          aria-hidden
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
