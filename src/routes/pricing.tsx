import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/studio/studio-chrome";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Pinmaker" },
      { name: "description", content: "Simple plans for making Pinterest video ads: start free, scale when your ads do." },
      { property: "og:title", content: "Pricing — Pinmaker" },
      { property: "og:description", content: "Start free, then pay per finished Pinterest video ad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Starter",
    price: "Free",
    note: "For your first few Pins",
    features: ["3 finished ads per month", "Chat revisions", "Watermark-free downloads"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Studio",
    price: "€39",
    note: "per month",
    features: ["30 finished ads per month", "Unlimited revisions", "Brand kit and saved hooks", "Board and product-page imports"],
    cta: "Choose Studio",
    featured: true,
  },
  {
    name: "Agency",
    price: "€149",
    note: "per month",
    features: ["Unlimited ads", "5 brand workspaces", "Shared review links", "Priority rendering"],
    cta: "Talk to us",
    featured: false,
  },
];

function Pricing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-[1240px] px-5 pb-20 pt-10 text-center md:px-8">
        <h1 className="text-balance text-4xl font-semibold md:text-6xl">Pay for the Pins that ship.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
          Every plan includes the full back-and-forth: you say what feels off, your assistant rebuilds.
        </p>

        <div className="mt-14 grid gap-5 text-left md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-[28px] border bg-card p-7 ${plan.featured ? "border-primary shadow-[0_24px_80px_-42px_var(--shadow-color)]" : "border-border"}`}
            >
              {plan.featured && (
                <span className="mb-4 w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                  Most chosen
                </span>
              )}
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              <p className="mt-4 text-4xl font-semibold">{plan.price}</p>
              <p className="mt-1 text-sm text-muted-foreground">{plan.note}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {feature}
                  </li>
                ))}
              </ul>
              <Link to="/studio" className="mt-7">
                <Button variant={plan.featured ? "default" : "secondary"} className="h-12 w-full rounded-full shadow-none">
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
