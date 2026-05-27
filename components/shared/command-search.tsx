"use client"

import { cn } from "@/lib/utils"
import { Search, X } from "lucide-react"
import { useState } from "react"

interface CommandSearchProps {
  placeholder?: string
  onSearch?: (value: string) => void
  className?: string
}

export function CommandSearch({
  placeholder = "Search...",
  onSearch,
  className,
}: CommandSearchProps) {
  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onSearch?.(e.target.value)
  }

  const handleClear = () => {
    setValue("")
    onSearch?.("")
  }

  return (
    <div
      className={cn(
        "relative flex items-center rounded-lg border border-border bg-muted/50 transition-colors focus-within:border-ring focus-within:bg-background",
        className,
      )}
    >
      <Search className="absolute left-3 size-4 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full bg-transparent py-2 pl-9 pr-8 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-2 flex size-5 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="size-3.5" />
        </button>
      )}
    </div>
  )
}
