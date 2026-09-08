import { Link, createFileRoute } from "@tanstack/react-router";
import { Clock, Plus } from "lucide-react";

import adImage from "@/assets/pinterest-interior-ad.jpg";
import { SiteFooter, SiteHeader } from "@/components/studio/studio-chrome";
import { ads } from "@/lib/studio-data";

export const Route = createFileRoute("/studio/")({
  head: () => ({
    meta: [
      { title: "Your ads — Pinmaker Studio" },
      { name: "description", content: "All your Pinterest video ads in one place: drafts, first cuts and approved Pins." },
      { property: "og:title", content: "Your ads — Pinmaker Studio" },
      { property: "og:description", content: "Pick up a draft or start a new Pinterest video ad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudioIndex,
});

const statusStyles: Record<string, string> = {
  Draft: "bg-muted text-muted-foreground",
  "First cut": "bg-secondary text-primary",
  Approved: "bg-primary text-primary-foreground",
};

function StudioIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-[1240px] px-5 pb-20 pt-6 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold md:text-4xl">Your ads</h1>
            <p className="mt-2 text-muted-foreground">Three campaigns in progress.</p>
          </div>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            to="/studio/$adId"
            params={{ adId: ads[0]!.id }}
            className="flex aspect-[2/3] flex-col items-center justify-center gap-3 rounded-[28px] border-2 border-dashed border-border bg-card text-center transition hover:-translate-y-1 hover:border-primary/50"
          >
            <span className="grid size-14 place-items-center rounded-full bg-secondary text-primary">
              <Plus className="size-6" />
            </span>
            <span className="font-semibold">New ad</span>
            <span className="max-w-[70%] text-sm text-muted-foreground">Drop photos, a link or a board</span>
          </Link>

          {ads.map((ad) => (
            <Link
              key={ad.id}
              to="/studio/$adId"
              params={{ adId: ad.id }}
              className="group overflow-hidden rounded-[28px] border border-border bg-card transition hover:-translate-y-1"
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={adImage}
                  alt={`Preview frame from the ${ad.title} video ad`}
                  width={768}
                  height={1365}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[ad.status]}`}>
                  {ad.status}
                </span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-overlay via-overlay/60 to-transparent px-5 pb-5 pt-20 text-overlay-foreground">
                  <p className="text-xs font-semibold">{ad.brand}</p>
                  <h2 className="mt-1 text-lg font-semibold leading-tight">{ad.title}</h2>
                </div>
              </div>
              <div className="flex items-center justify-between px-5 py-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" /> {ad.duration}
                </span>
                <span>{ad.updated}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
