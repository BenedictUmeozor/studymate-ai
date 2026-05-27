import { Button } from "@/components/ui/button"
import { AiAnswerCard } from "@/components/shared/ai-answer-card"
import { CommandSearch } from "@/components/shared/command-search"
import { EmptyState } from "@/components/shared/empty-state"
import { PageHeader } from "@/components/shared/page-header"
import { SourceCitationCard } from "@/components/shared/source-citation-card"
import { StatCard } from "@/components/shared/stat-card"
import { StatusBadge } from "@/components/shared/status-badge"
import { SurfaceCard } from "@/components/shared/surface-card"
import {
  BookOpen,
  ExternalLink,
  FileQuestion,
  FileText,
  Hash,
  MessageSquare,
  Plus,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1 border-b border-border pb-4">
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
      {children}
    </section>
  )
}

function Row({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>{children}</div>
}

export default function DesignSystemPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Topbar */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 px-6 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex size-6 items-center justify-center rounded bg-foreground">
            <BookOpen className="size-3.5 text-background" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-foreground">StudyMate AI</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm text-muted-foreground">Design System</span>
        </div>
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ExternalLink className="size-3" />
          Back to app
        </Link>
      </header>

      {/* Content */}
      <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
        {/* Hero */}
        <div className="mb-16 flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Foundation
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Design System</h1>
          <p className="max-w-xl text-base text-muted-foreground">
            The visual language for StudyMate AI. Dark-first, monochrome, serious. Built on shadcn
            radix-nova with Geist Sans.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {/* ── Typography ─────────────────────────────── */}
          <Section title="Typography" description="Geist Sans · dark-first scale">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="mb-1 text-xs text-muted-foreground">Display</p>
                  <p className="text-4xl font-semibold tracking-tight text-foreground">
                    Chat with your documents.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="mb-1 text-xs text-muted-foreground">Heading / h1</p>
                  <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                    My Library
                  </h1>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="mb-1 text-xs text-muted-foreground">Subheading / h2</p>
                  <h2 className="text-lg font-semibold tracking-tight text-foreground">
                    Recent Documents
                  </h2>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="mb-1 text-xs text-muted-foreground">Body</p>
                  <p className="text-sm leading-relaxed text-foreground">
                    StudyMate AI lets you upload academic PDFs, ask questions, and get
                    source-grounded answers. Every response cites the exact passage it came from.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="mb-1 text-xs text-muted-foreground">Small / Muted</p>
                  <p className="text-xs text-muted-foreground">
                    Last updated 2 hours ago · 3 sources · 12 pages
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="mb-1 text-xs text-muted-foreground">Label / Uppercase</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Documents · 24
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="mb-1 text-xs text-muted-foreground">Mono / Code</p>
                  <code className="font-mono text-sm text-foreground">
                    GET /api/documents/:id/chat
                  </code>
                </div>
              </div>
            </div>
          </Section>

          {/* ── Buttons ─────────────────────────────────── */}
          <Section title="Buttons" description="shadcn Button — radix-nova variants">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-xs text-muted-foreground">Variants</p>
                <Row>
                  <Button variant="default">Default</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                </Row>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-muted-foreground">Sizes</p>
                <Row className="items-end">
                  <Button size="lg">Large</Button>
                  <Button size="default">Default</Button>
                  <Button size="sm">Small</Button>
                  <Button size="xs">Extra Small</Button>
                </Row>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-muted-foreground">With icons</p>
                <Row>
                  <Button>
                    <Plus data-icon="inline-start" />
                    New Document
                  </Button>
                  <Button variant="outline">
                    <Sparkles data-icon="inline-start" />
                    Ask AI
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageSquare />
                  </Button>
                </Row>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-muted-foreground">Disabled state</p>
                <Row>
                  <Button disabled>Default</Button>
                  <Button variant="outline" disabled>
                    Outline
                  </Button>
                </Row>
              </div>
            </div>
          </Section>

          {/* ── Inputs & Search ─────────────────────────── */}
          <Section title="Inputs & Search" description="CommandSearch + native inputs">
            <div className="flex flex-col gap-4">
              <CommandSearch placeholder="Search documents, summaries, quizzes..." />
              <div className="flex flex-col gap-2">
                <p className="text-xs text-muted-foreground">Native input</p>
                <input
                  type="text"
                  placeholder="Document title..."
                  className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:bg-background focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-muted-foreground">Textarea</p>
                <textarea
                  placeholder="Ask a question about your document..."
                  rows={3}
                  className="w-full resize-none rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:bg-background focus:outline-none"
                />
              </div>
            </div>
          </Section>

          {/* ── Surface Cards ───────────────────────────── */}
          <Section title="Surface Cards" description="SurfaceCard — bg-card · border-border">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <SurfaceCard>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-foreground">Default padding (md)</p>
                  <p className="text-xs text-muted-foreground">
                    Used for content panels, document previews, and information blocks.
                  </p>
                </div>
              </SurfaceCard>
              <SurfaceCard padding="lg">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-foreground">Large padding</p>
                  <p className="text-xs text-muted-foreground">
                    Used for featured sections or the main content area cards.
                  </p>
                </div>
              </SurfaceCard>
              <SurfaceCard padding="sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-md bg-muted">
                    <FileText className="size-4 text-muted-foreground" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-medium text-foreground">Small padding</p>
                    <p className="text-xs text-muted-foreground">Compact row card</p>
                  </div>
                </div>
              </SurfaceCard>
              <SurfaceCard padding="none" className="overflow-hidden">
                <div className="border-b border-border px-4 py-3">
                  <p className="text-sm font-medium text-foreground">No padding</p>
                </div>
                <div className="px-4 py-3">
                  <p className="text-xs text-muted-foreground">Managed internally</p>
                </div>
              </SurfaceCard>
            </div>
          </Section>

          {/* ── Stat Cards ──────────────────────────────── */}
          <Section title="Stat Cards" description="Metrics and counts at a glance">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatCard label="Documents" value="24" delta="+3 this week" deltaDirection="up" icon={FileText} />
              <StatCard label="Quizzes" value="8" delta="−1" deltaDirection="down" icon={Hash} />
              <StatCard label="Sources cited" value="142" delta="+18" deltaDirection="up" icon={BookOpen} />
              <StatCard label="Collaborators" value="3" icon={Users} />
            </div>
          </Section>

          {/* ── Document Card Mock ──────────────────────── */}
          <Section
            title="Document Card"
            description="Represents an uploaded document in the library"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Attention Is All You Need",
                  meta: "PDF · 15 pages · 2.1 MB",
                  date: "Uploaded 3 days ago",
                  status: "ready" as const,
                },
                {
                  title: "Deep Learning Fundamentals",
                  meta: "PDF · 342 pages · 18.4 MB",
                  date: "Uploading...",
                  status: "processing" as const,
                },
                {
                  title: "Lecture Notes — Week 7",
                  meta: "PDF · 8 pages · 0.9 MB",
                  date: "Draft · not indexed",
                  status: "draft" as const,
                },
                {
                  title: "Corrupted Export.pdf",
                  meta: "PDF · — pages · 0 KB",
                  date: "Failed 1 hour ago",
                  status: "failed" as const,
                },
              ].map((doc) => (
                <SurfaceCard key={doc.title} padding="sm" className="cursor-pointer hover:border-border/60 transition-colors">
                  <div className="flex items-start gap-3 p-1">
                    <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-muted">
                      <FileText className="size-4 text-muted-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="truncate text-sm font-medium text-foreground">{doc.title}</p>
                        <StatusBadge status={doc.status} />
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground">{doc.meta}</p>
                      <p className="mt-1 text-xs text-muted-foreground/60">{doc.date}</p>
                    </div>
                  </div>
                </SurfaceCard>
              ))}
            </div>
          </Section>

          {/* ── Status Badges ───────────────────────────── */}
          <Section title="Status Badges" description="Semantic status indicators — no raw colors">
            <Row>
              <StatusBadge status="ready" />
              <StatusBadge status="processing" />
              <StatusBadge status="failed" />
              <StatusBadge status="draft" />
              <StatusBadge status="ready" label="Indexed" />
              <StatusBadge status="processing" label="Uploading" />
              <StatusBadge status="failed" label="Error" />
              <StatusBadge status="draft" label="Pending" />
            </Row>
          </Section>

          {/* ── Source Citations ────────────────────────── */}
          <Section
            title="Source Citation Card"
            description="Displayed below AI answers to show grounding sources"
          >
            <div className="flex flex-col gap-2">
              <SourceCitationCard
                title="Attention Is All You Need"
                excerpt="The Transformer follows this overall architecture using stacked self-attention and point-wise, fully connected layers for both the encoder and decoder..."
                page={3}
              />
              <SourceCitationCard
                title="Deep Learning Fundamentals — Chapter 6"
                excerpt="Backpropagation computes the gradient of the loss function with respect to each weight by applying the chain rule of calculus iteratively."
                page="47–48"
                href="#"
              />
              <SourceCitationCard
                title="Lecture Notes — Week 7"
                excerpt="Dropout regularization randomly zeroes out neurons during training, preventing co-adaptation and reducing overfitting on the training set."
                page={2}
              />
            </div>
          </Section>

          {/* ── AI Answer ───────────────────────────────── */}
          <Section title="AI Answer Card" description="Grounded response with inline citations">
            <div className="flex flex-col gap-3">
              <AiAnswerCard
                answer="The Transformer architecture replaces recurrence with self-attention, allowing it to model dependencies regardless of their distance in the input or output sequences. Each attention head learns a different representation subspace, and the outputs are concatenated before a final linear projection."
                citations={[
                  { id: 1, label: "Attention Is All You Need · p.3" },
                  { id: 2, label: "Deep Learning Ch.6 · p.47" },
                ]}
              />
              <AiAnswerCard answer="" isLoading />
            </div>
          </Section>

          {/* ── Empty State ─────────────────────────────── */}
          <Section title="Empty State" description="Shown when a list or view has no content">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <EmptyState
                icon={FileQuestion}
                title="No documents yet"
                description="Upload a PDF to start chatting with your documents."
                action={
                  <Button size="sm">
                    <Plus data-icon="inline-start" />
                    Upload document
                  </Button>
                }
              />
              <EmptyState
                icon={MessageSquare}
                title="No conversations"
                description="Open a document and ask your first question."
              />
            </div>
          </Section>

          {/* ── Layout Preview ──────────────────────────── */}
          <Section title="Layout Preview" description="App shell · sidebar + topbar structure">
            <SurfaceCard padding="none" className="overflow-hidden">
              {/* Mini chrome */}
              <div className="flex border-b border-border bg-muted/30 px-4 py-2">
                <div className="flex items-center gap-1.5">
                  <div className="size-2.5 rounded-full bg-muted" />
                  <div className="size-2.5 rounded-full bg-muted" />
                  <div className="size-2.5 rounded-full bg-muted" />
                </div>
              </div>
              {/* Shell */}
              <div className="flex" style={{ height: 320 }}>
                {/* Sidebar */}
                <aside className="flex w-48 shrink-0 flex-col gap-1 border-r border-border bg-sidebar p-3">
                  {/* Logo */}
                  <div className="mb-3 flex items-center gap-2 px-2 py-1.5">
                    <div className="flex size-5 items-center justify-center rounded bg-foreground">
                      <BookOpen className="size-3 text-background" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">StudyMate</span>
                  </div>
                  {/* Nav items */}
                  {[
                    { icon: FileText, label: "Library", active: true },
                    { icon: MessageSquare, label: "Chat" },
                    { icon: Hash, label: "Quizzes" },
                    { icon: BookOpen, label: "Summaries" },
                  ].map(({ icon: Icon, label, active }) => (
                    <div
                      key={label}
                      className={`flex items-center gap-2.5 rounded-md px-2 py-1.5 ${
                        active
                          ? "bg-sidebar-accent text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon className="size-3.5" />
                      <span className="text-xs font-medium">{label}</span>
                    </div>
                  ))}
                  <div className="mt-auto border-t border-border pt-3">
                    <div className="flex items-center gap-2 rounded-md px-2 py-1.5">
                      <div className="flex size-5 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                        B
                      </div>
                      <span className="truncate text-xs text-muted-foreground">Benedict</span>
                    </div>
                  </div>
                </aside>
                {/* Main */}
                <div className="flex flex-1 flex-col overflow-hidden">
                  {/* Topbar */}
                  <div className="flex items-center justify-between border-b border-border px-4 py-3">
                    <p className="text-sm font-semibold text-foreground">Library</p>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-36 rounded border border-border bg-muted/50" />
                      <div className="flex h-6 items-center gap-1 rounded bg-foreground px-2">
                        <Plus className="size-3 text-background" />
                        <span className="text-xs font-medium text-background">Upload</span>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-2 overflow-hidden p-4">
                    {[
                      { title: "Attention Is All You Need", status: "ready" as const },
                      { title: "Deep Learning Fundamentals", status: "processing" as const },
                      { title: "Lecture Notes — Week 7", status: "draft" as const },
                    ].map((doc) => (
                      <div
                        key={doc.title}
                        className="flex items-center justify-between rounded-md border border-border bg-card px-3 py-2"
                      >
                        <div className="flex items-center gap-2">
                          <FileText className="size-3.5 text-muted-foreground" />
                          <span className="text-xs text-foreground">{doc.title}</span>
                        </div>
                        <StatusBadge status={doc.status} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SurfaceCard>
          </Section>

          {/* ── Page Header ─────────────────────────────── */}
          <Section title="Page Header" description="Title row with optional description and actions">
            <SurfaceCard padding="none" className="overflow-hidden">
              <PageHeader
                title="My Library"
                description="24 documents · 8 quizzes · 3 summaries"
                actions={
                  <>
                    <Button variant="outline" size="sm">
                      Filter
                    </Button>
                    <Button size="sm">
                      <Plus data-icon="inline-start" />
                      Upload
                    </Button>
                  </>
                }
              />
              <div className="p-5">
                <p className="text-xs text-muted-foreground">Page content goes here.</p>
              </div>
            </SurfaceCard>
          </Section>

          {/* Footer */}
          <div className="border-t border-border pt-6 text-center">
            <p className="text-xs text-muted-foreground">
              StudyMate AI — Design System · {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
