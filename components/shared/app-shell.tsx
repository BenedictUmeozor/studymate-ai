import { cn } from "@/lib/utils"

interface AppShellProps {
  sidebar: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function AppShell({ sidebar, children, className }: AppShellProps) {
  return (
    <div className={cn("flex h-screen overflow-hidden bg-background", className)}>
      <aside className="flex h-full w-60 shrink-0 flex-col border-r border-border bg-sidebar">
        {sidebar}
      </aside>
      <main className="flex flex-1 flex-col overflow-y-auto">{children}</main>
    </div>
  )
}
