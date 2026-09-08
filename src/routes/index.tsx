import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Copy,
  Image as ImageIcon,
  Link2,
  MessageCircleMore,
  MoreHorizontal,
  Paperclip,
  Pin,
  Play,
  RefreshCw,
  Send,
  Sparkles,
  Upload,
} from "lucide-react";
import { useRef, useState } from "react";

import adImage from "@/assets/pinterest-interior-ad.jpg";
import { SiteFooter, SiteHeader } from "@/components/studio/studio-chrome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pinmaker — Pinterest Video Ad Studio" },
      {
        name: "description",
        content: "Turn images, product pages, and Pinterest boards into polished video ads with a creative assistant in the loop.",
      },
      { property: "og:title", content: "Pinmaker — Pinterest Video Ad Studio" },
      {
        property: "og:description",
        content: "Drop in your inspiration, shape the story, and create a Pinterest-ready video ad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const tabs = ["Images", "Ideas", "Storyboard", "Video"];

function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-primary text-primary-foreground ${small ? "size-8" : "size-10"}`}
      aria-hidden="true"
    >
      <span className={small ? "text-sm font-bold" : "text-base font-bold"}>P</span>
    </span>
  );
}

function Index() {
  const [activeTab, setActiveTab] = useState("Video");
  const [link, setLink] = useState("");
  const [revision, setRevision] = useState("");
  const [status, setStatus] = useState("Your first cut is ready to shape.");
  const fileRef = useRef<HTMLInputElement>(null);

  const startProject = () => {
    document.querySelector("#studio")?.scrollIntoView({ behavior: "smooth" });
    setStatus(link ? `Imported ${link}` : "Add a link or photo to begin your ad.");
  };

  const rebuild = () => {
    if (!revision.trim()) return;
    setStatus(`Updating: “${revision.trim()}”`);
    setRevision("");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section id="top" className="mx-auto max-w-[1240px] px-5 pb-24 pt-12 text-center md:px-8 md:pt-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
            <Sparkles className="size-4 text-primary" /> Made for Pinterest ads
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.04] md:text-7xl">Drop in an idea.<br /><span className="text-primary">Get a Pin that moves.</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-8 text-muted-foreground">Bring a product page, a Pinterest board, or a few photos. Pinmaker turns them into a video ad you can shape with simple feedback.</p>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <div className="pointer-events-none absolute -left-14 top-10 hidden aspect-[2/3] w-32 -rotate-6 overflow-hidden rounded-[28px] bg-accent lg:block">
            <img src={adImage} alt="" width={768} height={1365} className="h-full w-full object-cover opacity-90" />
          </div>
          <div className="pointer-events-none absolute -right-12 bottom-8 hidden aspect-[2/3] w-28 rotate-6 overflow-hidden rounded-[26px] bg-secondary lg:block">
            <div className="flex h-full flex-col justify-end bg-accent p-4 text-left"><span className="text-3xl font-semibold">Good<br />things<br />move.</span></div>
          </div>

          <div className="relative rounded-[36px] border-2 border-dashed border-border bg-card px-6 py-12 shadow-[0_24px_80px_-36px_var(--shadow-color)] transition duration-300 hover:-translate-y-1 hover:border-primary/50 md:px-14 md:py-16">
            <input ref={fileRef} type="file" multiple accept="image/*" className="hidden" onChange={(event) => setStatus(`${event.target.files?.length ?? 0} photos added. Ready to build.`)} />
            <div className="mx-auto mb-7 grid size-16 place-items-center rounded-full bg-secondary text-primary"><Upload className="size-7" /></div>
            <h2 className="text-2xl font-semibold md:text-3xl">What are we making today?</h2>
            <p className="mt-2 text-muted-foreground">Drop files anywhere, or choose a starting point</p>

            <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              <Button variant="secondary" className="h-14 rounded-2xl shadow-none" onClick={() => fileRef.current?.click()}><ImageIcon /> Add photos</Button>
              <Button variant="secondary" className="h-14 rounded-2xl shadow-none" onClick={() => document.querySelector<HTMLInputElement>("#source-link")?.focus()}><Link2 /> Product page</Button>
              <Button variant="secondary" className="h-14 rounded-2xl shadow-none" onClick={() => document.querySelector<HTMLInputElement>("#source-link")?.focus()}><Pin /> Pinterest board</Button>
            </div>

            <div className="mx-auto mt-4 flex max-w-2xl items-center rounded-full bg-secondary p-1.5 pl-5 ring-1 ring-border focus-within:ring-2 focus-within:ring-primary/30">
              <Link2 className="size-4 shrink-0 text-muted-foreground" />
              <Input id="source-link" value={link} onChange={(event) => setLink(event.target.value)} onKeyDown={(event) => event.key === "Enter" && startProject()} placeholder="Paste a product or Pinterest link" className="h-10 border-0 bg-transparent shadow-none focus-visible:ring-0" />
              <Button size="icon" className="size-10 shrink-0 rounded-full shadow-none" aria-label="Import link" onClick={startProject}><ArrowRight /></Button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 text-left md:grid-cols-3">
          {[
            ["01", "Drop the raw material", "Photos, product pages, or the Pinterest boards that already feel like you."],
            ["02", "Watch a first cut", "We find the visual story, frame it for Pinterest, and build the opening draft."],
            ["03", "Shape it together", "Say what feels off. Your assistant explains its choices, then rebuilds."],
          ].map(([number, title, body]) => (
            <div key={number} className="border-t border-border pt-5">
              <span className="text-sm font-semibold text-primary">{number}</span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="studio" className="bg-secondary/60 px-4 py-20 md:px-8">
        <div className="mx-auto mb-9 flex max-w-[1180px] items-end justify-between gap-6">
          <div><p className="mb-2 text-sm font-semibold text-primary">THE STUDIO</p><h2 className="text-3xl font-semibold md:text-4xl">Your taste stays in the loop.</h2></div>
          <p className="hidden max-w-md text-sm leading-6 text-muted-foreground md:block">No mystery box. See the source material, understand the choices, and change the cut in plain language.</p>
        </div>

        <div className="mx-auto grid min-h-[720px] max-w-[1180px] overflow-hidden rounded-[32px] border border-border bg-card shadow-[0_28px_90px_-42px_var(--shadow-color)] lg:grid-cols-[380px_1fr]">
          <aside className="flex min-h-[650px] flex-col border-b border-border bg-background/70 lg:border-b-0 lg:border-r">
            <header className="border-b border-border bg-card p-6">
              <div className="flex items-center gap-3"><BrandMark small /><div><h3 className="font-semibold">Creative assistant</h3><p className="text-xs text-muted-foreground">Wedding jumpsuit campaign</p></div></div>
            </header>
            <div className="flex-1 space-y-6 overflow-auto p-6">
              <div className="flex gap-3"><BrandMark small /><div className="rounded-2xl rounded-tl-sm border border-border bg-card p-4 text-sm leading-6">I found four distinct weddings in the board. The confetti exit is the strongest opener — it feels unmistakably like the day.</div></div>
              <div className="flex flex-row-reverse gap-3"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-muted text-xs font-semibold">NA</span><div className="rounded-2xl rounded-tr-sm bg-muted p-4 text-sm leading-6">Keep the joy, but make it feel more editorial. Can the copy arrive after the movement?</div></div>
              <div className="flex gap-3"><BrandMark small /><div className="rounded-2xl rounded-tl-sm border border-border bg-card p-4 text-sm leading-6">Yes. I’ll let the confetti carry the first two seconds, then bring in: <strong>“A big day. Still recognisably you.”</strong></div></div>
              <div className="flex items-center gap-3 pl-11 text-xs font-medium text-muted-foreground"><span className="size-2 animate-pulse rounded-full bg-primary" /> {status}</div>
            </div>
            <div className="border-t border-border bg-card p-4">
              <div className="flex items-end gap-2 rounded-2xl bg-secondary p-2 pl-3">
                <Button variant="ghost" size="icon" className="shrink-0 rounded-full" aria-label="Attach image"><Paperclip /></Button>
                <Input placeholder="Ask for a change…" className="h-10 border-0 bg-transparent shadow-none focus-visible:ring-0" />
                <Button size="icon" className="shrink-0 rounded-full shadow-none" aria-label="Send message"><Send /></Button>
              </div>
            </div>
          </aside>

          <div className="flex min-w-0 flex-col">
            <div className="flex items-center justify-between border-b border-border px-4 md:px-6">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => <Button key={tab} variant="ghost" className={`h-16 rounded-none border-b-2 px-4 shadow-none ${activeTab === tab ? "border-primary text-foreground" : "border-transparent text-muted-foreground"}`} onClick={() => setActiveTab(tab)}>{tab}</Button>)}
              </div>
              <Button variant="ghost" size="icon" className="hidden rounded-full md:inline-flex" aria-label="More options"><MoreHorizontal /></Button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center bg-workspace px-5 py-9 md:px-10">
              <div className="flex items-center gap-7 md:gap-10">
                <div className="relative aspect-[2/3] w-[240px] overflow-hidden rounded-[28px] bg-card shadow-[0_24px_70px_-20px_var(--shadow-color)] ring-8 ring-card sm:w-[280px]">
                  <img src={adImage} alt="A warm minimalist living room shown in the generated Pinterest video ad" width={768} height={1365} className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-overlay via-overlay/65 to-transparent px-6 pb-7 pt-28 text-overlay-foreground">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold"><span className="size-5 rounded-full bg-primary" /> Atelier North</div>
                    <h3 className="text-2xl font-semibold leading-tight">A softer place<br />to land.</h3>
                    <p className="mt-2 text-xs text-overlay-foreground/80">Objects for slower living.</p>
                    <div className="mt-5 rounded-full bg-card py-2.5 text-center text-sm font-semibold text-card-foreground">Shop the collection</div>
                  </div>
                  <Button size="icon" variant="secondary" className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg" aria-label="Play preview"><Play className="fill-current" /></Button>
                </div>
                <div className="flex flex-col gap-3">
                  <Button variant="secondary" size="icon" className="rounded-full shadow-sm" aria-label="Regenerate"><RefreshCw /></Button>
                  <Button variant="secondary" size="icon" className="rounded-full shadow-sm" aria-label="Duplicate"><Copy /></Button>
                  <Button size="icon" className="rounded-full shadow-sm" aria-label="Approve"><Check /></Button>
                </div>
              </div>

              <div className="mt-9 w-full max-w-xl">
                <div className="flex items-center justify-between px-1"><label htmlFor="revision" className="text-sm font-semibold">What should be different?</label><span className="text-xs text-muted-foreground">First cut · 9 sec</span></div>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <Input id="revision" value={revision} onChange={(event) => setRevision(event.target.value)} onKeyDown={(event) => event.key === "Enter" && rebuild()} placeholder="e.g. Lose the final frame, make the hook bolder" className="h-12 rounded-2xl bg-card px-4 shadow-none" />
                  <Button onClick={rebuild} className="h-12 rounded-full px-6 shadow-none"><MessageCircleMore /> Rebuild</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}