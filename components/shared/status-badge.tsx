import { cn } from "@/lib/utils"

export type StatusVariant = "ready" | "processing" | "failed" | "draft"

interface StatusBadgeProps {
  status: StatusVariant
  label?: string
  className?: string
}

const statusConfig: Record<
  StatusVariant,
  { label: string; className: string; dotClassName: string }
> = {
  ready: {
    label: "Ready",
    className: "bg-emerald-950/60 text-emerald-400 border-emerald-800/50",
    dotClassName: "bg-emerald-400",
  },
  processing: {
    label: "Processing",
    className: "bg-amber-950/60 text-amber-400 border-amber-800/50",
    dotClassName: "bg-amber-400",
  },
  failed: {
    label: "Failed",
    className: "bg-red-950/60 text-red-400 border-red-800/50",
    dotClassName: "bg-red-400",
  },
  draft: {
    label: "Draft",
    className: "bg-zinc-800/60 text-zinc-400 border-zinc-700/50",
    dotClassName: "bg-zinc-400",
  },
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const config = statusConfig[status]
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        config.className,
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", config.dotClassName)} />
      {label ?? config.label}
    </span>
  )
}
