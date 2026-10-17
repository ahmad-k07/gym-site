# Gym Site

A simple, calm website that tells you what to do in the gym. Search for a muscle, pick the area you want to focus on, and get exercises with a demo, sets, reps and rest.

> Status: v1 built and running locally. Not deployed yet.

## How it works

1. Search for a muscle group (e.g. "chest", or a synonym like "pecs").
2. Pick a sub-region (e.g. upper, middle, lower or whole chest). Groups with no sub-regions skip this step.
3. See a short warm-up routine, then the exercises to choose from, each with an animated demo (start and end photos swapping), form cues and variations.

The Splits page asks how many days a week you can train (2–6) and suggests splits: full body for 2–3 days, upper/lower or anterior/posterior for 4, push/pull/legs + upper/lower for 5, and upper/lower, anterior/posterior, push/pull/legs twice or the Batman split (chest and back, shoulders and arms, legs, twice) for 6. Hover or tap a day in the calendar to see which muscles to train. Seven days isn't offered because it's excessive and risky.

## Training prescription

Every exercise uses the same structure:

| | |
|---|---|
| Warm-up | 1 set at about 50% of your working weight (or lighter), for as many reps as you like |
| Working sets | 2–3 sets (2 recommended) |
| Reps | 6–10 recommended. Other rep ranges are shown where they suit an exercise (e.g. calves, abs, forearms). |
| Rest | At least 3 minutes, or until you feel ready. Take 5+ minutes if you need it. Resting too little costs you reps. |

Equipment assumes a full gym.

## Muscle groups

| Group | What to pick |
|---|---|
| Chest | 1 upper chest + 1 whole/flat movement (2 total) |
| Back | Upper and mid back: 1 upper row + 1 close-grip row + 1 lat movement. Lower back: SLDL |
| Shoulders | 1 press (front delts) + 1 lateral raise (side delts). Rear delts optional if you do an upper row |
| Biceps | 1 curl (single-arm curls help fix imbalances) |
| Triceps | 1 of Smith JM press, dips or overhead extension + 1 pushdown |
| Legs | Quads: squat or leg press + leg extension. Hamstrings: 1 leg curl. Glutes: hip thrust or abductor. Adductors: adductor machine. Calves: 1 |
| Abs | 1 |
| Forearms | Hammer or reverse curl; wrist curls optional |

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` makes a production build, and `npm run lint` checks the code.

## Stack

- Next.js 16 (App Router) + TypeScript
- Plain CSS with CSS Modules; design tokens in `src/app/globals.css`
- Exercise data in local typed files, with no database. Every page is generated at build time.
- Exercise images from [free-exercise-db](https://github.com/yuhonas/free-exercise-db) (public domain), stored in `public/exercises/`
- Hosting planned on Vercel

## Project structure

```
src/
  app/                    pages (each folder is a URL)
    page.tsx              home: search, muscle groups, link to splits
    train/[group]/        region picker, e.g. /train/chest
    train/[group]/[region]/  workout, e.g. /train/chest/upper
    splits/               split finder
  components/             reusable UI pieces (search box, exercise card…)
  data/
    muscles.ts            groups, sections, tips, warm-ups, synonyms, which exercises go where
    exercises.ts          exercise details and form cues
    splits.ts             training splits for 2–6 days a week
  lib/
    search.ts             search scoring
    prescription.ts       warm-up / sets / reps / rest text
```

To change which exercises appear for a muscle, edit `exerciseIds` in `src/data/muscles.ts`.

## Roadmap

- [x] HTML/CSS prototype (in git history)
- [x] Next.js + TypeScript app
- [x] Exercise data for 8 muscle groups (60 exercises)
- [x] Search with synonyms, section picker, workout pages with warm-ups, split finder
- [x] Responsive layout, dark mode (lime accent), condensed display headings, keyboard-accessible search
- [ ] Deploy to Vercel
- [ ] Optional: custom domain
- [ ] v2: Accounts and progression tracking

## Disclaimer

This site gives general training information, not medical advice.
