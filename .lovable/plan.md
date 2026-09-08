# Pinterest Ad Short Generator — Design Exploration

## Goal
Produce and present three distinct visual design directions for the Pinterest ad-short generator tool, covering both the public landing page and the in-app studio (chat-to-video workflow). The chosen aesthetic is playful/pop, inspired by Pinterest's own visual language.

## Scope
1. **Landing page** — hero, value proposition, how-it-works, and a clear CTA.
2. **Studio UI** — the chat-to-video workspace: chat panel on the left, generated clip preview and action panel on the right.

## Approach
- Generate three rendered HTML + Tailwind CSS design directions.
- Lock the playful-pop palette across all three, but vary composition, density, hierarchy, and motion register so each direction has a clear point of view.
- Present the directions for selection before any code is written.

## Deliverables
1. Three rendered design directions (landing + studio concepts).
2. A concise picker for the user to choose one direction.
3. After selection: implement the chosen direction as real project pages/components.

## Technical notes
- The project is a fresh TanStack Start app with Tailwind v4 and shadcn/ui tokens in `src/styles.css`.
- The chosen direction's color tokens, typography, and layout will be ported into the project's design system.
- No backend or auth work is required for this design phase.
