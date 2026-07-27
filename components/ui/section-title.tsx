import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            {eyebrow}
            <span className={cn("h-px w-8 bg-gold/60", align === "left" && "hidden")} />
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
