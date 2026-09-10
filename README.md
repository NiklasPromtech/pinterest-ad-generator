# vidgen studio

Short-form video ads for Pinterest, built from a brand's own photographs.

You give it a company and a website. It reads the site — the typeface, the
colours, the logo, every usable photograph — writes a storyboard in
conversation with you, and assembles a vertical ad: an animated opener, a
generated clip, an end card. You watch the whole thing before anything is paid
for.

**Live at [shortformvideoadgeneratorforpinterest.com](https://shortformvideoadgeneratorforpinterest.com)**

---

## Why it is a pipeline and not an API wrapper

Kling makes 5–10 second silent clips with no legible text. A deliverable
Pinterest ad is up to 15 seconds, captioned, branded, and ends on an ask. The
gap between those two things is the whole tool.

```
brief ──▶ storyboard ──▶ preview ──▶ footage ──▶ render ──▶ sound
       Claude          browser      Kling       ffmpeg     Kling
                        free                    free
```

Every stage writes a file you can read and argue with before paying for the
next one. Only two stages cost anything, and both are behind a version you can
already watch.

**Generated video is good at photographic motion and bad at words. A browser is
the reverse.** So anything that has to be read sharply — the hook, the captions,
the call to action — is HTML and CSS rendered in headless Chromium, frame by
frame, and costs nothing. Only the middle, where a photograph has to move, goes
to a video model.

## What it actually does

**Reads the brand once.** Scrapes the company's site for its typeface, palette,
logo and photographs, downloads the real font files, and records it as a brand
the campaigns and ads underneath inherit. Optionally reads their Pinterest
profile and boards too — a brand's own pins are usually photography that is not
on their website.

**Judges every photograph.** Each image is scored out of ten for whether it
would sell *this* product to *this* buyer — not for artistic merit — and
marked with the region that must not be covered. That box is what lets an
animation be fitted to the picture, instead of the picture being cropped to fit
the animation.

**Asks before it builds.** One question at a time, as buttons rather than
prose, because an open question gets "yeah sounds good" and named options get a
decision.

**Says what it decided.** Every call the model made that you didn't is listed
with the reason and the other option one click away.

**Shows you the ad for free.** The whole thing — real timing, real captions,
real shape — with shots that have no footage yet standing in on their own start
frames. This is the last cheap chance to change anything.

**Then, and only then, films it.** One Kling clip per shot, from its start
frame and its prompt. This is the only step that costs money, and the tab that
spends it lists every shot and its price first.

## The interface

Nine tabs, in the order the work happens:

| | |
|---|---|
| **Brand** · **Campaign** | What the ad is written from |
| **Images** · **Ideas** · **Storyboard** | The raw material and the plan |
| **Preview** | The whole ad, free |
| **Footage** | The only step that costs anything |
| **Video (mute)** | The rendered ad — what Pinterest autoplays |
| **Video with sound** | The same ad scored by Kling, for the tap-through |

Later steps stay locked until the ones before them are done, and a locked tab
says why rather than refusing to open. You cannot pay for footage before
watching the free preview, and you cannot render an ad whose clips do not exist
yet.

## Built for one surface, deliberately

Pinterest, and only Pinterest. 1080×1620, up to 15 seconds, and — the fact that
drives every other decision — **it autoplays muted in a feed at about a sixth
of its size.** So the hook has to be legible at thumbnail scale, the caption
cannot rely on sound, and a soundtrack is for the tap-through rather than the
scroll. Adding a second platform would mean two sets of these judgements and
half the conviction in each.

## Running it

Needs Python 3.11, `ffmpeg` and `ffprobe` on `PATH`, and keys for
[Anthropic](https://console.anthropic.com) and [Kling](https://app.klingai.com).

```bash
python3.11 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/playwright install chromium
cp .env.example .env        # then fill in the two keys
```

```bash
.venv/bin/python -m vidgen studio      # the web studio on :8420
.venv/bin/python -m vidgen ls          # everything you have made
```

There is a CLI for the same pipeline — `company new`, `campaign new`, `ad new`,
`learn`, `scrape` — if you would rather not use the browser.

## How it is put together

| | |
|---|---|
| `agent.py` | The conversation, its tools, and the doctrine it writes to |
| `motion.py` | The animation templates — pure CSS, rendered by Playwright |
| `render.py` | Preview and final assembly, ffmpeg |
| `generate.py`, `kling.py` | Footage, resumable and never double-billed |
| `audio.py` | Scoring a finished ad, keeping our picture and Kling's sound |
| `scrape.py`, `brandstyle.py`, `tagging.py` | Reading a brand and judging its photographs |
| `server.py` | FastAPI, Google sign-in, one private workspace per account |
| `static/index.html` | The studio |

Deployed on Cloud Run with the workspace on a mounted bucket. `./deploy.sh`
pins the account and project per invocation and checks its secrets before it
builds anything.

**[docs/HANDBOOK.md](docs/HANDBOOK.md)** is the long version: why the start
image decides the shot more than the prompt does, how five clips are made to
look like one ad, what each animation template is for, and where the money
goes.

## Status

Working and in use on real brands. Rough edges are listed at the end of the
handbook.

Not affiliated with, or endorsed by, Pinterest.
