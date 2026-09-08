import { createFileRoute, Link } from "@tanstack/react-router";
import { Image as ImageIcon, Lightbulb, Link2, MessageCircleMore, Pin, Play } from "lucide-react";

import adImage from "@/assets/pinterest-interior-ad.jpg";
import { SiteFooter, SiteHeader } from "@/components/studio/studio-chrome";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — Pinmaker" },
      {
        name: "description",
        content: "Drop in photos, a product page, or a Pinterest board, watch the first cut, then shape it with plain-language feedback.",
      },
      { property: "og:title", content: "How it works — Pinmaker" },
      { property: "og:description", content: "From dropped photos to a finished Pinterest video ad, with you in the loop." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  {
    icon: ImageIcon,
    title: "Drop the raw material",
    body: "Photos from a shoot, a product page, or a Pinterest board that already feels like your brand.",
  },
  {
    icon: Lightbulb,
    title: "See the thinking",
    body: "Facts, constraints, angles and hooks are written down before anything is rendered, so nothing is invented.",
  },
  {
    icon: Play,
    title: "Watch a first cut",
    body: "A vertical Pin, framed for the feed, with the opening moment chosen from your strongest image.",
  },
  {
    icon: MessageCircleMore,
    title: "Shape it together",
    body: "Say what feels off in your own words. The assistant explains its choice, then rebuilds the cut.",
  },
];

const sources = [
  { icon: ImageIcon, label: "Images", note: "JPG, PNG, HEIC — product shots and inspiration" },
  { icon: Link2, label: "Web pages", note: "Product or campaign URLs, for copy and pricing" },
  { icon: Pin, label: "Pinterest", note: "A single Pin or a whole board" },
];

function HowItWorks() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1240px] px-5 pb-16 pt-10 md:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold text-primary">HOW IT WORKS</p>
          <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
            A conversation, not a black box.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Pinmaker shows you the source material, the decisions and the cut — and lets you change any of
            it in plain language.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <ol className="grid gap-5 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-[28px] border border-border bg-card p-7">
                <span className="grid size-11 place-items-center rounded-full bg-secondary text-primary">
                  <step.icon className="size-5" />
                </span>
                <p className="mt-5 text-sm font-semibold text-primary">0{index + 1}</p>
                <h2 className="mt-2 text-lg font-semibold">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mx-auto aspect-[2/3] w-[280px] overflow-hidden rounded-[28px] bg-card ring-8 ring-card">
            <img src={adImage} alt="A finished vertical Pinterest video ad for a warm minimalist interior brand" width={768} height={1365} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="text-3xl font-semibold md:text-4xl">What you can drop in</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {sources.map((source) => (
              <div key={source.label} className="rounded-3xl bg-card p-6">
                <source.icon className="size-5 text-primary" />
                <h3 className="mt-4 font-semibold">{source.label}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{source.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/studio">
              <Button className="h-12 rounded-full px-6 shadow-none">Open the studio</Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
