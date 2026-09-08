import { createFileRoute } from "@tanstack/react-router";

import { ideas } from "@/lib/studio-data";

export const Route = createFileRoute("/studio/$adId/ideas")({
  component: IdeasPanel,
});

const groups = [
  { title: "Facts", note: "Taken straight from your product page", items: ideas.facts },
  { title: "Constraints", note: "Rules the cut must respect", items: ideas.constraints },
  { title: "Angles", note: "Ways of telling the story", items: ideas.angles },
  { title: "Hooks", note: "The first line on screen", items: ideas.hooks },
];

function IdeasPanel() {
  return (
    <div className="flex-1 bg-workspace p-5 md:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Ideas</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Everything the cut is built from, written down before anything is rendered.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {groups.map((group) => (
          <section key={group.title} className="rounded-3xl border border-border bg-card p-6">
            <h3 className="font-semibold">{group.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{group.note}</p>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-secondary/70 px-4 py-3 text-sm leading-6">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
