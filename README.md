# Gym Site

A simple, calm website that tells you what to do in the gym. Search for a muscle, pick the area you want to focus on, and get exercises with a demo, sets, reps and rest.

> Status: v1 built and running locally. Not deployed yet.

## How it works

1. Search for a muscle group (e.g. "chest", or a synonym like "pecs").
2. Pick a sub-region (e.g. upper, middle, lower or whole chest). Groups with no sub-regions skip this step.
3. See 4 exercises, ordered from compound to isolation, each with an animated demo (start and end photos swapping) and form cues.

## Training prescription

Every exercise uses the same structure:

| | |
|---|---|
| Warm-up | 1 set at about 50% of your working weight (or lighter), for as many reps as you like |
| Working sets | 2–3 sets (2 recommended) |
| Reps | 6–10 recommended. Other rep ranges are shown where they suit an exercise (e.g. calves, abs, forearms). |
| Rest | At least 3 minutes, or until you feel ready. Take 5+ minutes if you need it. Resting too little costs you reps. |

Equipment assumes a full gym.

## Muscle groups (v1)

| Group | Sub-regions |
|---|---|
| Chest | Upper · Middle · Lower · Whole |
| Back | Lats (width) · Upper/mid back (thickness) · Whole |
| Shoulders | Front · Side · Rear · Whole |
| Biceps | Long head · Short head · Brachialis · Whole |
| Triceps | Long head · Lateral/medial heads · Whole |
| Legs | Quads · Hamstrings · Glutes · Calves · Whole |
| Abs | Upper · Lower · Obliques · Whole |
| Forearms | Flexors · Extensors · Whole |
| Lower back | (none) |

## Learn section

Short on-site explanations (a few sentences each, no external links) of progressive overload, hypertrophy, calorie deficits, cutting and bulking.

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
    page.tsx              home: search, muscle groups, learn teasers
    train/[group]/        region picker, e.g. /train/chest
    train/[group]/[region]/  workout, e.g. /train/chest/upper
    learn/                learn page
  components/             reusable UI pieces (search box, exercise card…)
  data/
    muscles.ts            groups, regions, synonyms, which exercises go where
    exercises.ts          exercise details and form cues
    learn.ts              learn section text
  lib/
    search.ts             search scoring
    prescription.ts       warm-up / sets / reps / rest text
```

To change which exercises appear for a muscle, edit `exerciseIds` in `src/data/muscles.ts`.

## Roadmap

- [x] HTML/CSS prototype (in git history)
- [x] Next.js + TypeScript app
- [x] Exercise data for 9 muscle groups (31 workouts, 93 exercises)
- [x] Search with synonyms, region picker, workout pages, learn page
- [x] Responsive layout, dark mode, keyboard-accessible search
- [ ] Deploy to Vercel
- [ ] Optional: custom domain
- [ ] v2: Accounts and progression tracking

## Disclaimer

This site gives general training information, not medical advice.
