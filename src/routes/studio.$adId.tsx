import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, MoreHorizontal } from "lucide-react";

import { BrandMark, ChatPanel } from "@/components/studio/studio-chrome";
import { Button } from "@/components/ui/button";
import { findAd } from "@/lib/studio-data";

export const Route = createFileRoute("/studio/$adId")({
  head: () => ({
    meta: [
      { title: "Ad workspace — Pinmaker Studio" },
      { name: "description", content: "Shape a Pinterest video ad: source images, ideas, storyboard and the finished cut." },
      { property: "og:title", content: "Ad workspace — Pinmaker Studio" },
      { property: "og:description", content: "See the source material and the decisions behind your Pinterest video ad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdWorkspace,
});

function AdWorkspace() {
  const { adId } = Route.useParams();
  const ad = findAd(adId);

  return (
    <main className="min-h-screen bg-secondary/60 text-foreground">
      <div className="mx-auto flex h-20 max-w-[1180px] items-center justify-between px-4 md:px-0">
        <div className="flex items-center gap-3">
          <Link to="/studio" aria-label="Back to your ads">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeft />
            </Button>
          </Link>
          <BrandMark small />
          <div>
            <h1 className="font-semibold leading-tight">{ad.title}</h1>
            <p className="text-xs text-muted-foreground">
              {ad.brand} · {ad.status} · {ad.duration}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full" aria-label="More options">
          <MoreHorizontal />
        </Button>
      </div>

      <div className="mx-auto grid min-h-[720px] max-w-[1180px] overflow-hidden rounded-t-[32px] border border-b-0 border-border bg-card shadow-[0_28px_90px_-42px_var(--shadow-color)] lg:grid-cols-[380px_1fr]">
        <ChatPanel ad={ad} status="Your first cut is ready to shape." />

        <div className="flex min-w-0 flex-col">
          <div className="flex items-center gap-1 overflow-x-auto border-b border-border px-3 md:px-5">
            <TabLink to="/studio/$adId/images" adId={adId} label="Images" />
            <TabLink to="/studio/$adId/ideas" adId={adId} label="Ideas" />
            <TabLink to="/studio/$adId/storyboard" adId={adId} label="Storyboard" />
            <TabLink to="/studio/$adId" adId={adId} label="Video" exact />
          </div>
          <Outlet />
        </div>
      </div>
    </main>
  );
}

function TabLink({
  to,
  adId,
  label,
  exact = false,
}: {
  to: "/studio/$adId" | "/studio/$adId/images" | "/studio/$adId/ideas" | "/studio/$adId/storyboard";
  adId: string;
  label: string;
  exact?: boolean;
}) {
  return (
    <Link
      to={to}
      params={{ adId }}
      activeOptions={{ exact }}
      className="border-b-2 border-transparent px-4 py-5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      activeProps={{ className: "border-primary text-foreground" }}
    >
      {label}
    </Link>
  );
}
