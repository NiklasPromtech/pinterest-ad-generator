export type Ad = {
  id: string;
  title: string;
  brand: string;
  status: "Draft" | "First cut" | "Approved";
  duration: string;
  updated: string;
  hook: string;
  subline: string;
  cta: string;
};

export const ads: Ad[] = [
  {
    id: "atelier-north",
    title: "Wedding jumpsuit campaign",
    brand: "Atelier North",
    status: "First cut",
    duration: "9 sec",
    updated: "Edited 4 minutes ago",
    hook: "A softer place to land.",
    subline: "Objects for slower living.",
    cta: "Shop the collection",
  },
  {
    id: "linen-season",
    title: "Linen season launch",
    brand: "Maison Rive",
    status: "Approved",
    duration: "12 sec",
    updated: "Edited yesterday",
    hook: "Made for long afternoons.",
    subline: "Washed linen, made to age well.",
    cta: "See the range",
  },
  {
    id: "morning-ritual",
    title: "Morning ritual set",
    brand: "Kettle & Co",
    status: "Draft",
    duration: "7 sec",
    updated: "Edited 3 days ago",
    hook: "Slow starts, better days.",
    subline: "Stoneware for the first cup.",
    cta: "Start the ritual",
  },
];

export function findAd(id: string): Ad {
  return ads.find((ad) => ad.id === id) ?? ads[0];
}

export const sourceImages = [
  { label: "Product", name: "Jumpsuit — front", score: 92, size: "1600 × 2400" },
  { label: "Product", name: "Jumpsuit — detail", score: 84, size: "1600 × 2400" },
  { label: "Inspiration", name: "Confetti exit", score: 96, size: "1200 × 1800" },
  { label: "Inspiration", name: "Garden table", score: 71, size: "1200 × 1500" },
  { label: "Inspiration", name: "Golden hour aisle", score: 88, size: "1080 × 1620" },
  { label: "Product", name: "Fabric close-up", score: 65, size: "1600 × 1600" },
];

export const ideas = {
  facts: [
    "Wide-leg jumpsuit, ivory crepe, made in Portugal",
    "Sizes 32–52, free returns within 30 days",
    "Price point 289 EUR",
  ],
  constraints: [
    "No faces in close-up",
    "Copy must stay under 6 words on screen",
    "Vertical 9:16 only",
  ],
  angles: [
    "The alternative to a dress — still unmistakably bridal",
    "One outfit, three parts of the day",
    "Comfort as the real luxury",
  ],
  hooks: [
    "A big day. Still recognisably you.",
    "The dress alternative you'll re-wear.",
    "Confetti approved.",
  ],
};

export const storyboard = [
  { beat: "0.0 – 2.0s", note: "Confetti exit, slow motion, no copy", state: "Accepted" },
  { beat: "2.0 – 4.5s", note: "Hook arrives: “A big day. Still recognisably you.”", state: "Accepted" },
  { beat: "4.5 – 7.0s", note: "Fabric detail, movement in the leg", state: "Suggested" },
  { beat: "7.0 – 9.0s", note: "Product card and shop button", state: "Accepted" },
];

export const missingInputs = [
  "A back view of the jumpsuit",
  "Confirmed price for the campaign period",
];
