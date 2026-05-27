import { cn } from "@/lib/utils"
import { ExternalLink, FileText } from "lucide-react"

interface SourceCitationCardProps {
  title: string
  excerpt: string
  page?: number | string
  href?: string
  className?: string
}

export function SourceCitationCard({
  title,
  excerpt,
  page,
  href,
  className,
}: SourceCitationCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-4 transition-colors hover:border-border/60 hover:bg-card/80",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-muted">
          <FileText className="size-3.5 text-muted-foreground" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-sm font-medium text-foreground">{title}</p>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink className="size-3.5" />
              </a>
            )}
          </div>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {excerpt}
          </p>
          {page !== undefined && (
            <p className="mt-2 text-xs text-muted-foreground/60">Page {page}</p>
          )}
        </div>
      </div>
    </div>
  )
}
