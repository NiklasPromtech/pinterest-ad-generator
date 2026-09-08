import { Link } from "@tanstack/react-router";
import { Paperclip, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Ad } from "@/lib/studio-data";

export function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-primary text-primary-foreground ${small ? "size-8" : "size-10"}`}
      aria-hidden="true"
    >
      <span className={small ? "text-sm font-bold" : "text-base font-bold"}>P</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <nav
      className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-5 md:px-8"
      aria-label="Primary navigation"
    >
      <Link to="/" className="flex items-center gap-3 font-semibold tracking-tight">
        <BrandMark small />
        <span>Pinmaker</span>
      </Link>
      <div className="flex items-center gap-1 sm:gap-2">
        <Link to="/how-it-works" className="hidden px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground sm:block">
          How it works
        </Link>
        <Link to="/pricing" className="hidden px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground sm:block">
          Pricing
        </Link>
        <Link to="/studio">
          <Button className="h-11 rounded-full px-5 shadow-none">Open the studio</Button>
        </Link>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center gap-3 font-semibold">
          <BrandMark small />
          <span>Pinmaker</span>
        </Link>
        <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
          <Link to="/how-it-works" className="hover:text-foreground">How it works</Link>
          <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
          <Link to="/studio" className="hover:text-foreground">Studio</Link>
        </div>
      </div>
    </footer>
  );
}

export function ChatPanel({ ad, status }: { ad: Ad; status: string }) {
  return (
    <aside className="flex min-h-[650px] flex-col border-b border-border bg-background/70 lg:border-b-0 lg:border-r">
      <header className="border-b border-border bg-card p-6">
        <div className="flex items-center gap-3">
          <BrandMark small />
          <div>
            <h2 className="font-semibold">Creative assistant</h2>
            <p className="text-xs text-muted-foreground">{ad.title}</p>
          </div>
        </div>
      </header>
      <div className="flex-1 space-y-6 overflow-auto p-6">
        <div className="flex gap-3">
          <BrandMark small />
          <div className="rounded-2xl rounded-tl-sm border border-border bg-card p-4 text-sm leading-6">
            I found four distinct weddings in the board. The confetti exit is the strongest opener — it
            feels unmistakably like the day.
          </div>
        </div>
        <div className="flex flex-row-reverse gap-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-muted text-xs font-semibold">NA</span>
          <div className="rounded-2xl rounded-tr-sm bg-muted p-4 text-sm leading-6">
            Keep the joy, but make it feel more editorial. Can the copy arrive after the movement?
          </div>
        </div>
        <div className="flex gap-3">
          <BrandMark small />
          <div className="rounded-2xl rounded-tl-sm border border-border bg-card p-4 text-sm leading-6">
            Yes. I’ll let the confetti carry the first two seconds, then bring in:{" "}
            <strong>“{ideasHook}”</strong>
          </div>
        </div>
        <div className="flex items-center gap-3 pl-11 text-xs font-medium text-muted-foreground">
          <span className="size-2 animate-pulse rounded-full bg-primary" /> {status}
        </div>
      </div>
      <div className="border-t border-border bg-card p-4">
        <div className="flex items-end gap-2 rounded-2xl bg-secondary p-2 pl-3">
          <Button variant="ghost" size="icon" className="shrink-0 rounded-full" aria-label="Attach image">
            <Paperclip />
          </Button>
          <Input placeholder="Ask for a change…" className="h-10 border-0 bg-transparent shadow-none focus-visible:ring-0" />
          <Button size="icon" className="shrink-0 rounded-full shadow-none" aria-label="Send message">
            <Send />
          </Button>
        </div>
      </div>
    </aside>
  );
}

const ideasHook = "A big day. Still recognisably you.";
