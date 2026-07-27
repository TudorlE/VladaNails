import { cn } from "@/lib/utils";

const sizes = {
  xs: "size-2.5",
  sm: "size-4",
  md: "size-7",
  lg: "size-12",
  xl: "size-20",
};

export function PolishSwatch({
  hex,
  size = "md",
  className,
}: {
  hex: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      style={{ backgroundColor: hex }}
      className={cn("polish-swatch inline-block shrink-0", sizes[size], className)}
    />
  );
}
