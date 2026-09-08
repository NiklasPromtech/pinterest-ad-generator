import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, Check } from "lucide-react";

import { missingInputs, storyboard } from "@/lib/studio-data";

export const Route = createFileRoute("/studio/$adId/storyboard")({
  component: StoryboardPanel,
});

function StoryboardPanel() {
  return (
    <div className="flex-1 bg-workspace p-5 md:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Storyboard</h2>
        <p className="mt-1 text-sm text-muted-foreground">Beat by beat, with the decisions you already accepted.</p>
      </div>

      <ol className="space-y-3">
        {storyboard.map((beat) => (
          <li key={beat.beat} className="flex flex-wrap items-center gap-4 rounded-3xl border border-border bg-card px-5 py-4">
            <span className="w-24 shrink-0 text-sm font-semibold text-primary">{beat.beat}</span>
            <span className="min-w-0 flex-1 text-sm leading-6">{beat.note}</span>
            <span
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${beat.state === "Accepted" ? "bg-secondary text-primary" : "bg-muted text-muted-foreground"}`}
            >
              {beat.state === "Accepted" ? <Check className="size-3.5" /> : <AlertCircle className="size-3.5" />}
              {beat.state}
            </span>
          </li>
        ))}
      </ol>

      <section className="mt-8 rounded-3xl border border-dashed border-border bg-card p-6">
        <h3 className="flex items-center gap-2 font-semibold">
          <AlertCircle className="size-4 text-primary" /> Still missing
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {missingInputs.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
