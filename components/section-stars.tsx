import { cn } from "@/lib/utils"

type SectionStarsProps = {
  /** hero = motif plus dense ; soft = sections suivantes */
  variant?: "hero" | "soft"
  className?: string
}

/** Fond étoilé en pur CSS : pas d’hydratation, pas de centaines de nœuds DOM. */
export function SectionStars({
  variant = "soft",
  className,
}: SectionStarsProps) {
  return (
    <div
      className={cn(
        variant === "hero" ? "section-starfield-hero" : "section-starfield-soft",
        className
      )}
      aria-hidden
    />
  )
}
