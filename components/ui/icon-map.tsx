import {
  Sparkles,
  Gem,
  ShieldCheck,
  Wand2,
  Palette,
  Brush,
  Flower2,
  Focus,
  Clock,
  Award,
  Star,
  Heart,
  Feather,
  Crown,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Gem,
  ShieldCheck,
  Wand2,
  Palette,
  Brush,
  Flower2,
  Focus,
  Clock,
  Award,
  Star,
  Heart,
  Feather,
  Crown,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const IconComponent = iconMap[name] ?? Sparkles;
  return <IconComponent className={className} aria-hidden />;
}
