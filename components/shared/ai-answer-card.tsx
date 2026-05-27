import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

interface Citation {
  id: number
  label: string
}

interface AiAnswerCardProps {
  answer: string
  citations?: Citation[]
  isLoading?: boolean
  className?: string
}

export function AiAnswerCard({ answer, citations, isLoading, className }: AiAnswerCardProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-5", className)}>
      <div className="mb-3 flex items-center gap-2">
        <div className="flex size-6 items-center justify-center rounded-md bg-foreground/10">
          <Sparkles className="size-3.5 text-foreground" />
        </div>
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          AI Answer
        </span>
      </div>

      {isLoading ? (
        <div className="flex flex-col gap-2">
          <div className="h-3 w-full animate-pulse rounded bg-muted" />
          <div className="h-3 w-4/5 animate-pulse rounded bg-muted" />
          <div className="h-3 w-3/5 animate-pulse rounded bg-muted" />
        </div>
      ) : (
        <>
          <p className="text-sm leading-relaxed text-foreground">{answer}</p>
          {citations && citations.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {citations.map((citation) => (
                <span
                  key={citation.id}
                  className="inline-flex cursor-pointer items-center rounded-md border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  [{citation.id}] {citation.label}
                </span>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
