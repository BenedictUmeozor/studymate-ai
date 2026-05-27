import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

type DeltaDirection = "up" | "down" | "neutral"

interface StatCardProps {
  label: string
  value: string | number
  delta?: string
  deltaDirection?: DeltaDirection
  icon?: LucideIcon
  className?: string
}

export function StatCard({
  label,
  value,
  delta,
  deltaDirection = "neutral",
  icon: Icon,
  className,
}: StatCardProps) {
  return (
    <div className={cn("flex flex-col gap-3 rounded-lg border border-border bg-card p-5", className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        {Icon && <Icon className="size-4 text-muted-foreground" />}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-semibold tracking-tight text-foreground">{value}</span>
        {delta && (
          <span
            className={cn(
              "mb-0.5 text-xs font-medium",
              deltaDirection === "up" && "text-emerald-400",
              deltaDirection === "down" && "text-red-400",
              deltaDirection === "neutral" && "text-muted-foreground",
            )}
          >
            {delta}
          </span>
        )}
      </div>
    </div>
  )
}
