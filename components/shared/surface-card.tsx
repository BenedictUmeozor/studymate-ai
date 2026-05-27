import { cn } from "@/lib/utils"

type Padding = "none" | "sm" | "md" | "lg"

interface SurfaceCardProps {
  children: React.ReactNode
  className?: string
  padding?: Padding
}

const paddingMap: Record<Padding, string> = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
}

export function SurfaceCard({ children, className, padding = "md" }: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card text-card-foreground",
        paddingMap[padding],
        className,
      )}
    >
      {children}
    </div>
  )
}
