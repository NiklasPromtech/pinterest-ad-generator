import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy, MessageCircleMore, Play, RefreshCw } from "lucide-react";
import { useState } from "react";

import adImage from "@/assets/pinterest-interior-ad.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { findAd } from "@/lib/studio-data";

export const Route = createFileRoute("/studio/$adId/")({
  component: VideoPanel,
});

function VideoPanel() {
  const { adId } = Route.useParams();
  const ad = findAd(adId);
  const [revision, setRevision] = useState("");
  const [note, setNote] = useState("First cut · " + ad.duration);

  const rebuild = () => {
    if (!revision.trim()) return;
    setNote(`Rebuilding: “${revision.trim()}”`);
    setRevision("");
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-workspace px-5 py-9 md:px-10">
      <div className="flex items-center gap-7 md:gap-10">
        <div className="relative aspect-[2/3] w-[240px] overflow-hidden rounded-[28px] bg-card shadow-[0_24px_70px_-20px_var(--shadow-color)] ring-8 ring-card sm:w-[280px]">
          <img
            src={adImage}
            alt={`The generated vertical video ad for ${ad.brand}`}
            width={768}
            height={1365}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-overlay via-overlay/65 to-transparent px-6 pb-7 pt-28 text-overlay-foreground">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold">
              <span className="size-5 rounded-full bg-primary" /> {ad.brand}
            </div>
            <h2 className="text-2xl font-semibold leading-tight">{ad.hook}</h2>
            <p className="mt-2 text-xs text-overlay-foreground/80">{ad.subline}</p>
            <div className="mt-5 rounded-full bg-card py-2.5 text-center text-sm font-semibold text-card-foreground">
              {ad.cta}
            </div>
          </div>
          <Button
            size="icon"
            variant="secondary"
            className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"
            aria-label="Play preview"
          >
            <Play className="fill-current" />
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <Button variant="secondary" size="icon" className="rounded-full shadow-sm" aria-label="Regenerate">
            <RefreshCw />
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full shadow-sm" aria-label="Duplicate">
            <Copy />
          </Button>
          <Button size="icon" className="rounded-full shadow-sm" aria-label="Approve">
            <Check />
          </Button>
        </div>
      </div>

      <div className="mt-9 w-full max-w-xl">
        <div className="flex items-center justify-between px-1">
          <label htmlFor="revision" className="text-sm font-semibold">
            What should be different?
          </label>
          <span className="text-xs text-muted-foreground">{note}</span>
        </div>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Input
            id="revision"
            value={revision}
            onChange={(event) => setRevision(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && rebuild()}
            placeholder="e.g. Lose the final frame, make the hook bolder"
            className="h-12 rounded-2xl bg-card px-4 shadow-none"
          />
          <Button onClick={rebuild} className="h-12 rounded-full px-6 shadow-none">
            <MessageCircleMore /> Rebuild
          </Button>
        </div>
      </div>
    </div>
  );
}
