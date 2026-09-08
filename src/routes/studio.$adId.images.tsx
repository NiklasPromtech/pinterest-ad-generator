import { createFileRoute } from "@tanstack/react-router";
import { Plus, Star } from "lucide-react";

import adImage from "@/assets/pinterest-interior-ad.jpg";
import { Button } from "@/components/ui/button";
import { sourceImages } from "@/lib/studio-data";

export const Route = createFileRoute("/studio/$adId/images")({
  component: ImagesPanel,
});

function ImagesPanel() {
  return (
    <div className="flex-1 bg-workspace p-5 md:p-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">Source images</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Six images pulled from your board and product page, scored for how well they open a Pin.
          </p>
        </div>
        <Button variant="secondary" className="h-11 rounded-full shadow-none">
          <Plus /> Add images
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {sourceImages.map((image) => (
          <figure key={image.name} className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={adImage} alt={image.name} width={768} height={1365} className="h-full w-full object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold">
                {image.label}
              </span>
              <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-card/90 px-2.5 py-1 text-xs font-semibold">
                <Star className="size-3 fill-primary text-primary" /> {image.score}
              </span>
            </div>
            <figcaption className="flex items-center justify-between px-4 py-3 text-xs">
              <span className="font-medium">{image.name}</span>
              <span className="text-muted-foreground">{image.size}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
